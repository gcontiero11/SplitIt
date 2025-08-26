import { z } from "zod";

const userSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be at most 50 characters")
    .regex(
      /^[a-zA-ZÀ-ÿ\s]+$/,
      "First name can only contain letters and spaces",
    ),

  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be at most 50 characters")
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Last name can only contain letters and spaces"),

  email: z
    .string()
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format",
    )
    .toLowerCase(),

  phone: z
    .string()
    .regex(
      /^\(\d{2}\)\s\d{4,5}-\d{4}$/,
      "Phone must be in format (XX) XXXXX-XXXX or (XX) XXXX-XXXX",
    ),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character",
    ),
});

type User = z.infer<typeof userSchema>;
export { userSchema, User };
