import React, { Component } from 'react';




class Result extends Component {
	render() {
		return (

	        <div id='result' className='row'>
	          <p className='choices col-sm-6'>
	            <label>Your Choice:</label> <span>{this.props.yourChoice}</span><br/>
	            <label>Computer Choice:</label> <span>{this.props.computerChoice}</span>
	          </p>

	          <p className='outcome col-sm-6'>
	            Result: <span>{this.props.result}</span>
	          </p>

	          <p className='play-again'>
	            <a href="#" className='play-again' onClick={()=>{this.props.playAgain()}} style={{display: this.props.display }} >Play Again</a>
	          </p>

	        </div>

		);
	}
}

export default Result;