
import React, {Component} from "react";
import PropTypes from "prop-types";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./cart/components/Cart"; 

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }
    
    render() {
        return (
            <div> 
            
            <Header></Header>

            <Home> </Home>
            <Contact> </Contact>
            <About> </About>
            <Cart> </Cart>

            <Footer> </Footer>

            </div>
        )
    }
} 


App.defaultProps = {
    
}

App.propTypes = {
    
}