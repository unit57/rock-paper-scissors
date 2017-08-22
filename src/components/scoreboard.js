import React, { Component } from 'react';




class ScoreBoard extends Component {
	render() {
		return (

	        <div id='scoreboard' className='row'>

	          <p className='player col-xs-6'>
	            <span className='who'>Player:</span>
	            <span className='score'> {this.props.playerScore}</span>
	          </p>
	          <p className='computer col-xs-6'>
	            <span className='who'>Computer:</span>
	            <span className='score'> {this.props.computerScore}</span>
	          </p>
	        </div>
		);
	}
}

export default ScoreBoard;