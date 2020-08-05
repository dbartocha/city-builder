import React, { Component } from 'react';
import Building from '../Building/Building.js';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import styles from './BuildingsMenu.module.scss';

class BuildingsMenu extends Component {
    state = {
        close: true
    }

    toggleMenuHandler = () => {
        this.setState({
            close: !this.state.close
        })
    }

    render (){
        const close = this.state.close ? styles.Close : '';
        const menuStyles = [styles.MainMenu, close]
        return(
            <Aux>
                <button onClick={this.toggleMenuHandler} className={styles.OpenButton}>
                    Buildings Menu
                </button>
                <div className={menuStyles.join(' ')}>
                    <button onClick={this.toggleMenuHandler} className={styles.CloseButton}>
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