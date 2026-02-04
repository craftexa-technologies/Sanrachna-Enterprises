// Supabase Edge Function: email-sender (formerly web3forms)
// @ts-ignore: Deno handles npm: imports automatically
import nodemailer from "npm:nodemailer";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

async function verifyRecaptcha(token: string | undefined): Promise<boolean> {
  // @ts-ignore: Deno
  const secret = Deno.env.get('RECAPTCHA_SECRET');
  if (!secret) return true; 
  if (!token) return false;

  const params = new URLSearchParams();
  params.append('secret', secret);
  params.append('response', token);

  try {
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', { method: 'POST', body: params });
    const body = await res.json();
    return !!body.success;
  } catch (_e) {
    return false;
  }
}

async function sendWithNodemailer(formData: any) {
  // @ts-ignore: Deno
  const host = Deno.env.get('SMTP_HOST');
  // @ts-ignore: Deno
  const port = parseInt(Deno.env.get('SMTP_PORT') || '465');
  // @ts-ignore: Deno
  const user = Deno.env.get('SMTP_USER');
  // @ts-ignore: Deno
  const pass = Deno.env.get('SMTP_PASS');
  // @ts-ignore: Deno
  const receiverEmail = Deno.env.get('CONTACT_RECEIVER_EMAIL') || 'nssanrachana@gmail.com';
  
  console.log(`Attempting connection to ${host}:${port} as ${user}...`);

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, 
    auth: { user, pass },
    connectionTimeout: 10000, // 10 seconds
  });

  const mailOptions = {
    from: `"${formData.name}" <${user}>`,
    to: receiverEmail,
    replyTo: formData.email,
    subject: formData.subject || `New Inquiry from ${formData.name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
        <h2 style="color: #1f2937; border-bottom: 2px solid #f3f4f6; padding-bottom: 10px;">New Website Inquiry</h2>
        <div style="margin: 20px 0;">
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone || 'N/A'}</p>
          <p><strong>Address:</strong> ${formData.address || 'N/A'}</p>
        </div>
        <div style="background-color: #f9fafb; padding: 15px; border-radius: 4px; border-left: 4px solid #3b82f6;">
          <strong>Message:</strong><br/>
          <p style="white-space: pre-wrap;">${formData.message}</p>
        </div>
        <p style="font-size: 12px; color: #6b7280; margin-top: 20px;">
          Sent from Sanrachana Enterprises Website
        </p>
      </div>
    `,
  };

  const info = await transporter.sendMail(mailOptions);
  return { ok: true, messageId: info.messageId };
}

// @ts-ignore: Deno
Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const body = await req.json();
    const { recaptchaToken, ...formData } = body;

    // Verify reCAPTCHA
    if (!await verifyRecaptcha(recaptchaToken)) {
      return new Response(JSON.stringify({ error: 'reCAPTCHA failed' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log("Processing email send request...");
    const result = await sendWithNodemailer(formData);
    console.log("Email sent successfully:", result.messageId);

    return new Response(JSON.stringify({ success: true, ok: true, messageId: result.messageId }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });

  } catch (error: any) {
    console.error('FINAL ERROR:', error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});
