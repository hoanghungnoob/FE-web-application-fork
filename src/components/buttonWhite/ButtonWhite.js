import React from "react";
import './ButtonWhite.css'

function ButtonWhite(props){
    return(
        <button className="white-button">
            {props.children}
        </button>
    )
}

export default ButtonWhite;