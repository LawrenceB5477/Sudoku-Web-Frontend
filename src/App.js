import React from 'react';
import './App.css';
import {Switch, Route, BrowserRouter as Router, Redirect} from "react-router-dom"; 
import Contact from "./views/contact";
import Users from "./views/Users"; 
import Login from "./views/login/Login"; 
import Sudoku from "./views/sudoku/Sudoku";

function ErrorPage() {
  return <h1>404 Not Found</h1>;
}

function TestPage() {
  return <p>Authenticated</p>; 
}

//Protect routes if not authenticated 
const ProtectedRoute = ({component: Component, ...rest}) => {
  const authorized = localStorage.getItem("authorized"); 
  return <Route {...rest} render={(props) => {
    if (!authorized) {
      return <Redirect to={{pathname: "/login", state: {from: props.location}}}></Redirect>
    }
    return <Component {...props}></Component>
  }} ></Route>;
  
}

class App extends React.Component {
  render() {
    return (
    <Router>
      <Switch>
        <Route exact path="/" component=""></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/users" component={Users}></Route>
        <Route path="/login" component={Login}></Route>
        <ProtectedRoute path="/sudoku" component={Sudoku}></ProtectedRoute>
      </Switch>
    </Router>
    ); 
  }
}

export default App;
