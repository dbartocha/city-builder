import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import CityBuilder from './components/CityBuilder/CityBuilder';
import MenuBuilder from './components/MenuBuilder/MenuBuilder'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <CityBuilder/>
          <MenuBuilder/>
        </Layout>
      </div>
    );
  }
}

export default App;
