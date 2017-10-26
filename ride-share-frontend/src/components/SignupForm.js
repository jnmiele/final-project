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
    this.checkPassword()
    const userParams = {
      email: this.state.email,
      name: [this.state.firstName, this.state.lastName],
      password: this.state.password
    }
    this.props.createUser(userParams)
    this.props.history.push('/')
  }

  checkPassword() {
    if (this.state.password !== this.state.passwordConfirmation) {
      this.setState({
        password: "",
        passwordConfirmation: ""
      }, () => alert("Sorry, your passwords didn't match. Try again!"))
    }
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }  

  handleFirstNameChange = (event) => {
    this.setState({
      firstName: event.target.value
    })
  }

handleLastNameChange = (event) => {
    this.setState({
      lastName: event.target.value
    })
  }

handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

handlePasswordConfirmationChange = (event) => {
    this.setState({
      passwordConfirmation: event.target.value
    })
  }

  render() {
    return (
      <div id='signup'>
        <h1>Get where you need to go.</h1>
        <p> Sign up and take a trip.</p>
        <div className="ui input">
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleEmailChange} value={this.state.email} type="text" placeholder="enter your email" required="true"/><br/><br/>
            <input onChange={this.handleFirstNameChange} value={this.state.firstName} type="text" placeholder="enter your first name" required="true"/><br/><br/>
            <input onChange={this.handleLastNameChange} value={this.state.lastName} type="text" placeholder="enter your last name" required="true"/><br/><br/>
            <input onChange={this.handlePasswordChange} value={this.state.password} type="password" placeholder="enter a password" required="true"/><br/><br/>
            <input onChange={this.handlePasswordConfirmationChange} value={this.state.passwordConfirmation} type="password" placeholder="confirm your password" required="true"/><br/>
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





