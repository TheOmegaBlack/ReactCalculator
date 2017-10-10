import React from 'react'

const Button = (props) => {
  const classes= `${props.buttonType} ${props.buttonDetail}`
  return <button className={classes}>{props.value}</button>
}

export default Button