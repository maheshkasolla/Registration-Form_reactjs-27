// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameErr: false,
    lastNameErr: false,
    isFormSubmitted: false,
  }

  submitForm = event => {
    event.preventDefault()
    const isValidFirst = this.validateFirstName()
    const isValidLast = this.validateLastName()
    if (isValidFirst && isValidLast) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        firstNameErr: !isValidFirst,
        lastNameErr: !isValidLast,
        isFormSubmitted: false,
      })
    }
  }

  anotherResponse = event => {
    event.preventDefault()
    this.setState({isFormSubmitted: false, firstName: '', lastName: ''})
  }

  validateFirstName = () => {
    const {firstName} = this.state
    const firstNamePos = firstName !== ''
    this.setState({firstNameErr: !firstNamePos})
    return firstNamePos
  }

  validateLastName = () => {
    const {lastName} = this.state
    const lastNamePos = lastName !== ''
    this.setState({lastNameErr: !lastNamePos})
    return lastNamePos
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  renderFirstName = () => {
    const {firstName, firstNameErr} = this.state
    const firstNameClass = firstNameErr ? 'input-ele err-inp-ele' : 'input-ele'
    return (
      <div className="input-container">
        <label htmlFor="firstname" className="input-head">
          FIRST NAME
        </label>
        <input
          id="firstname"
          onChange={this.onChangeFirstName}
          onBlur={this.validateFirstName}
          className={firstNameClass}
          type="text"
          value={firstName}
        />
      </div>
    )
  }

  renderLastName = () => {
    const {lastName, lastNameErr} = this.state
    const lastNameClass = lastNameErr ? 'input-ele err-inp-ele' : 'input-ele'
    return (
      <div className="input-container">
        <label htmlFor="lastname" className="input-head">
          LAST NAME
        </label>
        <input
          id="lastname"
          onChange={this.onChangeLastName}
          onBlur={this.validateLastName}
          className={lastNameClass}
          type="text"
          value={lastName}
        />
      </div>
    )
  }

  renderInputForm = () => {
    const {firstNameErr, lastNameErr} = this.state
    return (
      <form className="card" onSubmit={this.submitForm}>
        {this.renderFirstName()}
        {firstNameErr && <p className="error-msg">Required</p>}
        {this.renderLastName()}
        {lastNameErr && <p className="error-msg">Required</p>}
        <button type="submit" className="sub-btn">
          Submit
        </button>
      </form>
    )
  }

  renderSubmittedForm = () => (
    <form className="card" onSubmit={this.anotherResponse}>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-img"
      />
      <p className="para">Submitted Successfully</p>
      <button type="submit" className="sub-btn">
        Submit Another Response
      </button>
    </form>
  )

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="main">
        <h1 className="heading">Registration</h1>
        {!isFormSubmitted ? this.renderInputForm() : this.renderSubmittedForm()}
      </div>
    )
  }
}

export default RegistrationForm
