import React, { Component } from 'react';
import styles from './Building.module.scss';
import Aux from '../../hoc/Auxiliary/Auxiliary';


class Building extends Component{
    state = {
      buildingSize: {
        width: 1,
        height: 1,
      },
    }

    onDragStartHandler = e => {
       e.dataTransfer.setData("building", e.target.id);
    }

      render() {
        let building =  <div
          id="small-bulding"
          draggable
          className={styles.Building}
          onDragStart={this.onDragStartHandler}
          data-type="A">
            1x1 Building
          </div>

          if (this.props.onBoard) {
            building =  <div
              className={styles.BuildingOnBoard}
              onDragStart={this.onDragStartHandler}
              data-type="A">
                1x1 Building
              </div>
          }

        return(
          <Aux>
            {building}
          </Aux>
        )
      }
}
export default Building;