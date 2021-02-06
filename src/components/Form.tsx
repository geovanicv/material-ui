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
  hireDate: Date
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

  return {
    values,
    setValues,
    onChange
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