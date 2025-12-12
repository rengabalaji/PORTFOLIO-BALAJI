"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long." }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and try again.",
      success: false,
    };
  }
  
  // Here you would typically send an email, e.g., using a service like Resend or Nodemailer.
  // For this example, we'll just simulate a successful submission after a short delay.
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  console.log("Form data submitted:", validatedFields.data);

  return {
    message: "Thank you for your message! I'll get back to you soon.",
    success: true,
  };
}
