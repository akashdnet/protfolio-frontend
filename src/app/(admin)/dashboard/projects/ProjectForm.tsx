"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField,  FormItem, FormLabel, FormMessage, } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useFileUpload } from "@/hooks/use-file-upload";
import { Upload, X } from "lucide-react";




const projectSchema = z.object({
  title: z.string().min(2, "Title is required"),
  description: z.string().min(5, "Description is required"),
  tags: z.array(z.string()).optional(),
  liveUrl: z.url().optional(),
  repoUrl: z.url().optional(),
  imageFile: z.any().optional(),
});

type ProjectFormValues = z.infer<typeof projectSchema>;



interface ProjectFormProps {
  initialData?: Partial<ProjectFormValues>;
  onSubmit: (data: { data: Omit<ProjectFormValues, "imageFile">; image: File | null }) => void;
}




export default function ProjectForm({ initialData, onSubmit }: ProjectFormProps) {
  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: initialData?.title || "",
      description: initialData?.description || "",
      tags: initialData?.tags || [],
      liveUrl: initialData?.liveUrl || "",
      repoUrl: initialData?.repoUrl || "",
    },
  });

  


  const [ { files, errors, isDragging }, { getInputProps, openFileDialog, handleDrop, removeFile } ] = useFileUpload({ accept: "image/*", multiple: false, maxSize: 2 * 1024 * 1024 });






  

  return (
    <Form {...form}>
      <form
        id="project-form"
        onSubmit={form.handleSubmit((formData) => {
          const { title, description, tags, liveUrl, repoUrl } = formData;
          const data = { title, description, tags, liveUrl, repoUrl };
          const image = files.length > 0 ? files[0].file : null;

          // console.log("Data:", data);
          // console.log("Image:", image);

          onSubmit({ data, image });
        })}
        className="space-y-4"
      >





        {/* title */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />





        {/* description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />





        {/* thumbnail */}
        <FormItem>
          <FormLabel>Upload Image</FormLabel>
          <FormControl>
            <div
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              onClick={openFileDialog}
              className={`flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 cursor-pointer transition 
                ${isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-blue-400 hover:bg-gray-50"}`}
            >
              <Upload className="w-8 h-8 text-gray-500 mb-2" />
              <p className="text-sm text-gray-600">
                Drag & drop an image here, or <span className="text-blue-600 underline">browse</span>
              </p>
              <input {...getInputProps()} hidden />
            </div>
          </FormControl>

    
    
    
    
    
          {/* error */}
          {errors.length > 0 && (
            <ul className="text-red-500 text-sm mt-2">
              {errors.map((err, i) => (
                <li key={i}>{err}</li>
              ))}
            </ul>
          )}

          {/* Preview */}
          {files.length > 0 && (
            <div className="relative w-32 h-32 mt-2">
              <img
                src={files[0].preview}
                alt="preview"
                className="w-full h-full object-cover rounded-lg shadow"
              />
              <button
                type="button"
                onClick={() => removeFile(files[0].id)}
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 shadow"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </FormItem>





        {/* tags*/}
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => {
            const [tagInput, setTagInput] = useState("");

            const addTag = () => {
              if (tagInput.trim() !== "") {
                field.onChange([...(field.value || []), tagInput.trim()]);
                setTagInput("");
              }
            };

            const removeTag = (tag: string) => {
              field.onChange((field.value || []).filter((t: string) => t !== tag));
            };

            return (
              <FormItem>
                <FormLabel>Tags</FormLabel>
                <div className="flex gap-2">
                  <Input
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    placeholder="Enter a tag"
                  />
                  <Button type="button" onClick={addTag}>
                    Add
                  </Button>
                </div>

                {/* Show tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {(field.value || []).map((tag: string, i: number) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="text-red-500 hover:text-red-700"
                      >
                        ✕
                      </button>
                    </span>
                  ))}
                </div>

                <FormMessage />
              </FormItem>
            );
          }}
        />




        {/* live url */}
        <FormField
          control={form.control}
          name="liveUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Live URL</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />





        {/* repo URL */}
        <FormField
          control={form.control}
          name="repoUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Repository URL</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />



      </form>
    </Form>
  );
}
