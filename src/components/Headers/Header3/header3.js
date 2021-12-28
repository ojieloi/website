import * as React from "react";
import "./header3.css";

const Header3 = props => {
    return (
        <h3 className="website-header3" style={props.style}>{props.text}</h3>
    )
}

export default Header3;