import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class ViewCollation extends Component{

render(){
	return(
		<div>
			<button onClick={this.props.viewCollation}>View Collated Results</button>
			<Link to='/viewresults'>View collated results</Link>
		</div>
		)
	}
}

export default ViewCollation;