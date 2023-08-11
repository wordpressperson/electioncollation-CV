import { combineReducers } from 'redux'
import stateVoteReducer from './stateVoteReducer.js'

export default combineReducers({
	stateVotes: stateVoteReducer
})