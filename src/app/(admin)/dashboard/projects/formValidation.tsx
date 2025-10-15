"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";











export const projectSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }).optional(),
  features: z.array(z.string()).min(1, { message: "Features are required" }),
  description: z.string().min(1, { message: "Description is required" }),
  projectLink: z.url().min(1, { message: "Valid Project Link is required." }),
  liveSite: z.url().min(1, { message: "Valid Live Site Link is required." }),
  isPublished: z.boolean().optional(),
  
  
});

export type ProjectFormValues = z.infer<typeof projectSchema>;

export const useRhForm = (initialData?: Partial<ProjectFormValues>) => {
  return useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: initialData?.title || "",
      features: initialData?.features || [],
      description: initialData?.description || "",
      projectLink: initialData?.projectLink || "",
      liveSite: initialData?.liveSite || "",
      isPublished: initialData?.isPublished || false,
    },
  });
};
