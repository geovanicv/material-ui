import { ChangeEvent, useState } from 'react'
import { makeStyles } from '@material-ui/core'

export type GenderTypes = 'male' | 'female' | 'other'

export type FormValues = {
  id: number
  fullName: string
  email: string
  mobile: string
  city: string
  gender: GenderTypes
  departmentId: string
  hireDate: Date | null
  isPermanent: boolean
}

export function useForm(initialValues: FormValues) {

  const [values, setValues] = useState<FormValues>(initialValues)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const onChangeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValues({
      ...values,
      departmentId: event.target.value as string
    })
  }

  const onChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.checked
    })
  }

  const onChangeDatePicker = (date: Date | null) => {
    setValues({
      ...values,
      hireDate: date
    })
  }

  return {
    values,
    setValues,
    onChange,
    onChangeSelect,
    onChangeCheckbox,
    onChangeDatePicker
  }
}

type FormProps = {
  children: React.ReactNode
}

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1)
    }
  }
}))

const Form = ({children}: FormProps) => {
  const classes = useStyles()

  return (
    <form className={classes.root} autoComplete="off">
      {children}
    </form>
  )
}

export default Form