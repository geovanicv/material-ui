import { TextField } from "@material-ui/core"
import { ChangeEvent } from "react"

type InputProps = {
  name: string
  label: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({label, name, onChange, value}: InputProps) => {
  return (
    <TextField 
      variant="outlined" 
      label={label}
      name={name} 
      value={value}
      onChange={onChange}
    />
  )
}

export default Input