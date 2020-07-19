import React, { Component } from 'react';
import SingleField from '../SingleField/SingleField';

import styles from './CityBuilder.module.scss';


class CityBuilder extends Component {
  state = {
    gameBoard: {
      rows: 4,
      columns: 4,
    },
  }

  render() {
    let rows = [];
    let boardArray = [];
    for(let i = 0; i<this.state.gameBoard.rows; i++) {
      for(let j = 0; j<this.state.gameBoard.columns; j++) {
        rows.push(j)
      }
      boardArray.push(rows);
      rows = [];
    }

    const gameBoard = boardArray.map((row, rowIndex) => {
      return (
        <div key={rowIndex}>
          {
            row.map((_, colIndex) => {
              return <SingleField key={colIndex}/>;
            })
          }
        </div>
      )
    })

    return (
      <div className={styles.CityBuilder}>
        {gameBoard}
      </div>
    );
  };
}

export default CityBuilder