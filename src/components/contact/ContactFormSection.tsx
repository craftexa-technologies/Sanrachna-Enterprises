import { useState } from "react";
import { Phone, Mail, Clock, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/ui/ScrollReveal";
import LoadingButton from "@/components/ui/LoadingButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  address: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactFormSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    let submissionId: string | null = null;
    
    try {
      // 1. Save to Supabase (Database) first
      const { data: supabaseData, error: supabaseError } = await (supabase
        .from("contact_submissions" as any)
        .insert({
          name: values.name,
          email: values.email,
          phone: values.phone,
          address: values.address || null,
          message: values.message,
          email_sent: false, // Initially false
        } as any)
        .select("id")
        .single() as any);

      if (supabaseError) throw supabaseError;
      if (!supabaseData) throw new Error("No data returned from Supabase");
      submissionId = (supabaseData as any).id;

      // 2. Try to Send Email via the Supabase Edge Function (Notification)
      try {
        console.log("Invoking edge function for email notification...");
        const { data: functionData, error: functionError } = await supabase.functions.invoke("web3forms", {
          body: {
            subject: `New Inquiry from ${values.name} (Sanrachana)`,
            from_name: "Sanrachana Website Inquiry",
            ...values,
          },
        });

        console.log("Edge function result:", { functionData, functionError });

        if (functionError) {
          console.error("Email edge function failed", functionError);
          toast({
            variant: "destructive",
            title: "Notification not delivered",
            description: `Email notification failed: ${functionError.message}. Message is saved in Supabase.`,
          });
        } else if (functionData && (functionData.success === true || functionData.ok === true)) {
          console.log("Email reported success, updating database row...");
          if (submissionId) {
            const { error: updateError } = await (supabase as any)
              .from("contact_submissions")
              .update({ email_sent: true })
              .eq("id", submissionId);
            
            if (updateError) {
              console.error("Failed to update email_sent status:", updateError);
            } else {
              console.log("Database row updated: email_sent = true");
            }
          }
        } else {
          console.error("Email edge function returned unexpected data:", functionData);
          toast({
            variant: "destructive",
            title: "Notification status unknown",
            description: "Check function logs for details. Message is saved in Supabase.",
          });
        }
      } catch (err) {
        console.error("Email edge function network/error:", err);
        toast({
          variant: "destructive",
          title: "Notification error",
          description: "Could not reach the email function — message stored in Supabase.",
        });
      }

      toast({
        title: "Message Sent Successfully!",
        description: "We have received your message and will get back to you shortly.",
      });

      setIsSuccess(true);
      form.reset();
      
      // Reset success state after 10 seconds or when user clicks button
      setTimeout(() => setIsSuccess(false), 10000);
    } catch (error) {
      console.error("Submission Error:", error);
      toast({
        variant: "destructive",
        title: "Error Sending Message",
        description: "Something went wrong. Please try again or call us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98221 96355",
      href: "tel:+919822196355",
    },
    {
      icon: Mail,
      label: "Email",
      value: "nssanrachana@gmail.com",
      href: "mailto:nssanrachana@gmail.com",
    },
    {
      icon: Clock,
      label: "Hours",
      value: "09:00 am - 06:00 pm",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "160/18, Shivaji Park, Chinchwad, Pune - 411019",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Have Any Questions?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Thank you very much for your interest in our company and our services 
              and if you have any questions, please write us a message now!
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info ... (lines 100-120 unchanged) */}
          <ScrollReveal animation="fade-right">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Contact Us
              </span>
              <h3 className="text-2xl font-bold text-foreground mt-2 mb-8">
                Get in Touch
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {item.label}
                      </h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Contact Form */}
          <ScrollReveal animation="fade-left">
            {isSuccess ? (
              <div className="bg-card border border-primary/20 rounded-lg p-12 text-center flex flex-col items-center justify-center h-full animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Message Received!</h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. A member of our team at Sanrachana will 
                  get back to you within 24 hours.
                </p>
                <LoadingButton 
                  variant="outline" 
                  className="mt-8"
                  onClick={() => setIsSuccess(false)}
                >
                  Send Another Message
                </LoadingButton>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Your Name"
                              {...field}
                              className="border-border bg-card"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Your Email"
                              {...field}
                              className="border-border bg-card"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Your Contact Number"
                              {...field}
                              className="border-border bg-card"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Your Address"
                              {...field}
                              className="border-border bg-card"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="Your Message"
                            {...field}
                            rows={5}
                            className="border-border bg-card resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <LoadingButton
                    type="submit"
                    size="lg"
                    isLoading={isSubmitting}
                    loadingText="Sending..."
                    className="w-full md:w-auto"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </LoadingButton>
                </form>
              </Form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
