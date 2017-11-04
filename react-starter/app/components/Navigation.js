
import React from "react";
import PropTypes from "prop-types";

import {NavLink} from "react-router-dom";

export default function Navigation(props) { 
        return (
            <div> 
               
               <NavLink to="/" 
                       exact 
                       className="button"  
                       activeClassName="success" >
                       Home
               </NavLink>

               
               <NavLink to="/about" 
                       className="button"  
                       activeClassName="success" >
                       About
               </NavLink>

               
               <NavLink to="/contact" 
                       className="button"  
                       activeClassName="success" >
                       Contact
               </NavLink>
               
               
               <NavLink to="/cart" 
                       className="button"  
                       activeClassName="success" >
                       Cart
               </NavLink>
               
               
               
            </div>
        )
} 


Navigation.defaultProps = {
    
}

Navigation.propTypes = {
    
}