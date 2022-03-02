import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import "./links.scss";
import {store} from "./app/store";

// Components
import Navbar from './components/Navbar';
import Dashboard from "./components/Dashboard";
import Create from './components/Create';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/create" exact component={Create} />
          <p>App</p>
        </Switch>
      </Router>
     </Provider>
    
  );
}

export default App;
