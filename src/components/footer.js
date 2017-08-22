import React, { Component } from 'react';




class Footer extends Component {
	render() {
		return (

	      <div className="row" id='footer'>
	        <p className='credits'>
	          <a href="http://icons8.com/web-app/713/Scissors">icons from icons8.com</a>
	        </p>
	        <div className="error"><h1>{this.props.networkError}</h1></div>
	      </div>
			);
	}
}

export default Footer;