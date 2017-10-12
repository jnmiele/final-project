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

function doLogin(params) {
  return {
    type: "LOGIN_USER",
    payload: params
  }
}

export function setUser() {
  return function(dispatch) {
   
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
    .then(res => dispatch(doLogin(res)))
  }
}