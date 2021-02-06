import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup as MuiRadioGroup } from "@material-ui/core"
import { ChangeEvent } from 'react'
import {GenderTypes} from '../Form'

export type GenderItems = [
  {id: GenderTypes, title: string},
  {id: GenderTypes, title: string},
  {id: GenderTypes, title: string}
]

type RadioGroupProps = {
  name: string
  label: string
  value: string
  items: GenderItems
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  
}

const RadioGroup = ({name, label, value, items, onChange}: RadioGroupProps) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <MuiRadioGroup row
      name={name}
      value={value}
      onChange={onChange}>
        {items.map(item => (
          <FormControlLabel key={item.id} value={item.id} control={<Radio />} label={item.title} />
        ))}
      </MuiRadioGroup>
    </FormControl>
  )
}

export default RadioGroup