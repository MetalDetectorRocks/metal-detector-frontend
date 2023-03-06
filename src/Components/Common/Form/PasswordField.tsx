import { Stack, TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material'
import { RegisterOptions, useFormContext } from 'react-hook-form'
import classes from './PasswordField.module.scss'
import { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import { Visibility, VisibilityOff } from '@mui/icons-material'

export type TextFieldProps = MuiTextFieldProps & {
  name: string
  options: RegisterOptions
}

const PasswordField = (props: TextFieldProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const { register } = useFormContext()
  const handleClickShowPassword = () => setShowPassword((show) => !show)

  return (
    <Stack direction="row" justifyContent={'start'} className={classes['password']}>
      <MuiTextField
        type={showPassword ? 'text' : 'password'}
        variant={'outlined'}
        color={'secondary'}
        autoComplete={'off'}
        {...register(props.name, props.options)}
        {...props}
        className={classes['password__field']}
      />
      <IconButton
        onClick={handleClickShowPassword}
        aria-label="toggle password visibility"
        edge="end"
        className={classes['password__toggle']}
      >
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </Stack>
  )
}

export default PasswordField
