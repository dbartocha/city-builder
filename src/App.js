import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import CityBuilder from './components/CityBuilder/CityBuilder';
import BuildingsMenu from './components/BuildingsMenu/BuildingsMenu';
import styles from './App.module.scss';
import UndoButton from './components/UndoButton/UndoButton';
import ClearButton from './components/ClearButton/ClearButton';
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <div className={styles.MenuBoardSet}>
            <CityBuilder/>
            <BuildingsMenu/>
          </div>
          <div>
            <UndoButton/>
            <ClearButton/>
          </div>
        </Layout>
      </div>
    );
  }
}

export default App;
