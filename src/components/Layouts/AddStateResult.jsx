import React, { Component } from 'react';

class AddStateResult extends Component {

  render() {
    return (
    	<div className="container">
        <form onSubmit={this.props.handleSubmit}>
        	<br />
        	<h2>Add State</h2>
            <div className="form-group">
        		<label htmlFor="nameofstate">Name of State: </label>
        		<select className="form-control" onChange={this.props.handleChange} name='nameofstate' value={this.props.nameofstate}>

					<option value=''>-- Please select a state --</option>
					<option value='Abia'>Abia State</option>
					<option value='Akwa-Ibom'>Akwa Ibom State</option>
					<option value='Anambra'>Anambra State</option>
					<option value='Benue'>Benue State</option>
				</select>
				<br />
				<p><input type='text' placeholder='Please enter APC votes' name='apcVotes' onChange={this.props.handleChange} /></p>
				<p><input type='text' placeholder='Please enter PDP votes' name='pdpVotes' onChange={this.props.handleChange} /></p>
				<br />
				<input type="submit" className="btn btn-primary" value="Collate" />
            </div>
        </form>


        </div>
    )
    }
}

export default AddStateResult;
