import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {randamNumber: 0}

  generateNumber = () => {
    const newRandanNumber = Math.ceil(Math.random() * 100)
    this.setState({randamNumber: newRandanNumber})
  }

  render() {
    const {randamNumber: newRandanNumber} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph1">
            {' '}
            Generate a random number in the range of 0 to 100{' '}
          </p>
          <button
            className="btn thopeColor"
            type="button"
            onClick={this.generateNumber}
          >
            Generate{' '}
          </button>
          <p className="gereratenummValue"> {newRandanNumber} </p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
