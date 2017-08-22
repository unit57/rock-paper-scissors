import React, { Component } from 'react';




class PlayerChoice extends Component {
	render() {
		return (

	        <div id='play' className='row'>

	              <ul id="player_choices" className='col-xs-9'>

	                <li className='choice rock col-xs-4'>
	                  <a onClick={ (this.props.playDisabled)? ()=>{} : ()=>this.props.rock()} href='#'>Rock</a>
	                </li>

	                <li className='choice paper col-xs-4'>
	                  <a onClick={ (this.props.playDisabled)? ()=>{} : ()=>this.props.paper()} href='#'>Paper</a>
	                </li>

	                <li className='choice scissors col-xs-4'>
	                  <a onClick={ (this.props.playDisabled)? ()=>{} : ()=>this.props.scissor()} href='#'>Scissors</a>
	                </li>

	              </ul>
	              <input 
	              		className='submit col-xs-3' 
	              		name="submit" 
	              		value="Play!" 
	              		type="button" 
	              		disabled={(this.props.disabled)? "disabled" : ""} 
	              		onClick={()=>this.props.play()}/>

	        </div>

		);
	}
}

export default PlayerChoice;