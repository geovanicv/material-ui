import { Card, makeStyles, Paper, Typography } from "@material-ui/core"

type PageHeaderProps = {
  title: string
  subtitle: string
  icon: JSX.Element
}

const useStyles = makeStyles( theme => ({
  root: {
    backgroundColor: '#fff'
  },
  pageHeader: {
    padding: theme.spacing(3),
    display: 'flex',
  },
  pageIcon: {
    display: 'inline-block',
    padding: theme.spacing(2),
    color: '#3c44b1'
  },
  pageTitle: {
    marginLeft: theme.spacing(2),
    '& .MuiTypography-subtitle2': {
      opacity: '0.6'
    }
  }
}))

const PageHeader = ({icon, subtitle, title}: PageHeaderProps) => {
  const classes = useStyles()

  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.pageHeader}>
        <Card className={classes.pageIcon}>
          {icon}
        </Card>
        <div className={classes.pageTitle}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {subtitle}
          </Typography>
        </div>
      </div>
    </Paper>
  )
}

export default PageHeader