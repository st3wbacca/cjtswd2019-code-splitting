import React, { Component } from 'react';
import './App.css';

import Page1 from './components/Page1';
import Loadable from 'react-loadable';

const LoadablePage2 = Loadable({
  loader: () => import('./components/Page2'),
  loading() {
    return <div />
  },
});

const LoadablePage3 = Loadable({
  loader: () => import('./components/Page3'),
  loading() {
    return <h1>Loading Page 2...</h1>
  },
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'page1',
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render() {
    if (this.state.route === 'page1') {
      return <Page1 onRouteChange={this.onRouteChange} />
    } else if (this.state.route === 'page2') {
      return <LoadablePage2 onRouteChange={this.onRouteChange} />
    } else if (this.state.route === 'page3') {
      return <LoadablePage3 onRouteChange={this.onRouteChange} />
    }
  }
}

export default App;
