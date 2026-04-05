import React, { Component } from 'react';
import AddStateResult from './components/Layouts/AddStateResult.jsx';
import DisplayStateResults from './components/Layouts/DisplayStateResults.jsx';
import ViewResults from './components/Layouts/ViewResults.jsx';
// Removed: import Datasource from './components/Datasource.jsx'
import { Link } from 'react-router-dom';

class App extends Component {
  state = {
    nameofstate: '',
    apcVotes: '',
    pdpVotes: '',
    flag: 0,
    voteState: {},
    stateVote: []          // starts empty → fully reusable
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { nameofstate, apcVotes, pdpVotes } = this.state;

    // Basic validation
    if (!nameofstate) {
      alert('Please select a state!');
      return;
    }

    // Prevent adding the same state twice
    const alreadyExists = this.state.stateVote.some(
      (s) => s.nameofstate === nameofstate
    );
    if (alreadyExists) {
      alert('This state has already been added!');
      return;
    }

    // Add the new result
    this.addstateVote(nameofstate, apcVotes, pdpVotes);

    // Reset form (controlled inputs)
    this.setState({
      nameofstate: '',
      apcVotes: '',
      pdpVotes: '',
      flag: 1
    });
  };

  addstateVote = (nameofstate, apcVotes, pdpVotes) => {
    const newStateVotes = [
      ...this.state.stateVote,
      { nameofstate, apcVotes, pdpVotes }
    ];

    this.setState({ stateVote: newStateVotes });

    // Cleaner, immutable total calculation
    const totals = newStateVotes.reduce(
      (acc, curr) => ({
        apcVotes: (acc.apcVotes || 0) + parseInt(curr.apcVotes || 0, 10),
        pdpVotes: (acc.pdpVotes || 0) + parseInt(curr.pdpVotes || 0, 10)
      }),
      {}
    );

    this.setState({ voteState: totals });
  };

  // (compileCollation and old commented code removed – not used)

  render() {
    const DisplayStateResult = this.state.stateVote.map((datasource, index) => (
      <DisplayStateResults
        key={index}
        name={datasource.nameofstate}
        apcVotes={datasource.apcVotes}
        pdpVotes={datasource.pdpVotes}
      />
    ));

    return (
      <div className="container">
        <AddStateResult
          handleChange={this.handleChange}
          nameofstate={this.state.nameofstate}
          apcVotes={this.state.apcVotes}
          pdpVotes={this.state.pdpVotes}
          handleSubmit={this.handleSubmit}
        />

        <br />

        <table className="table">
          <caption><h4>Collated Results</h4></caption>
          <thead>
            <tr className="info">
              <th width="100">State</th>
              <th width="50">APC</th>
              <th width="50">PDP</th>
            </tr>
          </thead>
        </table>

        {DisplayStateResult}

        {this.state.flag === 1 && (
          <ViewResults Total={this.state.voteState} flag={this.state.flag} />
        )}
      </div>
    );
  }
}

export default App;
