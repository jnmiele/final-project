function doSignup(userParams) {
	return {
		type: "CREATE_USER",
		payload: userParams
	};
}

function doLogin(loginParams) {
	return {
		type: "LOGIN_USER",
		payload: loginParams
	};
}

export function createUser(userParams) {

  const body = JSON.stringify(userParams)
  console.log("you hit the createUser method, we're trying to hit the backend with these params:", userParams)
  return function(dispatch) {
  	debugger
  	fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: body
  })
  .then(res => res.json())
  .then(res => console.log(res))
	}
}

