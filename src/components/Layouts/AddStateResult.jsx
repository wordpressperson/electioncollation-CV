import React, { Component } from 'react';

class AddStateResult extends Component {
  // Reusable list of all 36 states + FCT (alphabetical)
  statesList = [
    { value: 'Abia', label: 'Abia State' },
    { value: 'Adamawa', label: 'Adamawa State' },
    { value: 'Akwa Ibom', label: 'Akwa Ibom State' },
    { value: 'Anambra', label: 'Anambra State' },
    { value: 'Bauchi', label: 'Bauchi State' },
    { value: 'Bayelsa', label: 'Bayelsa State' },
    { value: 'Benue', label: 'Benue State' },
    { value: 'Borno', label: 'Borno State' },
    { value: 'Cross River', label: 'Cross River State' },
    { value: 'Delta', label: 'Delta State' },
    { value: 'Ebonyi', label: 'Ebonyi State' },
    { value: 'Edo', label: 'Edo State' },
    { value: 'Ekiti', label: 'Ekiti State' },
    { value: 'Enugu', label: 'Enugu State' },
    { value: 'FCT', label: 'Federal Capital Territory (FCT)' },
    { value: 'Gombe', label: 'Gombe State' },
    { value: 'Imo', label: 'Imo State' },
    { value: 'Jigawa', label: 'Jigawa State' },
    { value: 'Kaduna', label: 'Kaduna State' },
    { value: 'Kano', label: 'Kano State' },
    { value: 'Katsina', label: 'Katsina State' },
    { value: 'Kebbi', label: 'Kebbi State' },
    { value: 'Kogi', label: 'Kogi State' },
    { value: 'Kwara', label: 'Kwara State' },
    { value: 'Lagos', label: 'Lagos State' },
    { value: 'Nasarawa', label: 'Nasarawa State' },
    { value: 'Niger', label: 'Niger State' },
    { value: 'Ogun', label: 'Ogun State' },
    { value: 'Ondo', label: 'Ondo State' },
    { value: 'Osun', label: 'Osun State' },
    { value: 'Oyo', label: 'Oyo State' },
    { value: 'Plateau', label: 'Plateau State' },
    { value: 'Rivers', label: 'Rivers State' },
    { value: 'Sokoto', label: 'Sokoto State' },
    { value: 'Taraba', label: 'Taraba State' },
    { value: 'Yobe', label: 'Yobe State' },
    { value: 'Zamfara', label: 'Zamfara State' },
  ];

  render() {
    return (
      <div className="container">
        <form onSubmit={this.props.handleSubmit}>
          <br />
          <h2>Add State Result</h2>
          <div className="form-group">
            <label htmlFor="nameofstate">Name of State: </label>
            <select
              className="form-control"
              onChange={this.props.handleChange}
              name="nameofstate"
              value={this.props.nameofstate}
            >
              <option value="">-- Please select a state --</option>
              {this.statesList.map((state) => (
                <option key={state.value} value={state.value}>
                  {state.label}
                </option>
              ))}
            </select>

            <br />
            <p>
              <input
                type="text"
                placeholder="Please enter APC votes"
                name="apcVotes"
                value={this.props.apcVotes || ''}
                onChange={this.props.handleChange}
              />
            </p>
            <p>
              <input
                type="text"
                placeholder="Please enter PDP votes"
                name="pdpVotes"
                value={this.props.pdpVotes || ''}
                onChange={this.props.handleChange}
              />
            </p>
            <br />
            <input type="submit" className="btn btn-primary" value="Collate" />
          </div>
        </form>
      </div>
    );
  }
}

export default AddStateResult;
