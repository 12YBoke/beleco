"use client"

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shadcnui/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shadcnui/ui/select"
import clsx from "clsx"

interface Props {
  control: any,
  name: string,
  label?: string,
  placeholder: string,
  description?: string,
  options: { id: number, name: string }[]
  className?: string
}

export const InputFieldSelect = ({
  control,
  name,
  label,
  placeholder,
  description,
  options,
  className
}: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className={clsx("rounded focus:ring-primary-Default", className)} >
                <SelectValue placeholder={placeholder}/>
              </SelectTrigger>
            </FormControl>
            <SelectContent className="bg-white rounded">
              {
                options.map(option => 
                  <SelectItem key={option.id} value={option.name} className="focus:bg-primary-50">{option.name}</SelectItem>
                )
              }
            </SelectContent>
          </Select>
          <FormDescription>
            {description}
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
