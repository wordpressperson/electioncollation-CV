import {DISPLAY_STATE_RESULTS, ADD_STATE_RESULT} from './types.js';
import Datasource from '../components/Datasource.jsx'

export function displayPosts(stateVoteItems) {
	return function(dispatch) {
		dispatch({
			type: DISPLAY_STATE_RESULTS,
			payload: stateVoteItems
		})
	}
}

export function addState(stateVoteItem) {
	return function(dispatch) {
		dispatch({
			type: ADD_STATE_RESULT,
			payload: stateVoteItem
		})
	}
}
