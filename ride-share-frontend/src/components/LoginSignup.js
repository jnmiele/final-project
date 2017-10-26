import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'


const LoginSignup = () => {
	return(
		<div>
			<Menu tabular>
				<Menu.Item><Link to='/login'>Login</Link></Menu.Item>
				<Menu.Item><Link to='/signup'>Signup</Link></Menu.Item>
			</Menu>
			<Segment attached='bottom'>
	      <LoginForm />
	    </Segment>
	   </div>
	)
}

export default LoginSignup
