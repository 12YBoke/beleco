'use client'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SearchBarFormFieldsType } from "@/types/forms"
import { useForm } from 'react-hook-form'
import { Container } from '@/ui/components/container/container'
import { Form } from '@/shadcnui/ui/form'
import { InputField } from '@/ui/components/input-field/input-field'
import { InputFieldSelect } from '@/ui/components/input-field-select/input-field-select'
import { Button } from '@/ui/components/buttons/button'
import { Search } from 'lucide-react'

export const SearchBar = () => {
  const form = useForm<z.infer<typeof SearchBarFormFieldsType>>({
    resolver: zodResolver(SearchBarFormFieldsType),
    defaultValues: {
      to_search: '',
      type: ''
    }
  })

  async function onSubmit(values: z.infer<typeof SearchBarFormFieldsType>){
    const {to_search, type} = values
  }
  return (
    <Container className='w-[100%]'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Container className='flex flex-row gap-4 justify-center items-center'>
            <InputField
              control={form.control}
              name='to_search'
              placeholder='Entrez un mot clé'
              className='bg-primary-50'
            />
            <InputFieldSelect
              control={form.control}
              name='type'
              options={[{id: 1, name: 'Excel'},{id: 2, name: 'Word'},{id: 3, name: 'PowerPoint'},{id: 4, name: 'Logo'},{id: 5, name: 'Design UI/UX'},{id: 6, name: 'Photos'}]}
              placeholder='Selectionnez une categorie'
            />
            <Button Icon={Search}>Rechercher</Button>
          </Container>
        </form>
      </Form>
    </Container>
  )
}