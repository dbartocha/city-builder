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
      <li className={styles.Building1x1}></li>
    }
}
export default Building1x1;