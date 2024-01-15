import * as yup from 'yup'

export const TODO_VALIDATION_SCHEMA = yup.object({
  fullName: yup.string().min(10).max(150).required()
})
