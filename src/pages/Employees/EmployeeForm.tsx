import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@material-ui/core'
import Input from '../../components/controls/Input'
import Form, { FormValues, useForm } from '../../components/Form'


const initialValues: FormValues = {
  id: 0,
  fullName: '',
  email: '',
  mobile: '',
  city: '',
  gender: 'male',
  departmentId: '',
  hireDate: new Date(),
  isPermanent: false
}

const EmployeeForm = () => {
  
 const {onChange, setValues, values} = useForm(initialValues)
 
  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Input 
            label="Full Name"
            name="fullName" 
            value={values.fullName}
            onChange={onChange}
          />
          <Input 
            label="Email" 
            name="email"
            value={values.email}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup row
            name="gender"
            value={values.gender}
            onChange={onChange}>
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Form>
  )
}

export default EmployeeForm