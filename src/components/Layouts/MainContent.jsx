import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import PropTypes from 'prop-types';
import AddStateResult from './AddStateResult.jsx';
import DisplayStateResults from './DisplayStateResults.jsx';
import ViewCollation from './ViewCollation.jsx';
import Datasource from '../Datasource.jsx'
import { connect } from 'react-redux';
import { displayPosts } from '../../actions/displayStateResultsAction.js'

class MainContent extends Component {



  componentDidMount() {
    this.props.displayPosts();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value 
    })


  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.addstateVote(this.state.nameofstate, this.state.apcVotes, this.state.pdpVotes);
  }

  addstateVote=(nameofstate, apcVotes, pdpVotes)=>{
    const newStateVotes=[...this.state.stateVote, {nameofstate, apcVotes, pdpVotes}]
    this.setState({stateVote:newStateVotes})
  }


  render() {
    // const DisplayStateResult=this.props.stateVotes.map(function (datasource, index) {
    //         return (<DisplayStateResults 
    //           key={index} 
    //           name={datasource.nameofstate} 
    //           apcVotes={datasource.apcVotes} 
    //           pdpVotes={datasource.pdpVotes}
    //           />)
    //       })



    const DisplayStateResult=this.props.stateVotes.map(function (statevote, index) {
      return (
          <table key={index}>
            <tbody>
              <tr>
              <td width='100'>{statevote.nameofstate}</td>
              <td width='50'>{statevote.apcVotes}</td>
              <td width='50'>{statevote.pdpVotes}</td>
              </tr>
            </tbody>
          </table>
        ) 
          })

   return (
    <div>
      <AddStateResult 
          handleChange={this.handleChange} 
          nameofstate={this.props.nameofstate} 
          apcVotes={this.props.apcVotes}
          pdpVotes={this.props.pdpVotes}
          handleSubmit={this.handleSubmit}
          />

          <br />
      <table className="table">
          <caption>Collated Results</caption>
          <thead>
            <tr>
              <th width='100'>State</th>
              <th width='50'>APC</th>
              <th width='50'>PDP</th>
            </tr>
          </thead>
                    {DisplayStateResult}
      </table>

  
    </div>
    )
  }
}

MainContent.propTypes = {
  displayPosts: PropTypes.func.isRequired,
 stateVoteItems: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  stateVotes: state.stateVotes.stateVoteItems,
  addState: state.stateVotes.stateVoteItem

})

export default connect(mapStateToProps, {displayPosts})(MainContent)