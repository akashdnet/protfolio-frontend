import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Textarea } from './ui/textarea'

export default function TextareaInputField({form, name, label}:{form:any, name:string, label:string}) {
  return (
    <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
  )
}
