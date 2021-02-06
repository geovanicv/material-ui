import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

type DatePickerProps = {
  name: string
  label: string
  value: Date | null 
  onChange: (date: Date | null) => void
}

const DatePicker = ({label, name, value, onChange}: DatePickerProps) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker disableToolbar variant="inline" inputVariant="outlined"      
        label={label}
        value={value}
        name={name}
        format="MM/dd/yyyy"
        onChange={onChange}
      />    
    </MuiPickersUtilsProvider>
  )
}

export default DatePicker