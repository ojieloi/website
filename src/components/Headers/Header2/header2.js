import * as React from "react";
import "./header2.css";

const Header2 = props => {
    return (
        <h2 className="website-header2" style={props.style}>{props.text}</h2>
    )
}

export default Header2;