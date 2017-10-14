import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router} from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import tripsReducer from './reducers/tripsReducer'
import usersReducer from './reducers/usersReducer'
import userTripsReducer from './reducers/userTripsReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
	users: usersReducer, 
	trips: tripsReducer,
	userTrips: userTripsReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));


ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
