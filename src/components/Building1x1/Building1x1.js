import React, { Component } from 'react';
import styles from './Building1x1.module.scss';


class Building1x1 extends Component{
    state = {
        buildingSize: {
          width: 1,
          height: 1,
        },
      }

      render() {
        return(
      <li className={styles.Building1x1}>1x1 Building</li>
        )
    }
}
export default Building1x1;