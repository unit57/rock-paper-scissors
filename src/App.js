import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

// IMPORT COMPONENTS 
import ScoreBoard from './components/scoreboard';
import PlayerChoice from './components/playerchoice';
import Result from './components/result';
import Footer from './components/footer';
import NetworkError from './components/networkerror';


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
          /* disables play button */
          disabled: true,
          display:"none",
          playerScore: 0,
          computerScore: 0,
          yourChoice: '',
          computerChoice: '',
          result: '',
          networkError: false,
          /* Disable PlayChoices */
          playDisabled: false,
      }
      // bind click's
      this.handlePlayClick = this.handlePlayClick.bind(this);
      this.handleTryAgainClick = this.handleTryAgainClick.bind(this);
    }

    handleRockClick() {
        this.setState({
            yourChoice: 'Rock',
            disabled: false  
        });

    }
    handlePaperClick() {
        this.setState({
            yourChoice: 'Paper',
            disabled: false 
        });

    }
    handleScissorClick() {
        this.setState({
            yourChoice: 'Scissors',
            disabled: false      
        });

    }
    handlePlayClick() {
      axios.post('http://localhost:3000/match', {"choice":this.state.yourChoice})
      .then((res) => {
        /*console.log(res.data)*/
            this.setState({
              yourChoice: res.data.playerChoice,
              computerChoice: res.data.computerChoice,
              result: res.data.result,
              display:"inline",
              disabled: true,
              networkError: false,
              playDisabled: true,
  
            })    
        })
        .then(() => {
          if(this.state.result === 'win') {
              /*console.log('win')*/
              this.setState({
                playerScore: this.state.playerScore + 1
              })
          } else if (this.state.result === 'lose' ){
              this.setState({
                computerScore: this.state.computerScore + 1
              })
          } else if (this.state.result === 'tie') {

          }}).catch((error)=> {
                /*  if network error set state of netork error to render network error component */
                this.setState ({
                  networkError: true,
                  disabled: false
                })
            }) 
    }


    handlePlayAgainClick() {
      this.setState({
          yourChoice: " ",
          computerChoice: " ",
          result: " ",
          display:"none",
          playDisabled: false
      })
    }

    handleTryAgainClick() {
      this.setState({
          networkError: false,
          /* REMOVE PLAYER CHOICE AFTER TRY AGAIN */
         /* yourChoice: " ",*/

      })
    }

  render() {
    if (this.state.networkError === false) {

    return (
      <div className="App">
        <div className="container">

            <div id="application_container">
              <ScoreBoard 
                playerScore={this.state.playerScore} 
                computerScore={this.state.computerScore}/>
              <PlayerChoice
                playDisabled={this.state.playDisabled}
                disabled={this.state.disabled}
                rock={()=>this.handleRockClick()} 
                paper={()=>this.handlePaperClick()} 
                scissor={()=>this.handleScissorClick()} 
                play={()=>this.handlePlayClick()}/>

              <Result 
                playAgain={()=>this.handlePlayAgainClick()}
                display={this.state.display}
                yourChoice={this.state.yourChoice} 
                computerChoice={this.state.computerChoice} 
                result={this.state.result}/>
            </div>
              <Footer networkError={this.state.networkError}/>
        </div>
      </div>
    );
        } else if (this.state.networkError === true ){
              return (
                <div>
                  <NetworkError tryAgain={()=>this.handleTryAgainClick()}/>
                </div>
                );
        }

  }
}

export default App;
