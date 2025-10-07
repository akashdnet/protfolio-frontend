import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Editor } from "primereact/editor";   

export default function EditorInputFieldComponent({form, name, label}:{form:any, name:string, label:string}) {
  return (
    <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <FormControl>
                <Editor
                  value={field.value}
                  onTextChange={(e) => field.onChange(e.htmlValue)}
                  style={{ height: "320px" }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
  )
}
