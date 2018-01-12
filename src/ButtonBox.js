import React from 'react';
import Button from './Button';

const ButtonBox = props => (
  <div className="button-box">
    <Button
      onClick={props.clearHandler}
      buttonType="clear-btn"
      buttonDetail="clearall"
      id="CE"
      value="CE"
    />
    <Button
      onClick={props.error ? null : props.clearHandler}
      buttonType="clear-btn"
      buttonDetail="clear"
      id="clear"
      value="C"
    />
    <Button
      onClick={(props.length < 10 || props.equalized) && !props.error ? props.numberHandler : null}
      buttonType="number-btn"
      buttonDetail="number"
      id="seven"
      value="7"
    />
    <Button
      onClick={(props.length < 10 || props.equalized) && !props.error ? props.numberHandler : null}
      buttonType="number-btn"
      buttonDetail="number"
      id="eight"
      value="8"
    />
    <Button
      onClick={(props.length < 10 || props.equalized) && !props.error ? props.numberHandler : null}
      buttonType="number-btn"
      buttonDetail="number"
      id="nine"
      value="9"
    />
    <Button
      onClick={props.error ? null : props.operatorHandler}
      buttonType="number-btn"
      buttonDetail="operator"
      id="divide"
      value="÷"
    />
    <Button
      onClick={(props.length < 10 || props.equalized) && !props.error ? props.numberHandler : null}
      buttonType="number-btn"
      buttonDetail="number"
      id="four"
      value="4"
    />
    <Button
      onClick={(props.length < 10 || props.equalized) && !props.error ? props.numberHandler : null}
      buttonType="number-btn"
      buttonDetail="number"
      id="five"
      value="5"
    />
    <Button
      onClick={(props.length < 10 || props.equalized) && !props.error ? props.numberHandler : null}
      buttonType="number-btn"
      buttonDetail="number"
      id="six"
      value="6"
    />
    <Button
      onClick={props.error ? null : props.operatorHandler}
      buttonType="number-btn"
      buttonDetail="operator"
      id="multiply"
      value="×"
    />
    <Button
      onClick={(props.length < 10 || props.equalized) && !props.error ? props.numberHandler : null}
      buttonType="number-btn"
      buttonDetail="number"
      id="one"
      value="1"
    />
    <Button
      onClick={(props.length < 10 || props.equalized) && !props.error ? props.numberHandler : null}
      buttonType="number-btn"
      buttonDetail="number"
      id="two"
      value="2"
    />
    <Button
      onClick={(props.length < 10 || props.equalized) && !props.error ? props.numberHandler : null}
      buttonType="number-btn"
      buttonDetail="number"
      id="three"
      value="3"
    />
    <Button
      onClick={props.error ? null : props.operatorHandler}
      buttonType="number-btn"
      buttonDetail="operator"
      id="subtract"
      value="-"
    />
    <Button
      onClick={props.error ? null : props.equalHandler}
      buttonType="number-btn"
      buttonDetail="equal"
      id="equals"
      value="="
    />
    <Button
      onClick={(props.length < 10 || props.equalized) && !props.error ? props.numberHandler : null}
      buttonType="number-btn"
      buttonDetail="number"
      id="zero"
      value="0"
    />
    <Button
      onClick={props.error ? null : props.pointHandler}
      buttonType="number-btn"
      buttonDetail="point"
      id="decimal"
      value="."
    />
    <Button
      onClick={props.error ? null : props.operatorHandler}
      buttonType="number-btn"
      buttonDetail="operator"
      id="add"
      value="+"
    />
  </div>
);

export default ButtonBox;
