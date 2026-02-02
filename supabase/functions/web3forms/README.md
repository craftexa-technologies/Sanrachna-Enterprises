Supabase Edge Function: email-sender (formerly web3forms)

Purpose
- Forward client form submissions via SMTP using Nodemailer from server-side, keeping credentials secret.

Deploy & secret setup
1. Install and login to the Supabase CLI: `supabase login`
2. Set the secrets (do NOT put credentials in your repo):

```bash
supabase secrets set SMTP_HOST="smtp.yourprovider.com"
supabase secrets set SMTP_PORT="587"
supabase secrets set SMTP_USER="your-email@example.com"
supabase secrets set SMTP_PASS="your-password-or-app-key"
supabase secrets set CONTACT_RECEIVER_EMAIL="nssanrachana@gmail.com"
```

3. Deploy the function:

```bash
supabase functions deploy web3forms
```

Client usage
Send a POST JSON body to the function endpoint:

```js
// example
const res = await fetch('https://<your-project>.functions.supabase.co/web3forms', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, message, phone, address })
});
const data = await res.json();
```

Notes & next steps
- This function performs retries with exponential backoff when Web3Forms returns retryable errors, so check logs for retry warnings if you hit rate limits.
- Add validation, reCAPTCHA verification, and rate-limiting inside the function as needed.
- For DB-driven submissions, consider writing rows to a queue table and processing them with a scheduled worker.

reCAPTCHA (optional)
- To enable server-side reCAPTCHA verification, set the `RECAPTCHA_SECRET` as a Supabase secret:

```bash
supabase secrets set RECAPTCHA_SECRET="your_recaptcha_secret"
```

- Client must send the token in the request body as `recaptchaToken` when posting to the function.

Client example with reCAPTCHA token

```js
// get token on the client (example using grecaptcha)
// const token = await grecaptcha.execute('your-site-key', { action: 'submit' });

const res = await fetch('https://<your-project>.functions.supabase.co/web3forms', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, message, recaptchaToken: token })
});
const data = await res.json();
```
