import React from 'react'
import ButtonBox from './ButtonBox'

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayUp: "0",
      displayDown: "0",
      number: 0,
      oldNumber: 0,
      result: 0,
      equalized: false,
      pointCheck: false
    }
  }
  render() {

    const numberHandler = (event) => {
      if (this.state.equalized) {
        this.setState ({
          displayUp : "0",
          displayDown :"0",
          equalized : false
        })
      }
      this.setState({
        number: `${this.state.number}${this.target.value}`,
        displayDown: `${this.state.displayDown}${this.target.value}`,
        displayUp: this.state.number
      })
    }

    return (
      <div className="container" id="main-view">
        <div className="calculator-ext">
          <div className="calculator-top-div">
           <h4>Sacha's Calculator</h4>
          </div>
          <div className="calculator-int">
            <div className="text-box">
              <form>
                <input type="text" name="upper-display" className="display-up" value={this.state.displayUp} disabled="disabled" />
                <input type="text" name="lower-display" className="display-down" value={this.state.displayDown} disabled="disabled" />
              </form>
            </div>
          <ButtonBox numberHandler={numberHandler} />
          </div>
        </div>
      </div>
    )
  }
}

export default Calculator