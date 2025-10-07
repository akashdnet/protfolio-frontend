"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";












export const projectSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }).optional(),
  categories: z
    .array(z.string().min(1, { message: "At least one category is required" }))
    .min(1, { message: "At least one category is required" }).optional(),
  description: z
    .string()
    .min(5, { message: "Description must be at least 5 characters long" }).optional(),
  isPublished: z.boolean().optional(),
  
});

export type ProjectFormValues = z.infer<typeof projectSchema>;

export const useRhForm = (initialData?: Partial<ProjectFormValues>) => {
  return useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: initialData?.title || "",
      categories: initialData?.categories || [],
      description: initialData?.description || "",
    },
  });
};
