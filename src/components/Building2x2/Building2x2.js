import React, { Component } from 'react';
import styles from './Building2x2.module.scss';



class Building1x1 extends Component{
    state = {
        buildingSize: {
          width: 2,
          height: 2,
        },
      }

      render() {
      
        return(
            <li className={styles.Building1x1}>2x2 Building</li>
        )
      }
}
export default Building1x1;