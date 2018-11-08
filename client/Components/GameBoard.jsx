import React from 'react';
import styles from '../Styles/gameboard.css';

const GameBoard = (props) => {

  // let date = new Date();

  return(
    <div id={ styles.boardContainer }>
      {/* <div id={ styles.timer }>{ props.gameBegun ? setInterval(date.toLocaleTimeString(), 1000) : 00 }</div> */}
      <table id={ styles.board }>
        <tbody className={ styles.boardBody }>
          { props.board.map((row, rowIndex) => <tr key={ rowIndex } 
                                                   className={ styles.boardRow }>
                                                 { row.map((space, spaceIndex) => space.clicked ? <td key={ spaceIndex } 
                                                                                                     className={ styles.boardSpace } 
                                                                                                     onClick={ () => props.handleSpaceClick(rowIndex, spaceIndex) }>{ space.numOfAdjacentMines }</td> : <td key={ spaceIndex } 
                                                                                                                                                                                                            className={ styles.boardSpace } 
                                                                                                                                                                                                            onClick={ () => props.handleSpaceClick(rowIndex, spaceIndex) }></td>) }
                                               </tr> ) }
        </tbody>
      </table>
    </div>
  )
}

export default GameBoard;