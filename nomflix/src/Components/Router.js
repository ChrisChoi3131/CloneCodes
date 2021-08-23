import React from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from "../Routes/Home"
import Detail from "../Routes/Detail"
import Search from "../Routes/Search"
import TV from "../Routes/TV"
import Header from "./Header";


export default () =>(
  <Router>
    <Header />
    <Route path="/" exact component ={Home} />
    <Route path="/search" exact component ={Search} />
    <Route path="/tv" exact component ={TV} />
    <Route path="/tv/popular" render={()=> <h1>popular</h1>} />
  </Router>
);