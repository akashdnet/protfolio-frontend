import React, { use, useEffect } from 'react'
import { FormControl, FormItem, FormLabel } from './ui/form'
import Image from 'next/image'
import { useSingleFileUpload } from '@/hooks/use-file-upload';
import { Upload, X } from 'lucide-react';

export default function ImageInputFieldComponent({label, imageLink, setFile}:{label:string, imageLink:any, setFile: any}) {
    const [
      { file, errors, isDragging },
      { getInputProps, openFileDialog, handleDrop, removeFile }
    ] = useSingleFileUpload({
      accept: "image/*",
      maxSize: 5 * 1024 * 1024,
    });

    useEffect(() => {
      if(file) {
        setFile(file);
      }
    }, [file])




  return (
    <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              onClick={openFileDialog}
              className={`flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 cursor-pointer transition 
                ${
                  isDragging
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300 hover:border-blue-400 hover:bg-gray-50"
                }`}
            >
              <Upload className="w-8 h-8 text-gray-500 mb-2" />
              <p className="text-sm text-gray-600">
                Drag & drop an image here, or{" "}
                <span className="text-blue-600 underline">browse</span>
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
          {file ? (
            <div className="relative w-32 h-32 mt-2">
              <img
                src={file.preview}
                alt="preview"
                className="w-full h-full object-cover rounded-lg shadow"
              />
              <button
                type="button"
                onClick={removeFile}
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 shadow"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : imageLink ? (
            <div className="relative w-32 h-32 mt-2">
              <Image
                src={imageLink}
                alt="existing thumbnail"
                fill
                className="w-full h-full object-cover rounded-lg shadow"
              />
            </div>
          ) : null}
        </FormItem>
  )
}





















        // <FormItem>
        //   <FormLabel>Upload Image</FormLabel>
        //   <FormControl>
        //     <div
        //       onDrop={handleDrop}
        //       onDragOver={(e) => e.preventDefault()}
        //       onClick={openFileDialog}
        //       className={`flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 cursor-pointer transition 
        //         ${
        //           isDragging
        //             ? "border-blue-500 bg-blue-50"
        //             : "border-gray-300 hover:border-blue-400 hover:bg-gray-50"
        //         }`}
        //     >
        //       <Upload className="w-8 h-8 text-gray-500 mb-2" />
        //       <p className="text-sm text-gray-600">
        //         Drag & drop an image here, or{" "}
        //         <span className="text-blue-600 underline">browse</span>
        //       </p>
        //       <input {...getInputProps()} hidden />
        //     </div>
        //   </FormControl>

        //   {/* error */}
        //   {errors.length > 0 && (
        //     <ul className="text-red-500 text-sm mt-2">
        //       {errors.map((err, i) => (
        //         <li key={i}>{err}</li>
        //       ))}
        //     </ul>
        //   )}

        //   {/* Preview */}
        //   {file ? (
        //     <div className="relative w-32 h-32 mt-2">
        //       <img
        //         src={file.preview}
        //         alt="preview"
        //         className="w-full h-full object-cover rounded-lg shadow"
        //       />
        //       <button
        //         type="button"
        //         onClick={removeFile}
        //         className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 shadow"
        //       >
        //         <X className="w-4 h-4" />
        //       </button>
        //     </div>
        //   ) : initialData?.thumbnail ? (
        //     <div className="relative w-32 h-32 mt-2">
        //       <Image
        //         src={initialData.thumbnail}
        //         alt="existing thumbnail"
        //         fill
        //         className="w-full h-full object-cover rounded-lg shadow"
        //       />
        //     </div>
        //   ) : null}
        // </FormItem>