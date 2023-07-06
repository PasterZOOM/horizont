import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { PropsType, TextField } from '@/components/ui/textField'

type Props<T extends FieldValues> = Omit<UseControllerProps<T>, 'rules' | 'defaultValue'> &
  Omit<PropsType, 'value' | 'onChange' | 'onBlur'>

export const ControlTextField = <T extends FieldValues>({ control, name, ...rest }: Props<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control })

  return <TextField errorMessage={error?.message} {...field} {...rest}></TextField>
}
