import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createTrip } from '../actions/trips'



class TripForm extends React.Component {

  state = {
    origin: '',
    destination: '',
    date: null,
    time: null
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const tripParams = {...this.state}
    this.props.createTrip(tripParams)
    this.props.props.history.push('/trips')
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

  handleTimeChange = (event) => {
    this.setState({
      time: event.target.value
    })
  }

  render() {
    if (!localStorage.getItem('jwtToken')) {
      return <Redirect to="/login" />
    } else {
      return (
        <div className="form-container">
          <div className="ui input">
            <form onSubmit={this.handleSubmit}>
              <input onChange={this.handleDestinationChange} type="text" placeholder="where to?" required="true"/><br/>
              <input onChange={this.handleOriginChange} type="text" placeholder="where from?" required="true"/><br/>
              <input onChange={this.handleDateChange} type="date" required="true"/>
              <input onChange={this.handleTimeChange} type="time" required="true"/><br/>
              <input type="submit" />
            </form>
          </div>
        </div>
      )
    }
  }
}


function mapDispatchToProps(dispatch) {
  return {
    createTrip: (tripParams) => {
      dispatch(createTrip(tripParams))
    }
  }
}

export default connect(null, mapDispatchToProps)(TripForm)