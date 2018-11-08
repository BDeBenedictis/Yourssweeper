import React from 'react';
import styles from '../Styles/ruleslist.css';

const RulesList = (props) => {
  return(
    <div>
      <h3 id={ styles.subTitle }>Rules:</h3>
      <ul className={ styles.rulesList }>
        <li>There are 64 tiles to a game board.</li>
        <li>The aim of the game is to expose all of the tiles on the board without detonating any mines.</li>
        <li>When clicked on, a tile displays the number of tiles with mines under them immediately surrounding that tile - if that tile doesn't have a mine under it itself. If the tile does have a mine under it, the mine detonates.</li>
        <li>If a mine is detonated, it is a Game Over. The player loses, and all mine locations are subsequently revealed.</li>
      </ul>
      <h5>Have fun!</h5>
    </div>
  )
}

export default RulesList;