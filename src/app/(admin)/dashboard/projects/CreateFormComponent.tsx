"use client"
import ArrayInputFieldComponent from "@/components/ArrayInputFieldComponent"
import FormFooterButtons from "@/components/FormFooterButtons"
import ImageInputFieldComponent from "@/components/ImageInputFieldComponent"
import TextInputFieldComponent from "@/components/TextInputFieldComponent"

import { Form } from "@/components/ui/form"
import { useState } from "react"
import { useRhForm as rhForm } from "./formValidation"
import EditorInputFieldComponent from "@/components/EditorInputFieldComponent"
import withErrorHandler from "@/utils/withErrorHandler"
import { createProjectData, TProject } from "@/action/projectAction"


interface TProps {
    onHandleClose:()=>void
    initialData?:TProject
    continueButtonTitle?:string
}



export default function CreateFormComponent({onHandleClose, initialData, continueButtonTitle="Save"}:TProps) {

  const [loading, setLoading] = useState(false)

    const [file, setFile] = useState<any>(null);
      const form = rhForm(initialData);



const handleSubmit = async (data:any) => {
  setLoading(true)
    const init =  withErrorHandler(createProjectData, {})
    const res = await init({data:{...data, _id:initialData?._id }, image:file.file})
    if(res.success){
      onHandleClose()
    }
  setLoading(false)

}
      
 

  return (
    <div >
        <Form {...form}>
      <form
        id="project-form-2"
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-9"
      >
        {/* title */}
                {/* thumbnail */}
        <ImageInputFieldComponent
          label="Thumbnail"
          imageLink={initialData?.thumbnail}
          setFile={setFile}
        />

        <TextInputFieldComponent
          form={form}
          name="title"
          label="Project Title"
        />


        <TextInputFieldComponent
          form={form}
          name="projectLink"
          label="Project Link"
        />




        <TextInputFieldComponent
          form={form}
          name="liveSite"
          label="Live Site"
        />




       <ArrayInputFieldComponent
          form={form}
          name="features"
          label="Features"
        />





        {/* description */}

        <EditorInputFieldComponent
          form={form}
          name="description"
          label="Description"
        />




 



        <FormFooterButtons loading={loading} onHandleClose={onHandleClose} handleSubmit={()=>{handleSubmit}} continueButtonTitle={continueButtonTitle} />
      </form>
    </Form>
    </div>
  )
}
