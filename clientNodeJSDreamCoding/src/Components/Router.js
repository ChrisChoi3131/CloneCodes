import React from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from "../Routes/Home"
import Login from "../Routes/Login"
import Header from "./Header";


export default () =>(
  <Router>
    <Header />
    <Route path="/" exact component ={Home} />
    <Route path="/Login" exact component ={Login} />
  </Router>
);