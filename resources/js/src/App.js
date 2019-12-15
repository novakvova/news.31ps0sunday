import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Header from './Header'

import NavHeader from "./components/HomeLayout/NavHeader";
import Home from "./components/Home";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

class App extends Component {
    state = {
        email: "",
        password: ""
    };

    render() {
        console.log("Hello", this.state);
        return (
            <BrowserRouter>
                <NavHeader />

                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/login">
                    <Login />
                </Route>

                <Route exact path="/register">
                    <Register />
                </Route>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
