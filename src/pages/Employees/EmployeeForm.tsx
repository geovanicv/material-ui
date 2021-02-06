import { Grid, TextField } from '@material-ui/core'
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
          <TextField 
            variant="outlined" 
            label="Full Name"
            name="fullName" 
            value={values.fullName}
            onChange={onChange}
          />
          <TextField 
            variant="outlined" 
            label="Email" 
            name="email"
            value={values.email}
            onChange={onChange}

          />
        </Grid>
        <Grid item xs={6}>

        </Grid>
      </Grid>
    </Form>
  )
}

export default EmployeeForm