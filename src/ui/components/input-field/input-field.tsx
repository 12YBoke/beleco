import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shadcnui/ui/form"
import { Input } from "@/shadcnui/ui/input"
import clsx from "clsx"

interface Props {
  control: any,
  name: string,
  label?: string,
  placeholder: string,
  description? : string,
  type?: 
    'text'      | 
    'email'     |
    'file'      |
    'password'  
  className?: string
}

export const InputField = ({
  control,
  name,
  label,
  placeholder,
  description,
  type = 'text',
  className
}: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              className={clsx(
                "rounded focus:ring-primary-Default",
                className
              )}  
              placeholder={placeholder} 
              {...field} 
              type={type}
            />
          </FormControl>
          <FormDescription>
            {description}
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}