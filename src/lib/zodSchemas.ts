import { z } from "zod";

export const appointmentSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required (min 2 characters)" }),
  mobile: z.string().min(1, { message: "Phone number is required" }).regex(/^[0-9+\s-]{10,15}$/, { message: "Please enter a valid 10-digit phone number" }),
  whatsapp: z.string().optional().or(z.literal("")),
  email: z.string().min(1, { message: "Email address is required" }).email({ message: "Please enter a valid email address" }),
  age: z.string().min(1, { message: "Age is required" }),
  gender: z.string().optional().or(z.literal("")),
  city: z.string().optional().or(z.literal("")),
  service: z.string().min(1, { message: "Please select a counselling type" }),
  mode: z.enum(["Online", "Offline"], { message: "Please select a session mode" }),
  preferredDate: z.string().min(1, { message: "Please select a preferred date" }),
  preferredTime: z.string().min(1, { message: "Please select a preferred time slot" }),
  message: z.string().optional().or(z.literal("")),
  dob: z.string().optional().or(z.literal("")),
  bornTime: z.string().optional().or(z.literal("")),
  bornPlace: z.string().optional().or(z.literal("")),
});

export type AppointmentFormValues = z.infer<typeof appointmentSchema>;

