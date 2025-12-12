"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitContactForm } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const result = await submitContactForm(null, formData);
    
    if (result.success) {
      toast({
        title: "Message Sent!",
        description: result.message,
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.message,
      });
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
          Get In <span className="text-primary animate-glow">Touch</span>
        </h2>
        <p className="text-muted-foreground mb-12">
          Have a project in mind or just want to say hi? Fill out the form below and I'll get back to you as soon as possible.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} className="bg-input border-border focus:ring-primary" />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your.email@example.com" {...field} className="bg-input border-border focus:ring-primary" />
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
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Tell me about your project..." {...field} className="min-h-[150px] bg-input border-border focus:ring-primary" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="text-center">
             <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground animate-button-glow" disabled={form.formState.isSubmitting}>
               {form.formState.isSubmitting ? "Sending..." : <>Send Message <Send className="ml-2 h-5 w-5" /></>}
             </Button>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default ContactSection;
