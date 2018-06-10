import React from 'react'
import { connect } from 'react-redux'

import { createUser } from '../actions/users'

class SignupForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      passwordConfirmation: ""
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { email, firstName, lastName, password, passwordConfirmation } = this.state;
    this.checkPassword(password, passwordConfirmation)
    
    const userParams = {
      email: email,
      name: [firstName, lastName],
      password: password
    }

    this.props.createUser(userParams)
    this.props.history.push('/')
  }

  checkPassword = (password, passwordConfirmation) => {
    if (password !== passwordConfirmation) {
      this.setState({
        password: "",
        passwordConfirmation: ""
      }, () => alert("Sorry, your passwords didn't match. Try again!"))
    }
  }

  handleInputChage = ({ target: { dataset, value } }) => {
    const key = dataset.id

    switch (key) {
      case 'email':
        this.setState({ email: value })
        break;

      case 'firstName':
        this.setState({ firstName: value })
        break;

      case 'lastName':
        this.setState({ lastName: value })
        break;

      case 'password':
        this.setState({ password: value })
        break;

      case 'passwordConfirmation':
        this.setState({ passwordConfirmation: value })
        break;
    }
  }

  render() {

    const { email, firstName, lastName, password, passwordConfirmation } = this.state

    const { 
      handleEmailChange, 
      handleFirstNameChange, 
      handleLastNameChange, 
      handlePasswordChange, 
      handlePasswordConfirmationChange, 
      handleSubmit 
    } = this

    return (
      <div id='signup'>
        <h1>Get where you need to go.</h1>
        <p> Sign up and take a trip.</p>
        <div className="ui input">
          <form onSubmit={handleSubmit}>
            <input data-id='email' onChange={handleEmailChange} value={email} type="text" placeholder="enter your email" required="true"/><br/><br/>
            <input data-id='firstName' onChange={handleFirstNameChange} value={firstName} type="text" placeholder="enter your first name" required="true"/><br/><br/>
            <input data-id='lastName' onChange={handleLastNameChange} value={lastName} type="text" placeholder="enter your last name" required="true"/><br/><br/>
            <input data-id='password' onChange={handlePasswordChange} value={password} type="password" placeholder="enter a password" required="true"/><br/><br/>
            <input data-id='passwordConfirmation' onChange={handlePasswordConfirmationChange} value={passwordConfirmation} type="password" placeholder="confirm your password" required="true"/><br/>
            <br/><br/>
            <div className='submit'><input type="submit"/></div>
          </form>
        </div>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    createUser: (userParams) => {
      dispatch(createUser(userParams))
    }
  }
}

export default connect(null, mapDispatchToProps)(SignupForm)





