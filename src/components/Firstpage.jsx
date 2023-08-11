import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavBar from './Layouts/NavBar.jsx';
import App from '../App.js';
import ViewResults from './Layouts/ViewResults.jsx';
import ErrorInfo from './Layouts/ErrorInfo.jsx';


class Firstpage extends Component{

render(){
	return(
		<div>
			<BrowserRouter>
				<div>
					<NavBar />
					<Switch>
						<Route exact path="/" component={App} />
						<Route exact path="/viewresults" component={ViewResults} />
						<Route component={ErrorInfo} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
		)
	}
}

export default Firstpage;