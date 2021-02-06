import {Button as MuiButton, makeStyles} from '@material-ui/core'
import { ButtonHTMLAttributes } from 'react'

type ButtonProps = {
  variant?: 'text' | 'outlined' | 'contained' | undefined
  size?: 'small' | 'large' | 'medium' | undefined
  color?: 'inherit' | 'primary' | 'secondary' | 'default' | undefined
  text: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0.5)
  },
  label: {
    textTransform: 'none'
  }
}))

const Button = ({color, size, text, variant, ...props}: ButtonProps) => {
  const classes = useStyles()

  return (
    <MuiButton
      classes={{
        root: classes.root, label: classes.label
      }} 
      variant={variant || 'contained'} 
      color={color || 'primary'} 
      size={size || 'large'} 
      {...props}
    >
      {text}
    </MuiButton>
  )
}

export default Button