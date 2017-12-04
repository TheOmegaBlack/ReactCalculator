import React from 'react'
import ButtonBox from './ButtonBox'

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: "",
      sequenceArray: [],
      currentIndex: 0,
      oldNumber: "",
      result: "",
      operator: "",
      equalized: false,
      chainOps: false,
      pointCheck: false,
    }
  }

  execute() {
    let result = ""
    switch (this.state.operator) {
      case("+"):
        result = (parseFloat(this.state.oldNumber) + parseFloat(this.state.number)).toString()
        break
      case("-"):
        result = (parseFloat(this.state.oldNumber) - parseFloat(this.state.number)).toString()
        break
      case("÷"):
        result = (parseFloat(this.state.oldNumber) / parseFloat(this.state.number)).toString()
        break
      case("×"):
        result = (parseFloat(this.state.oldNumber) * parseFloat(this.state.number)).toString()
        break
    }
    if (result.indexOf(".") && result.length > 10) {
      const beforePoint = Math.round(parseFloat(result)).toString().length
      if (beforePoint < 10) {
        let zeroes = "1"
        for (let i = 10 - beforePoint; i > 0; i--) {
          zeroes += "0"
        }
        result = (Math.round(result * zeroes) / zeroes).toString()
      }
      else {
        result = "ERROR"
      }
    }
    else if (result.length > 10) {
      result = "ERROR"
    }
    if(result === "ERROR"){
      this.setState({
        pointCheck: false,
        equalized: true,
        oldNumber: "",
        number: "",
        operator: "",
      })
    }
    return result
  }

  clearHandler (event) {
    let sequenceArray = this.state.sequenceArray.slice()
    if(event.target.value !== "CE"){
      sequenceArray[this.state.currentIndex] = ""
    }
    this.setState({
      // numberSequence: event.target.value === "CE" ?
      //   "" :
      //   this.state.numberSequence.substr(0, this.state.numberSequence.length - this.state.number.length),
      sequenceArray: event.target.value !== "CE" ?
        sequenceArray :
        [],
      currentIndex: event.target.value !== "CE" ?
        this.state.currentIndex:
        0,
      pointCheck: false,
      number: "",
      result: "",
      operator: event.target.value !== "CE" ? this.state.operator : "",
      equalized: false,
      chainOps: false,
      error: false
    })
  }

  numberHandler(event) {
    const currentIndex = this.state.currentIndex !== 0 ? this.state.currentIndex : 0
    const number = `${this.state.number !== "0" && !this.state.equalized && !this.state.chainOps ?
      this.state.number :
      ""}${event.target.value}`
    const sequenceArray = !this.state.equalized ? this.state.sequenceArray.slice() : []
    sequenceArray[currentIndex] = number
    this.setState({
      result: "",
      number: number,
      sequenceArray: sequenceArray,
      equalized: false,
      chainOps: false,
      currentIndex: currentIndex,
    })
  }

  operatorHandler(event){
    if (this.state.number !== "") {
      const sequenceArray = this.state.sequenceArray.slice()
      const index = this.state.currentIndex
      if(index === sequenceArray.length){
        sequenceArray[index - 1] = event.target.value
        this.setState({
          operator: event.target.value,
          sequenceArray
        })
        return
      }
      sequenceArray.push(event.target.value)
      let result = ""
      if (this.state.operator !== "") {
        result = this.execute()
      }
      this.setState({
        pointCheck: false,
        operator: event.target.value,
        result,
        oldNumber: this.state.operator === "" ?
          this.state.number :
          result !== "" ?
            result :
            this.state.number,
        number: this.state.operator === "" ?
          "" :
          this.state.number,
        chainOps: this.state.operator !== "",
        currentIndex: this.state.currentIndex += 2,
        sequenceArray
      })
    }
  }

  equalHandler() {
    if(this.state.number !== "" && this.state.oldNumber !== "" &&
      !isNaN(this.state.sequenceArray[this.state.currentIndex])){
      let result = ""
      result = this.execute();
      this.setState({
        result: result,
        pointCheck: false,
        equalized: true,
        oldNumber: "",
        number: "",
        operator: "",
      })
    }
  }

  pointHandler() {
    const number =  this.state.number !== "" ?
      `${this.state.number}.` :
      `0.`
    const sequenceArray = this.state.sequenceArray.slice()
    sequenceArray[this.state.currentIndex] = number
    if (!this.state.pointCheck){
      this.setState({
        number: number,
        // numberSequence: this.state.numberSequence !== "" ?
        //   `${this.state.numberSequence}.` :
        //   `0.`,
        pointCheck: true,
        sequenceArray: sequenceArray
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
                {/*{this.state.numberSequence !== "" ? this.state.numberSequence : 0}*/
                  this.state.sequenceArray.join("") !== "" ? this.state.sequenceArray.join("") : 0
                }
              </div>
            </div>
          <ButtonBox
            numberHandler={this.numberHandler.bind(this)}
            operatorHandler={this.operatorHandler.bind(this)}
            clearHandler={this.clearHandler.bind(this)}
            pointHandler={this.pointHandler.bind(this)}
            equalHandler={this.equalHandler.bind(this)}
            length={this.state.number.length}
          />
          </div>
        </div>
      </div>
    )
  }
}

export default Calculator