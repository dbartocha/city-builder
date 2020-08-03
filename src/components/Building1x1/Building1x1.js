import React, { Component } from 'react';
import styles from './Building1x1.module.scss';
import Aux from '../../hoc/Auxiliary/Auxiliary';


class Building1x1 extends Component{
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
        let building =  <li 
          id="small-bulding"
          draggable
          className={styles.Building1x1}
          onDragStart={this.onDragStartHandler}
          data-type="A">
            1x1 Building
          </li>

          if (this.props.onBoard) {
            building =  <li
              className={styles.BuildingOnBoard}
              onDragStart={this.onDragStartHandler}
              data-type="A">
                1x1 Building
              </li>
          }

        return(
          <Aux>
            {building}
          </Aux>
        )
      }
}
export default Building1x1;