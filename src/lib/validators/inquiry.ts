import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email"),
  whatsapp: z.string().optional(),
  country: z.string().min(2, "Please enter your country"),
  productInterest: z.string().min(1, "Please select a product"),
  quantity: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type InquiryFormData = z.infer<typeof inquirySchema>;
