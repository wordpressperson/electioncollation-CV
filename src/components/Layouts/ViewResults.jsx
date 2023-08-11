import React, {Component} from 'react'
import PDPImage from '../../assets/PDP-logo.jpg'
import APCImage from '../../assets/APC.jpg'

class ViewResults extends Component{

	state={
		Infosource:[1,2,3,4,5,6,7,8,9]
	}

render(){
	return(
		<div>
			<h2 className="container m-3">2019 Nigeria General Elections</h2>
			<div className="row">
			<div className="m-3">
			<img src={APCImage} alt='APC' width='300' />
			<img src={PDPImage} alt='PDP' width='600'/>
			</div>
			</div>
			<br />
			<div className="row m-3">
				<label className="m-3">Total Votes:</label>
				<input type="text" name="APCtotal" value={this.props.Total.apcVotes}/>
				<input type="text" name="PDPtotal" value={this.props.Total.pdpVotes} style={{marginLeft: '200px'}}/>
			</div>
		</div>
		)
	}
}

export default ViewResults;