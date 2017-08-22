import React, { Component } from 'react';




class NetworkError extends Component {
	render() {
		return (
			<div className="networkErrorParent">
		        <div className="networkError">
		        	
		        	<img src="https://cdn.dribbble.com/users/24885/screenshots/1797791/no-internet-connection.png" 
		        		width="50%" 
		        		height="50%"
		        		alt="No Connection. Click Try Again to Continue"
		        		/>
		        	<button onClick={()=>{this.props.tryAgain()}}> Try Again </button>
		        </div>
	        </div>
		);
	}
}

export default NetworkError;