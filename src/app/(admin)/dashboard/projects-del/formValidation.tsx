import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

export const projectSchema = z.object({
  _id: z.string().optional(),
  thumbnail: z.string({ message: "Thumbnail must be a valid Image" }).optional(),
  title: z.string().min(2, { message: "Title is required" }),
  projectLink: z.url({ message: "Project link must be a valid URL" }),
  liveSite: z.url({ message: "Live site must be a valid URL" }),
  description: z.string().min(5, { message: "Description is required" }),
  features: z.array(
    z.string().min(1, { message: "At least one feature is required" })
  ).min(1, { message: "At least one feature is required" }),
});

export type ProjectFormValues = z.infer<typeof projectSchema>;

export const rhForm = (initialData?: Partial<ProjectFormValues>) => {
  return useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      _id: initialData?._id || "",
      title: initialData?.title || "",
      description: initialData?.description || "",
      features: initialData?.features || [],
      liveSite: initialData?.liveSite || "",
      projectLink: initialData?.projectLink || "",
      thumbnail: initialData?.thumbnail || "",
    },
  });
};
