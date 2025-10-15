"use client"

import { editBlogData, TBlog } from "@/action/blogAction"
import ArrayInputFieldComponent from "@/components/ArrayInputFieldComponent"
import FormFooterButtons from "@/components/FormFooterButtons"
import ImageInputFieldComponent from "@/components/ImageInputFieldComponent"
import TextInputFieldComponent from "@/components/TextInputFieldComponent"

import { Form } from "@/components/ui/form"
import { useState } from "react"
import { useRhForm as rhForm } from "./formValidation"
import EditorInputFieldComponent from "@/components/EditorInputFieldComponent"
import withErrorHandler from "@/utils/withErrorHandler"

interface TProps {
    onHandleClose:()=>void
    initialData?:TBlog
    continueButtonTitle?:string
}



export default function FormComponent({onHandleClose, initialData, continueButtonTitle="Save"}:TProps) {

  const [loading, setLoading] = useState(false)

    const [file, setFile] = useState<any>(null);
      const form = rhForm(initialData);



const handleSubmit = async (data:any) => {
  setLoading(true)
    const init =  withErrorHandler(editBlogData, {})
    const res = await init({data:{...data, _id:initialData?._id }, image:file?.file})
    // console.log(`edit`,res)
    if(res.success){
      onHandleClose()
    }
  setLoading(false)

}
      
 

  return (
    <div >
        <Form {...form}>
      <form
        id="project-form"
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



       <ArrayInputFieldComponent
          form={form}
          name="categories"
          label="Categories"
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
