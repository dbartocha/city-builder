import React, { Component } from 'react';
import Building1x1 from '../Building1x1/Building1x1.js'
import styles from './MenuBuilder.module.scss';
import Building2x2 from '../Building2x2/Building2x2.js'


class MenuBuilder extends Component {
    render (){
        return(
        <div className={styles.MainMenu}>
           <p> Buildings Menu</p>
            <div className={styles.MenuBuilder}>
                
                <ul>
                    <Building1x1/>
                    <Building2x2/>
                </ul>
            </div>
        </div>
    )
    };
    
}

export default MenuBuilder;