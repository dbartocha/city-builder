import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import CityBuilder from './components/CityBuilder/CityBuilder';
import BuildingsMenu from './components/BuildingsMenu/BuildingsMenu';
import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <div className={styles.MenuBoardSet}>
            <CityBuilder/>
            <BuildingsMenu/>
          </div>
        </Layout>
      </div>
    );
  }
}

export default App;
