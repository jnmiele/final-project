import React from 'react'
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
    this.props.history.push('/trips')
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
    return (
      <div id='trip-form'>
        <h1> Let's go somewhere together. </h1>
        <div className="ui input">
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleDestinationChange} type="text" placeholder="where to?" required="true"/><br/><br/>
            <input onChange={this.handleOriginChange} type="text" placeholder="where from?" required="true"/><br/><br/>
            <input onChange={this.handleDateChange} type="date" required="true"/><br/>
            <br/><p>Leaving at: <input onChange={this.handleTimeChange} type="time" required="true"/></p>
            <br/><input type="submit" />
          </form>
        </div>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    createTrip: (tripParams) => {
      dispatch(createTrip(tripParams))
    }
  }
}

function mapStateToProps(state) {
  return {
    trips: state.trips.list
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripForm)