"use client";

import { useEffect, useState } from "react";
import { Form } from "@/components/ui/form";
import TextInputFieldComponent from "@/components/TextInputFieldComponent";
import ImageInputFieldComponent from "@/components/ImageInputFieldComponent";
import ArrayInputFieldComponent from "@/components/ArrayInputFieldComponent";
import FormFooterButtons from "@/components/FormFooterButtons";
import { ProjectFormValues, rhForm } from "./formValidation";

interface FormProps {
  initialData?: Partial<ProjectFormValues>;
  setIsOpen: (isOpen: boolean) => void;
  formLoading: boolean;
  onSubmit: (data: {
    data: Omit<ProjectFormValues, "thumbnail">;
    image: File | null;
  }) => void;
}

export default function ProjectForm({
  initialData,
  setIsOpen,
  formLoading,
  onSubmit,
}: FormProps) {
  const [file, setFile] = useState<any>(null);
  const form = rhForm(initialData);

  const formHandler = (data: ProjectFormValues) => {
    const image = file?.file ? file.file : null;
    onSubmit({ data, image });
  };








  return (

    <Form {...form}>
      <form
        id="project-form"
        onSubmit={form.handleSubmit(formHandler)}
        className="space-y-4"
      >
        {/* title */}
        <TextInputFieldComponent
          form={form}
          name="title"
          label="Project Title"
        />

        {/* description */}
        <TextInputFieldComponent
          form={form}
          name="description"
          label="Description"
        />

        {/* thumbnail */}
        <ImageInputFieldComponent
          label="Thumbnail"
          imageLink={initialData?.thumbnail}
          setFile={setFile}
        />

        <ArrayInputFieldComponent
          form={form}
          name="features"
          label="Features"
        />

        {/* live url */}
        <TextInputFieldComponent
          form={form}
          name="liveSite"
          label="Live URL"
        />

        {/* repo URL  */}
        <TextInputFieldComponent
          form={form}
          name="projectLink"
          label="Repository URL"
        />

        <FormFooterButtons formLoading={formLoading} setIsOpen={setIsOpen} />
      </form>
    </Form>

  );
}
