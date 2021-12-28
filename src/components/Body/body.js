import * as React from "react";
import "./body.css";

const Body = props => {
    return (
        <p className="website-body" style={props.style}>{props.text}</p>
    )
}

export default Body;