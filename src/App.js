import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import CityBuilder from './components/CityBuilder/CityBuilder';


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <CityBuilder/>
        </Layout>
      </div>
    );
  }
}

export default App;
