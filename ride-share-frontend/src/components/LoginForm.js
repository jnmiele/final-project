import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser } from '../actions/users'
import { Button } from 'semantic-ui-react'

class LoginForm extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleLogin = (event) => {
    event.preventDefault()
    const loginParams = {email: this.state.email, password: this.state.password}
    this.props.loginUser(loginParams)
  }

  handleDemo = (event) => {
    event.preventDefault()
    const loginParams = {email: 'jamesnmiele@gmail.com', password: '1234'}
    this.props.loginUser(loginParams)
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
    return (
      <div id='login'>
        <h1> Welcome, let's go somewhere! </h1>
        <div className='error-handler'>
        </div>
        <div className="ui input">
          <form onSubmit={this.handleLogin}>
            <input onChange={this.handleEmailChange} value={this.state.email} type="text" placeholder="enter your email" required="true"/><br/><br/>
            <input onChange={this.handlePasswordChange} value={this.state.password} type="password" placeholder="enter a password" required="true"/><br/>
            <br/>
            <input type="submit" />
          </form>
        </div>
        <p> <br/>First time hitchhiking? <Link to='/signup'>Sign up here!</Link> </p>
        <Button onClick={this.handleDemo}>DEMO</Button>       
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    loginUser: (loginParams) => {
      dispatch(loginUser(loginParams))
    }
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.users.currentUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)


