import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createTrip } from '../actions/trips'
import { setUser } from '../actions/users'


class TripForm extends React.Component {

  state = {
    origin: '',
    destination: '',
    date: ''
  }

  componentDidMount() {
    this.props.setUser()
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const jwtDecode = require('jwt-decode')
    const token = localStorage.getItem("jwtToken")
    const userId = jwtDecode(token)
    const tripParams = {
      ...this.state, user: userId
    }
    this.props.createTrip(tripParams)
    this.props.history.push('/trips')
    // this.props.history.push(`/users/${tripParams.user.user_id}`) // posters show page

  }

  handleOriginChange = (event) => {
    this.setState({
      origin: event.target.value
    })
  }

  handleDestinationChange = (event) => {
    this.setState({
      destination: event.target.value
    })
  }

  handleDateChange = (event) => {
    this.setState({
      date: event.target.value
    })
  }

  render() {
    if (!localStorage.getItem('jwtToken')) {
      return <Redirect to="/login" />
    } else {
      return (
        <div className="container">
          <h1>Let's go somewhere!</h1>
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleDestinationChange} type="text" placeholder="where to?" /><br/>
            <input onChange={this.handleOriginChange} type="text" placeholder="where from?" /><br/>
            <input onChange={this.handleDateChange} type="text" placeholder="when are you leaving?" /><br/>
            <input type="submit" />
          </form>
          </div>
      )
    }
  }
}


function mapDispatchToProps(dispatch) {
  return {
    createTrip: (tripParams) => {
      dispatch(createTrip(tripParams))
    },
    setUser: () => {
      dispatch(setUser())
    }
  }
}

export default connect(null, mapDispatchToProps)(TripForm)