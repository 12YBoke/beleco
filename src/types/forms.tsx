import * as z from 'zod'

export const SearchBarFormFieldsType = z.object({
  to_search: z.string(),
  type: z.string()
})