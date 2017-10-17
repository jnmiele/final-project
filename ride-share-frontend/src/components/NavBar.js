import { Link } from 'react-router-dom'
import React from 'react'

const NavBar = () => {

  function onClick(event) {
    if (event.target.dataset.id === "logout") {
      localStorage.removeItem("jwtToken")
    }
  }

	return(
    <nav onClick={onClick} className="navbar">
      <div className="nav-item">
       <Link to='/'>Home</Link>
      </div>
      <div className="nav-item">
       <Link to='/trips/new'>Start a Trip</Link>
      </div>
      <div className="nav-item">
       <Link to='/trips'>Find a Trip</Link>
      </div>
      <div className="nav-item">
      	{(localStorage.getItem("jwtToken")) ? <div className="nav-item"><Link to="/me">My Profile</Link> <a data-id="logout" href="">Logout</a></div> : <div className="nav-item"><Link to='/login'>Login</Link>  <Link to='/signup'>Signup</Link> </div> }
      </div>
    </nav>
	)
}

export default NavBar

//   return(
//     <Menu secondary onClick={onClick}>
//       <Menu.Item>
//         <Link to=''>Home</Link>
//         </Menu.Item>
//       <Menu.Item>
//         <Link to='/trips/new'>Start a Trip</Link>
//         </Menu.Item>
//       <Menu.Item>
//         <Link to='/trips'>Find a Trip</Link>
//         </Menu.Item>
//       <Menu.Item>
//         {(localStorage.getItem("jwtToken")) ? <div className="nav-item"><Link to="/me">My Profile</Link> <a data-id="logout" href="">Logout</a></div> : <div className="nav-item"><Link to='/login'>Login</Link>  <Link to='/signup'>Signup</Link> </div> }
//       </Menu.Item>
//       <Menu.Item>
//         {(localStorage.getItem("jwtToken")) ? <a data-id="logout" href="">Logout</a> : <Link to='/login'>Login</Link> }
//         {(localStorage.getItem("jwtToken")) ? <Link to='/me'>My Profile</Link> : <Link to='/signup'>Signup</Link> }
//       </Menu.Item>
//     </Menu>
//   )
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     logoutUser: () => {
//       dispatch(logoutUser())
//     }
//   }
// }

// export default NavBar