import { z } from "zod";

export const appointmentSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  mobile: z.string().regex(/^[0-9+\s-]{10,15}$/, { message: "Please enter a valid phone number (min 10 digits)" }),
  whatsapp: z.string().optional().or(z.literal("")),
  email: z.string().email({ message: "Please enter a valid email address" }).optional().or(z.literal("")),
  age: z.string().optional().or(z.literal("")),
  gender: z.string().optional().or(z.literal("")),
  city: z.string().optional().or(z.literal("")),
  service: z.string().min(1, { message: "Please select a service" }),
  mode: z.enum(["Online", "Offline"], { message: "Please select a consultation mode" }),
  preferredDate: z.string().min(1, { message: "Please select a date" }),
  preferredTime: z.string().min(1, { message: "Please select a preferred time" }),
  message: z.string().optional().or(z.literal("")),
  dob: z.string().optional().or(z.literal("")),
  bornTime: z.string().optional().or(z.literal("")),
  bornPlace: z.string().optional().or(z.literal("")),
});

export type AppointmentFormValues = z.infer<typeof appointmentSchema>;
