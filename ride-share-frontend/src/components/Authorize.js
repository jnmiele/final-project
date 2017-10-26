import React from 'react'
import { Redirect } from 'react-router-dom'

function Authorize(RenderedComponent, props) {
	return class extends React.Component{ 

		render() {
			if (this.props.location) {
				if (!localStorage.getItem('jwtToken') && this.props.location.pathname !== '/login' && this.props.location.pathname !== '/signup') {
	      	return <Redirect to='/signup'/>
	    	} else if ((localStorage.getItem('jwtToken') && this.props.location.pathname === '/login') || (localStorage.getItem('jwtToken') && this.props.location.pathname === '/signup')) {
	      	return <Redirect to='/'/>
	    	}
			}
   	  return <RenderedComponent {...this.props}/>
   	}
  }
}

export default Authorize