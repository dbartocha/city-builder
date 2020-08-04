import React, { Component } from 'react';
import Building from '../Building/Building.js';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import styles from './BuildingsMenu.module.scss';


class BuildingsMenu extends Component {
    state = {
        close: true
    }

    openMenuHandler = () => {
        console.log("here")
        this.setState({
            close: false
        })
    }

    closeMenuHandler = () => {
        this.setState({
            close: true
        })
    }

    render (){
        const close = this.state.close ? styles.Close : '';
        const menuStyles = [styles.MainMenu, close]
        return(
            <Aux>
                <button onClick={this.openMenuHandler} className={styles.OpenButton}>
                    Buildings Menu
                </button>
                <div className={menuStyles.join(' ')}>
                    <button onClick={this.closeMenuHandler} className={styles.CloseButton}>
                        Close
                    </button>
                    <div className={styles.BuildingsWrapper}>
                        <Building />
                    </div>
                </div>
            </Aux>
        )
    };
}

export default BuildingsMenu;