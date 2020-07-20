import React from 'react';
import Building1x1 from './Building1x1/Building1x1.js'
import styles from './MenuBuilder.module.scss';

const BuildingsMenu = () =>{
    <div className={styles.BuildingsMenu}>
   
    </div>
}

class MenuBuilder extends Component {
    state = {
        building1x1:{
            width: Building1x1.width,
            height: Building1x1.height
        }
    }
    
}

export default MenuBuilder;