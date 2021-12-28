import * as React from "react";
import "./link.css";
import { FaChevronRight } from "react-icons/fa";

// Link Component
const Link = props => {
    return (
        <a className="website-link" href={props.url} target="_blank" rel="noreferrer">
            {props.text}
            <FaChevronRight className="website-link__icon-right" />
        </a>
    )
}

export default Link;