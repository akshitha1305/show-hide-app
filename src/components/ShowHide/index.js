// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    isFirstButtonClicked: false,
    isSecondButtonClicked: false,
  }

  onClickFirstNameButton = () => {
    this.setState(prevState => ({
      isFirstButtonClicked: !prevState.isButtonClicked,
    }))
  }

  onClickLastNameButton = () => {
    this.setState(prevState => ({
      isSecondButtonClicked: !prevState.isButtonClicked,
    }))
  }

  render() {
    const {isSecondButtonClicked, isFirstButtonClicked} = this.state
    const firstNameClass = isFirstButtonClicked ? 'name-card' : null
    const lastNameClass = isSecondButtonClicked ? 'name-card' : null
    const firstNameCard = isFirstButtonClicked ? 'Joe' : null
    const lastNameCard = isSecondButtonClicked ? 'Jonas' : null
    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">Show/Hide</h1>
          <div className="button-container">
            <div className="container">
              <button
                onClick={this.onClickFirstNameButton}
                className="button"
                type="button"
              >
                Show/Hide Firstname
              </button>

              <div className={firstNameClass}>{firstNameCard}</div>
            </div>
            <div className="container">
              <button
                onClick={this.onClickLastNameButton}
                className="button"
                type="button"
              >
                Show/Hide Lastname
              </button>

              <div className={lastNameClass}>{lastNameCard}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
