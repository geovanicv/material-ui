import { FormControl, InputLabel, MenuItem, Select as MuiSelect } from "@material-ui/core"

export type SelectOption = {
  id: string, title: string
}

type SelectProps = {
  name: string
  label: string
  value: string
  onChange: (event: React.ChangeEvent<{ value: unknown }>) => void
  options: SelectOption[]
}

const Select = ({label, name, value, onChange, options}: SelectProps) => {
  return (
    <FormControl variant="outlined">
      <InputLabel>{label}</InputLabel>
      <MuiSelect
        label={label}
        name={name}
        value={value}
        onChange={onChange}>
        <MenuItem value="">None</MenuItem>
        {options.map(item => (
          <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  )
}

export default Select