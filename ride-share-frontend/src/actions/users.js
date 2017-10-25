import { fetchAllUserTrips } from './userTrips'

export function createUser(userParams) {
  const body = JSON.stringify(userParams)
  return function(dispatch) {
  	fetch('http://localhost:3000/signup', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: body
  })
  .then(res => res.json())
  .then(res => dispatch(doLogin(res)))
  .then(res => {
      {res.payload.jwt? localStorage.setItem('jwtToken', res.payload.jwt):null}
      dispatch(set(res.payload.user))
    })
	}
}

export function loginUser(params) {
  const body = JSON.stringify(params)
  return function(dispatch) {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: body
    })
    .then(res => res.json())
    .then(res => dispatch(doLogin(res)))
    .then(res => {
      {res.payload.jwt? localStorage.setItem('jwtToken', res.payload.jwt):null}
      dispatch(set(res.payload.user))
    })
    .then(() => {
      if (localStorage.getItem('jwtToken')) {
        dispatch(setCurrentUser())
      }
    })
    .then(() => {
      if (localStorage.getItem('jwtToken')) {
        dispatch(fetchAllUserTrips())
      }
    })
  }
}

function doLogin(params) {
  return {
    type: 'LOGIN_USER',
    payload: params
  }
}


export function show(user) {
  const token = localStorage.getItem('jwtToken')
  return function(dispatch) {
    fetch(`http://localhost:3000${user}`, {
      method: 'GET',
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
    type: 'SHOW_USER',
    payload: user
  }
}


export function setCurrentUser() {
  const token = localStorage.getItem('jwtToken')
  return function(dispatch) {
   fetch(`http://localhost:3000/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    }
   })
   .then(user => user.json())
   .then(user => dispatch(set(user))
  )}
}

function set(user) {
  return {
    type: 'SET_CURRENT_USER',
    payload: user
  }
}


export function logoutUser() {
  return {
    type: 'LOGOUT_USER',
    payload: 'loogout'
  }
}


export function markTripCompleted(id) {
  const token = localStorage.getItem('jwtToken')
  return function(dispatch) {
    fetch(`http://localhost:3000/trips/${id}/edit`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      }
    })
    .then(trip => trip.json())
    .then((user) => {
      dispatch(set(user))
    })
  }
}


export function markTripPending(id) {
  const token = localStorage.getItem('jwtToken')
  return function(dispatch) {
    fetch(`http://localhost:3000/trips/${id}/edit`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      }
    })
    .then(user => user.json())
    .then((user) => {
      dispatch(set(user))
    })
  }
}