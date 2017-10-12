import React from 'react'
import Button from './Button'

const ButtonBox = (props) =>
{
  return (
  <div className="button-box">
    <Button onClick={props.clearHandler} buttonType="clear-btn" buttonDetail="clearall" value="CE" />
    <Button onClick={props.clearHandler} buttonType="clear-btn" buttonDetail="clear" value="C" />
    <Button onClick={props.length < 10 ? props.numberHandler : null} buttonType="number-btn" buttonDetail="number" value="7" />
    <Button onClick={props.length < 10 ? props.numberHandler : null} buttonType="number-btn" buttonDetail="number" value="8" />
    <Button onClick={props.length < 10 ? props.numberHandler : null} buttonType="number-btn" buttonDetail="number"  value="9" />
    <Button onClick={props.operatorHandler} buttonType="number-btn" buttonDetail="operator" value="÷" />
    <Button onClick={props.length < 10 ? props.numberHandler : null} buttonType="number-btn" buttonDetail="number" value="4" />
    <Button onClick={props.length < 10 ? props.numberHandler : null} buttonType="number-btn" buttonDetail="number" value="5" />
    <Button onClick={props.length < 10 ? props.numberHandler : null} buttonType="number-btn" buttonDetail="number" value="6" />
    <Button onClick={props.operatorHandler} buttonType="number-btn" buttonDetail="operator" value="×" />
    <Button onClick={props.length < 10 ? props.numberHandler : null} buttonType="number-btn" buttonDetail="number" value="1" />
    <Button onClick={props.length < 10 ? props.numberHandler : null} buttonType="number-btn" buttonDetail="number" value="2" />
    <Button onClick={props.length < 10 ? props.numberHandler : null} buttonType="number-btn" buttonDetail="number" value="3" />
    <Button onClick={props.operatorHandler} buttonType="number-btn" buttonDetail="operator" value="-" />
    <Button onClick={props.equalHandler} buttonType="number-btn" buttonDetail="equal" value="=" />
    <Button onClick={props.length < 10 ? props.numberHandler : null} buttonType="number-btn" buttonDetail="number" value="0" />
    <Button onClick={props.pointHandler} buttonType="number-btn" buttonDetail="point" value="." />
    <Button onClick={props.operatorHandler} buttonType="number-btn" buttonDetail="operator" value="+" />
  </div>
  )
}

export default ButtonBox