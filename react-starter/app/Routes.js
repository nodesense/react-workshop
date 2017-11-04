
import React from "react";

import {
        BrowserRouter as Router, 
        //HashRouter as Router,
        Route, 
        Switch,
        } from "react-router-dom";

        
import App from "./App";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./cart/components/Cart";

 
export default function Routes(props) {
    return (
        <Router>
            <App>
                <Route path='' component={Home} />
                
            </App>
        </Router>
    )
}
