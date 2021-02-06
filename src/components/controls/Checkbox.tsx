import { FormControl, FormControlLabel, Checkbox as MuiCheckbox } from "@material-ui/core"

type CheckboxProps = {
  name: string
  label: string
  value: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox = ({label, name, value, onChange}: CheckboxProps) => {
  return (
    <FormControl>
      <FormControlLabel 
        label={label}
        control={<MuiCheckbox name={name} color="primary" checked={value} onChange={onChange} />}
      />
    </FormControl>
  )
}

export default Checkbox