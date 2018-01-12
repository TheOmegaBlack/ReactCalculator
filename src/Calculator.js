import React from 'react';
import ButtonBox from './ButtonBox';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      sequenceArray: [],
      currentIndex: 0,
      oldNumber: '',
      result: '',
      operator: '',
      equalized: false,
      chainOps: false,
      pointCheck: false,
    };
    this.numberHandler.bind(this);
    this.operatorHandler.bind(this);
    this.clearHandler.bind(this);
    this.pointHandler.bind(this);
    this.equalHandler.bind(this);
  }

  execute() {
    let result = '';
    switch (this.state.operator) {
      case '+':
        result = (
          parseFloat(this.state.oldNumber) + parseFloat(this.state.number)
        ).toString();
        break;
      case '-':
        result = (
          parseFloat(this.state.oldNumber) - parseFloat(this.state.number)
        ).toString();
        break;
      case '÷':
        result = (
          parseFloat(this.state.oldNumber) / parseFloat(this.state.number)
        ).toString();
        break;
      case '×':
        result = (
          parseFloat(this.state.oldNumber) * parseFloat(this.state.number)
        ).toString();
        break;
      default:
        break;
    }
    if (result.indexOf('.') && result.length > 10) {
      const beforePoint = Math.round(parseFloat(result)).toString().length;
      if (beforePoint < 10) {
        let zeroes = '1';
        for (let i = 10 - beforePoint; i > 0; i -= 1) {
          zeroes += '0';
        }
        result = (Math.round(result * zeroes) / zeroes).toString();
      } else {
        result = 'ERROR';
      }
    } else if (result.length > 10) {
      result = 'ERROR';
    }
    if (result === 'ERROR') {
      this.setState({
        pointCheck: false,
        equalized: true,
        oldNumber: '',
        number: '',
        operator: '',
      });
    }
    return result;
  }

  clearHandler(event) {
    const sequenceArray = this.state.sequenceArray.slice();
    if (event.target.value !== 'CE') {
      sequenceArray[this.state.currentIndex] = '';
    }
    this.setState({
      sequenceArray: event.target.value !== 'CE' ? sequenceArray : [],
      currentIndex: event.target.value !== 'CE' ? this.state.currentIndex : 0,
      pointCheck: false,
      number: '',
      result: '',
      operator: event.target.value !== 'CE' ? this.state.operator : '',
      equalized: false,
      chainOps: false,
    });
  }

  numberHandler(event) {
    const sequenceArray = this.state.equalized ?
      [] :
      this.state.sequenceArray.slice();
    const currentIndex = this.state.equalized ?
      0 :
      this.state.currentIndex;
    const number = `${
      this.state.number !== '0' && !this.state.equalized && !this.state.chainOps
        ? this.state.number
        : ''
    }${event.target.value}`;
    sequenceArray[currentIndex] = number;
    this.setState({
      result: '',
      number,
      sequenceArray,
      equalized: false,
      chainOps: false,
      currentIndex,
    });
  }

  operatorHandler(event) {
    if (this.state.number) {
      const sequenceArray = this.state.equalized ?
        [this.state.result, event.target.value] :
        [...this.state.sequenceArray, event.target.value];
      const currentIndex = this.state.equalized ?
        2 :
        this.state.currentIndex + 2;
      let result = '';
      if (this.state.operator !== '') {
        result = this.execute();
      }
      this.setState({
        pointCheck: false,
        operator: event.target.value,
        result,
        oldNumber:
          this.state.operator === ''
            ? this.state.number
            : result !== '' ? result : this.state.number,
        number: this.state.operator === '' ? '' : this.state.number,
        chainOps: this.state.operator !== '',
        currentIndex,
        sequenceArray,
        equalized: false,
      });
    } else if (this.state.oldNumber) {
      const operator = event.target.value;
      const sequenceArray = [...this.state.sequenceArray];
      sequenceArray[this.state.currentIndex - 1] = operator;
      this.setState({
        operator,
        sequenceArray,
      });
    }
  }

  equalHandler() {
    if (
      this.state.number !== '' &&
      this.state.oldNumber !== '' &&
      !Number.isNaN(this.state.sequenceArray[this.state.currentIndex])
    ) {
      let result = '';
      result = this.execute();
      this.setState({
        result,
        pointCheck: false,
        equalized: true,
        oldNumber: '',
        number: result,
        operator: '',
      });
    }
  }

  pointHandler() {
    const number = this.state.number !== '' && !this.state.equalized ?
      `${this.state.number}.` :
      '0.';
    const result = this.state.equalized ?
      '' :
      this.state.result;
    const sequenceArray = this.state.equalized ?
      [] :
      this.state.sequenceArray.slice();
    const currentIndex = this.state.equalized ?
      0 :
      this.state.currentIndex;
    sequenceArray[currentIndex] = number;
    if (!this.state.pointCheck) {
      this.setState({
        currentIndex,
        number,
        pointCheck: true,
        sequenceArray,
        result,
        equalized: false,
      });
    }
  }

  render() {
    return (
      <div className="container" id="main-view">
        <div className="calculator-ext">
          <div className="calculator-top-div">
            <h4>{'Sacha\u0027s REACT Calculator'}</h4>
          </div>
          <div className="calculator-int">
            <div className="text-box">
              <div id="display"className="display-up">
                {this.state.equalized || this.state.chainOps
                  ? this.state.result
                  : this.state.number !== '' ? this.state.number : 0}
              </div>
              <div className="display-down">
                {
                  this.state.sequenceArray.join('') !== ''
                    ? this.state.sequenceArray.join('')
                    : 0
                }
              </div>
            </div>
            <ButtonBox
              numberHandler={this.numberHandler}
              operatorHandler={this.operatorHandler}
              clearHandler={this.clearHandler}
              pointHandler={this.pointHandler}
              equalHandler={this.equalHandler}
              length={this.state.number.length}
              equalized={this.state.equalized}
              error={this.state.result === 'ERROR'}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
