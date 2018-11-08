import React, { Component } from 'react';
import styles from '../Styles/yourssweeper.css';
import GameBoard from './GameBoard.jsx';
import RulesList from './RulesList.jsx';

class Yourssweeper extends Component {
  constructor() {
    super();
    this.state = {
      board: [],
      displayRules: true,
      gameBegun: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSpaceClick = this.handleSpaceClick.bind(this);
  }

  componentWillMount() {
    let gameboard = [];
    let row = [];
    let rows = 8;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < rows; j++) {
        row.push({ row: i, space: j, numOfAdjacentMines: 0, clicked: false });
      }
      gameboard.push(row);
      row = [];
    }

    this.setState({ board: gameboard });
  }

  handleClick(selected) {
    let currentState = this.state[selected];

    this.setState({ [selected]: !currentState });
    console.log(this.state[selected]);
  }

  handleSpaceClick(rowIndex, spaceIndex) {
    let gameboard = this.state.board;
    let clickedSpace = !gameboard[rowIndex][spaceIndex].clicked;
    
    gameboard[rowIndex][spaceIndex].clicked = clickedSpace;
  
    this.setState({ board: gameboard, gameBegun: true });
  }

  render() {
    return(
      <div>
        <div className={ styles.titleContainer }>
          <h1 id={ styles.title }>Yours-sweeper</h1>
          <h6>(Not Mine-sweeper, get it? Ah, ah, ahhhh)</h6>
        </div>
        { this.state.displayRules ? 
          <RulesList />
        :
          null
        }
        <div className={ styles.buttonContainer }>
          { this.state.displayRules ? 
            <button onClick={ () => this.handleClick('displayRules') }>Hide Yours-sweeper Rules</button> 
          : 
            <button onClick={ () => this.handleClick('displayRules') }>Display Yours-sweeper Rules</button> 
          }
        </div>
        <GameBoard board={ this.state.board } handleClick={ this.handleClick } handleSpaceClick={ this.handleSpaceClick } gameBegun={ this.state.gameBegun }/>
      </div>
    )
  }
}

export default Yourssweeper;