import * as React from "react";
import "./header1.css";

const Header1 = props => {
    return (
        <h1 className="website-header1" style={props.style}>{props.text}</h1>
    )
}

export default Header1;