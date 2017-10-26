import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

	return(
    <div id="footer">
       Made with love by <a href='https://www.linkedin.com/in/james-miele'>James Miele</a> | <a href='mailto:jamesnmiele@gmail.com'>Contact Me</a> | <Link to='/credits'>Credits</Link>
    </div>
	)
}

export default Footer
