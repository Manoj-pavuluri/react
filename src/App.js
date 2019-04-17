import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './home.js';
import { Switch, Route } from 'react-router-dom';
import Dashbord from './dashbord';
import Login from './login';
import componentA from './component/componentA';
import ComponetD from './component/componetD';
import Practice from './practice';


class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashbord" component={Dashbord} />
        <Route path="/login" component={Login} />
        <Route path="/component" component={componentA} />
        <Route path="/componentD" component={ComponetD} />
        <Route path="/practice" component={Practice} />
      </Switch>
    )

  }
}

export default App;
