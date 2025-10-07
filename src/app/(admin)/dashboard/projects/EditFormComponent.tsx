
import ArrayInputFieldComponent from "@/components/ArrayInputFieldComponent"
import FormFooterButtons from "@/components/FormFooterButtons"
import ImageInputFieldComponent from "@/components/ImageInputFieldComponent"
import TextInputFieldComponent from "@/components/TextInputFieldComponent"

import { Form } from "@/components/ui/form"
import { useState } from "react"
import { rhForm } from "./formValidation"
import TextareaInputField from "@/components/TextareaInputField"
import EditorInputFieldComponent from "@/components/EditorInputFieldComponent"
import toast from "react-hot-toast"
import withErrorHandler from "@/utils/withErrorHandler"
import { editProjectData, TProject } from "@/action/projectAction"


interface TProps {
    onHandleClose:()=>void
    initialData?:TProject
    continueButtonTitle?:string
}



export default function FormComponent({onHandleClose, initialData, continueButtonTitle="Save"}:TProps) {

  const [loading, setLoading] = useState(false)

    const [file, setFile] = useState<any>(null);
      const form = rhForm(initialData);



const handleSubmit = async (data:any) => {
  setLoading(true)
    const init =  withErrorHandler(editProjectData, {})
    const res = await init({data:{...data, _id:initialData?._id }, image:file?.file})
    console.log(`edit`,res)
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
