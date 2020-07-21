import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import CityBuilder from './components/CityBuilder/CityBuilder';
import MenuBuilder from './components/MenuBuilder/MenuBuilder';
import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <div className={styles.MenuBoardSet}>
            <CityBuilder/>
            <MenuBuilder/>
          </div>
        </Layout>
      </div>
    );
  }
}

export default App;
