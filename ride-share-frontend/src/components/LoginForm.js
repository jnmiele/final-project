import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { loginUser } from '../actions/users'

class LoginForm extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const loginParams = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.loginUser(loginParams)
    this.props.history.push('/home')
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }  

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  render() {
    if (localStorage.getItem('jwtToken')) {
      return <Redirect to="/" />
    } else {
      return (
        <div className="container">
          <h1> Looks like you need to sign in... </h1>
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleEmailChange} value={this.state.email} type="text" placeholder="enter your email" required="true"/><br/>
            <input onChange={this.handlePasswordChange} value={this.state.password} type="password" placeholder="enter a password" required="true"/><br/>
            <input type="submit" />
          </form>
          </div>
      )
    }
  }
}


function mapDispatchToProps(dispatch) {
  return {
    loginUser: (loginParams) => {
      dispatch(loginUser(loginParams))
    }
  }
}

export default connect(null, mapDispatchToProps)(LoginForm)


