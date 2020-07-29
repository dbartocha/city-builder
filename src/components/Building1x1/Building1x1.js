import React, { Component } from 'react';
import styles from './Building1x1.module.scss';


class Building1x1 extends Component{
    state = {
      buildingSize: {
        width: 1,
        height: 1,
      },
    }

    onDragStartHandler = e => {
       e.dataTransfer.setData("text/html", e.target.id);
    }

      render() {
        return(
          <li id="test" draggable onDragStart={this.onDragStartHandler} data-type="A" className={styles.Building1x1}>1x1 Building</li>
        )
      }
}
export default Building1x1;