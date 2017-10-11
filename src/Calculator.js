import React from 'react'
import ButtonBox from './ButtonBox'

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: "",
      numberSequence: "",
      oldNumber: "",
      result: "",
      operator: "",
      equalized: false,
      chainOps: false,
      pointCheck: false
    }
  }

  execute() {
    switch (this.state.operator) {
      case("+"):
        this.state.result = (parseFloat(this.state.oldNumber) + parseFloat(this.state.number)).toString();
        break
      case("-"):
        this.state.result = (parseFloat(this.state.oldNumber) - parseFloat(this.state.number)).toString();
        break
      case("÷"):
        this.state.result = (parseFloat(this.state.oldNumber) / parseFloat(this.state.number)).toString();
        break
      case("×"):
        this.state.result = (parseFloat(this.state.oldNumber) * parseFloat(this.state.number)).toString();
        break
    }
  }

  clearHandler (event) {
    this.setState({
      numberSequence: event.target.value === "CE" ?
        "" :
        this.state.numberSequence.substr(0, this.state.numberSequence.length - this.state.number.length),
      pointCheck: false,
      number: "",
      result: "",
      operator: "",
      equalized: false,
      chainOps: false
    })
  }

  numberHandler(event) {
    this.setState({
      result: "",
      number: `${this.state.number !== "0" && !this.state.equalized && !this.state.chainOps ?
        this.state.number :
        ""}${event.target.value}`,
      numberSequence:
        `${
        this.state.numberSequence !== "0" && !this.state.equalized ?
        this.state.numberSequence :
        ""
      }${event.target.value}`,
      equalized: false,
      chainOps: false
    })
  }

  operatorHandler(event){
    if (this.state.number !== "") {
      {this.state.operator !== "" && this.execute()}
      this.setState({
        pointCheck: false,
        operator: event.target.value,
        oldNumber: this.state.operator === "" ?
          this.state.number :
          this.state.result !== "" ?
            this.state.result :
            this.state.number,
        number: this.state.operator === "" ?
          "" :
          this.state.number,
        numberSequence: `${this.state.numberSequence}${event.target.value}`,
        chainOps: this.state.operator !== ""
      })
    }
  }

  equalHandler() {
    this.execute();
    this.setState({
      pointCheck: false,
      equalized: true,
      oldNumber: "",
      number: "",
      operator: "",
    })
  }

  pointHandler() {
    if (!this.state.pointCheck){
      this.setState({
        number: this.state.number !== "" ?
          `${this.state.number}.` :
          `0.`,
        numberSequence: this.state.numberSequence !== "" ?
          `${this.state.numberSequence}.` :
          `0.`,
        pointCheck: true
      })
    }
  }

  render() {
    return (
      <div className="container" id="main-view">
        <div className="calculator-ext">
          <div className="calculator-top-div">
           <h4>Sacha's REACT Calculator</h4>
          </div>
          <div className="calculator-int">
            <div className="text-box">
              <div type="text" name="upper-display" className="display-up">
                {this.state.equalized || this.state.chainOps ?
                  this.state.result :
                  this.state.number !== "" ?
                    this.state.number :
                    0}
              </div>
              <div type="text" name="lower-display" className="display-down">
                {this.state.numberSequence !== "" ? this.state.numberSequence : 0}
              </div>
            </div>
          <ButtonBox
            numberHandler={this.numberHandler.bind(this)}
            operatorHandler={this.operatorHandler.bind(this)}
            clearHandler={this.clearHandler.bind(this)}
            pointHandler={this.pointHandler.bind(this)}
            equalHandler={this.equalHandler.bind(this)}
          />
          </div>
        </div>
      </div>
    )
  }
}

export default Calculator