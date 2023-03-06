import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material'
import { RegisterOptions, useFormContext } from 'react-hook-form'

export type TextFieldProps = MuiTextFieldProps & {
  name: string
  options: RegisterOptions
}

const TextField = (props: TextFieldProps) => {
  const { register } = useFormContext()
  return (
    <MuiTextField
      variant={'outlined'}
      color={'secondary'}
      autoComplete={'off'}
      {...register(props.name, props.options)}
      {...props}
    />
  )
}

export default TextField
