import * as React from "react";
import "./doubleWide.css";

import Memoji from "../../../images/memoji.png";
import { RiGithubFill } from "react-icons/ri";

// Components
import Link from "../../Link/link";
import Header1 from "../../Headers/Header1/header1";
import Body from "../../Body/body";

// markup
const DoubleWide = props => {

    const iconName = props.image;
    const size = 130;
    var icon = null;

    switch (iconName) {
        case "memoji":
            icon = <img src={Memoji} alt="Memoji" />;
            break;
        
        case "github":
            icon = <RiGithubFill size={size} color={props.color} />;
            break;
        
        default:
            icon = <img src={Memoji} alt="Memoji" />;
    }

    return (
        <div className="dg-w-wrapper" style={{backgroundColor: props.bgColor, color:props.color}}>
            <div className="dg-w-image-container">
                <div className="dg-w-image">{icon}</div>
            </div>
            <div className="dg-w-body-container">
                {props.header.length > 0 ? <Header1 text={props.header} /> : null}
                {props.body.length > 0 ? <Body text={props.body} style={{color: props.url, "marginTop": "20px"}} /> : null}
                {props.url.length > 0 ? <Link text="Take me there" url={props.url} /> : null}
            </div>
        </div>
    )
}

export default DoubleWide;