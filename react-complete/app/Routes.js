
import React from "react";

import {
        BrowserRouter as Router, 
        //HashRouter as Router,
        Route, 
        Redirect,
        Switch,
        } from "react-router-dom";

        
import App from "./App";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./cart/components/Cart";
import NotFound from "./components/NotFound";
import ProductList from "./components/ProductList";

export default function Routes(props) {
    return (
        <Router>
            <App>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/cart'  component={Cart} />
                    <Route path='/about'  component={About} />
                    <Route path='/contact'  component={Contact} />
                    <Route path="/products" component={ProductList} />
                    <Route path='*'  component={NotFound} />
                </Switch>
            </App>
        </Router>
    )
}
