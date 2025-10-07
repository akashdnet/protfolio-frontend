"use client";

import { useState } from "react"
import { FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function ArrayInputFieldComponent({ form, name, label }: { form: any, name: string, label: string }) {
  const [tagInput, setTagInput] = useState("");
  return (
    <>
    
    {/* features*/}
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => {

            const addTag = () => {
              if (tagInput.trim() !== "") {
                field.onChange([...(field.value || []), tagInput.trim()]);
                setTagInput("");
              }
            };

            const removeTag = (tag: string) => {
              field.onChange(
                (field.value || []).filter((t: string) => t !== tag)
              );
            };

            return (
              <FormItem>
                <FormLabel>{label}</FormLabel>
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

                {/* Show features */}
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
    
    </>
  )
}




   {/* features*/}
        // <FormField
        //   control={form.control}
        //   name="features"
        //   render={({ field }) => {
        //     const [tagInput, setTagInput] = useState("");

        //     const addTag = () => {
        //       if (tagInput.trim() !== "") {
        //         field.onChange([...(field.value || []), tagInput.trim()]);
        //         setTagInput("");
        //       }
        //     };

        //     const removeTag = (tag: string) => {
        //       field.onChange(
        //         (field.value || []).filter((t: string) => t !== tag)
        //       );
        //     };

        //     return (
        //       <FormItem>
        //         <FormLabel>Features</FormLabel>
        //         <div className="flex gap-2">
        //           <Input
        //             value={tagInput}
        //             onChange={(e) => setTagInput(e.target.value)}
        //             placeholder="Enter a tag"
        //           />
        //           <Button type="button" onClick={addTag}>
        //             Add
        //           </Button>
        //         </div>

        //         {/* Show features */}
        //         <div className="flex flex-wrap gap-2 mt-2">
        //           {(field.value || []).map((tag: string, i: number) => (
        //             <span
        //               key={i}
        //               className="flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm"
        //             >
        //               {tag}
        //               <button
        //                 type="button"
        //                 onClick={() => removeTag(tag)}
        //                 className="text-red-500 hover:text-red-700"
        //               >
        //                 ✕
        //               </button>
        //             </span>
        //           ))}
        //         </div>

        //         <FormMessage />
        //       </FormItem>
        //     );
        //   }}
        // />
