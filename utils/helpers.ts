export type FormDataInput = Record<string, string | Blob | File>

export const appendFormData = (data: FormDataInput): FormData => {
   const formData = new FormData()
   Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value)
   })

   return formData
}
