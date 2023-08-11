import React, {Component} from 'react'
import Datasource from '../Datasource.jsx'


class DisplayStateResults extends Component{
	
	// componentWillReceiveProps() {
	// 	stateVote.reduce((currentSum) => {
	// 	return currentSum + state.apcVotes
	// 	}, 0)
	// }

	// componentWillReceiveProps() {
	// 	var currentSum=this.props.apcVotes
	// 	Sum=Sum+currentSum


	// 	var sum=0
	// 	sum=sum+this.props.apcVotes
	// 	console.log(sum)
	// }


render(){
	return(
		<div>
		    <table className="table table-hover table-bordered table-striped">
			    <tbody>
				    <tr>
					    <td width='100'>{this.props.name}</td>
					    <td width='50'>{this.props.apcVotes}</td>
					    <td width='50'>{this.props.pdpVotes}</td>
					</tr>
			    </tbody>
		    </table> 
    </div>
		)
	}
}

export default DisplayStateResults;