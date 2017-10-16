import React from 'react'
import { Redirect } from 'react-router-dom'

function Authorize(RenderedComponent, props) {
	return class extends React.Component{ 
		constructor(props) {
			super(props)
		}

		render() {
			if (this.props.location) {
				if (!localStorage.getItem('jwtToken') && this.props.location.pathname !== '/login') {
	      	return <Redirect to='/login'/>
	    	} else if (localStorage.getItem('jwtToken') && this.props.location.pathname === '/login' || this.props.location.pathname === '/signup') {
	      	return <Redirect to='/'/>
	    	}
			}
   	  return <RenderedComponent {...this.props} {...props}/>
   	}
	}
}

export default Authorize