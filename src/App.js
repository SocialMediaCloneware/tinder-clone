import React from 'react';
import './App.css';
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">
    {/* Header */}
    <Header />

    {/* <Router>      */}
    <Router>  
    <Switch>

    <Route path="/chat">
    <h1>I am the chat page</h1>
    </Route>

    <Route path="/">
      
      <TinderCards />

      <SwipeButtons />

    </Route>

  </Switch>






{/* Inidividual chat screen */}
</Router>
    </div>
  );
}

export default App;
