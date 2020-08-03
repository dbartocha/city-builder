import React, { Component } from 'react';
import SingleField from '../SingleField/SingleField';
import firebase from '../../firebase';
import styles from './CityBuilder.module.scss';


class CityBuilder extends Component {
  state = {
    gameBoard: {
      rows: 4,
      columns: 4,
    },
    city: {}
  }

  componentDidMount() {
    const cityRef = firebase.database().ref('city');
    cityRef.on('value', (snapshot) => {
      let buildings = snapshot.val();
      let newCity = [];
      for (let building in buildings) {
        newCity.push({
          BuildingType: buildings[building].buildingType,
          fieldId: buildings[building].fieldId
        })
      }
      this.setState({
        city: newCity,
      })
    })
  }

  dropBuildingHandler = e => {
    e.preventDefault();
    const building = e.dataTransfer.getData("building");

    const buildingCopy = document.getElementById(building).cloneNode(true);
    const buildingType = buildingCopy.dataset.type
    const fieldId = e.target.id;

    const cityRef = firebase.database().ref('city');
    const newBuilding = {
      buildingType: buildingType,
      fieldId: fieldId
    }
    cityRef.push(newBuilding)
    .then(() => {
      console.log('SAVED')
    })
    .catch(error => {
      console.log(error)
    });
  }

  dragOverHandler = e => {
    e.preventDefault();
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
              let index = rowIndex +''+ colIndex;
              let building = null;
              for(var i=0; i<this.state.city.length; i++) {
                  if(this.state.city[i]['fieldId'].indexOf(index)!=-1) {
                    building = this.state.city[i];
                }
              }
              return <SingleField 
                        key={index}
                        id={index}
                        dropBuilding={this.dropBuildingHandler}
                        dragOver={this.dragOverHandler}
                        building={building}
                      />;
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