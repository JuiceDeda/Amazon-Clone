import React from "react";
import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
        <Header/>
        <h1>Good Luck</h1>
        </Route>
     <Route path="/">
      <Header/>
      <Home/>
      </Route>
        </Switch>
    
   
      </div>
</Router>
  );
}
export default App;


