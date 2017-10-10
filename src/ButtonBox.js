import React from 'react'
import Button from './Button'

const ButtonBox = (props) =>
{
  return (
  <div className="button-box">
    <Button buttonType="clear-btn" buttonDetail="clearall" value="CE" />
    <Button buttonType="clear-btn" buttonDetail="clear" value="C" />
    <Button onClick={props.numberHandler} buttonType="number-btn" buttonDetail="number" value="7" />
    <Button onClick={props.numberHandler} buttonType="number-btn" buttonDetail="number" value="8" />
    <Button onClick={props.numberHandler} buttonType="number-btn" buttonDetail="number"  value="9" />
    <Button buttonType="number-btn" buttonDetail="operator" value="÷" />
    <Button buttonType="number-btn" buttonDetail="number" value="4" />
    <Button buttonType="number-btn" buttonDetail="number" value="5" />
    <Button buttonType="number-btn" buttonDetail="number" value="6" />
    <Button buttonType="number-btn" buttonDetail="operator" value="x" />
    <Button buttonType="number-btn" buttonDetail="number" value="1" />
    <Button buttonType="number-btn" buttonDetail="number" value="2" />
    <Button buttonType="number-btn" buttonDetail="number" value="3" />
    <Button buttonType="number-btn" buttonDetail="operator" value="-" />
    <Button buttonType="number-btn" buttonDetail="equal" value="=" />
    <Button buttonType="number-btn" buttonDetail="number" value="0" />
    <Button buttonType="number-btn" buttonDetail="point" value="." />
    <Button buttonType="number-btn" buttonDetail="operator" value="+" />
  </div>
  )
}

export default ButtonBox