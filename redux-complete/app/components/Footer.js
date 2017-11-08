/*
  Learn about properties, default props
*/

import React from "react";
import PropTypes from "prop-types";

import "./footer.css";

export default function Footer(props) { 
        return (
            <div className="highlight"> 
            <hr />
                Copyrights@2017, React App
            </div>
        )
} 


Footer.defaultProps = {
    
}

Footer.propTypes = {
    
}