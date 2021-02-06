import { Grid } from '@material-ui/core'
import Input from '../../components/controls/Input'
import Form, { FormValues, useForm } from '../../components/Form'
import RadioGroup, {GenderItems} from '../../components/controls/RadioGroup'


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

const genderItems: GenderItems = [
  {id: 'male', title: 'Male'},
  {id: 'female', title: 'Female'},
  {id: 'other', title: 'Other'},
]

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
          <RadioGroup
            label="Gender"
            name="gender"
            value={values.gender}
            items={genderItems}
            onChange={onChange}
          />
        </Grid>
      </Grid>
    </Form>
  )
}

export default EmployeeForm