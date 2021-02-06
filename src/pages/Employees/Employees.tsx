import { makeStyles, Paper } from '@material-ui/core';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';

import PageHeader from "../../components/PageHeader"
import EmployeeForm from "./EmployeeForm"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    margin: theme.spacing(5)
  }
}))

const Employees = () => {
  const classes = useStyles()

  return (
    <>
      <PageHeader 
        title="New Employee"
        subtitle="Form design with validation"
        icon={<PeopleOutlineIcon />}
      />
      <Paper className={classes.root}>
        <EmployeeForm />
      </Paper>
    </>
  )
}

export default Employees