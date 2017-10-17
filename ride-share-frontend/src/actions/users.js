export function createUser(userParams) {
  const body = JSON.stringify(userParams)
  return function(dispatch) {
  	fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: body
  })
  .then(res => res.json())
  .then(res => dispatch(doLogin(res)))
	}
}

export function loginUser(params) {
  const body = JSON.stringify(params)
  return function(dispatch) {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: body
    })
    .then(res => res.json())
    .then(res => {
      dispatch(doLogin(res))
      localStorage.setItem('jwtToken', res.jwt)
    })
  }
}

function doLogin(params) {
  return {
    type: "LOGIN_USER",
    payload: params
  }
}


export function show(user) {
  const token = localStorage.getItem("jwtToken")
  return function(dispatch) {
    fetch(`http://localhost:3000${user}`, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      }
    })
    .then(userInfo => userInfo.json())
    .then(userInfo => dispatch(showUser(userInfo)))
  }
}

function showUser(user) {
  return {
    type: "SHOW_USER",
    payload: user
  }
}


export function setCurrentUser(token) {
  return function(dispatch) {
   fetch(`http://localhost:3000/me`, {
    method: "GET",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    }
   })
   .then(user => user.json())
   .then(user => dispatch(set(user)))
  }
}

function set(user) {
  return {
    type: "SET_CURRENT_USER",
    payload: user
  }
}
