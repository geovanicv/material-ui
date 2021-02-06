import { Grid } from '@material-ui/core'
import Input from '../../components/controls/Input'
import Form, { FormValues, useForm } from '../../components/Form'
import RadioGroup, {GenderItems} from '../../components/controls/RadioGroup'
import Select from '../../components/controls/Select'
import Checkbox from '../../components/controls/Checkbox'
import DatePicker from '../../components/controls/DatePicker'


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

const departments = [
  {id: '1', title: 'Development'},
  {id: '2', title: 'Marketing'},
  {id: '3', title: 'Accounting'},
  {id: '4', title: 'RH'},
]

const EmployeeForm = () => {
  
 const {
   onChange, 
   onChangeSelect, 
   onChangeCheckbox, 
   onChangeDatePicker, 
   setValues, 
   values
  } = useForm(initialValues)
 
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
          <Select 
            label="Department"
            name="departmentId"
            value={values.departmentId}
            onChange={onChangeSelect}
            options={departments}
            />
          <DatePicker
            label="Hire Date"
            name="hireDate"
            value={values.hireDate}
            onChange={onChangeDatePicker}
          />
          <Checkbox 
            label="Permanent Employee" 
            name="isPermanent"
            value={values.isPermanent}
            onChange={onChangeCheckbox}
          />
        </Grid>
      </Grid>
    </Form>
  )
}

export default EmployeeForm