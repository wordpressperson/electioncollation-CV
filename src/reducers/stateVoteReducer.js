import {DISPLAY_STATE_RESULTS, ADD_STATE_RESULT} from '../actions/types.js';
import Datasource from '../components/Datasource.jsx'

const initialState={
  stateVoteItem: {},
  // nameofstate: ''
  // apcVotes: ''
  // pdpVotes:''
  stateVoteItems: Datasource
}

export default function(state=initialState, action) {
	switch(action.type) {
		case DISPLAY_STATE_RESULTS:
			return {
				...state,
				stateVotes: action.payload
			}

		case ADD_STATE_RESULT:
			return {
	  			...state,
				stateVoteItem: action.payload
			}

		default:
			return state;
	}
}