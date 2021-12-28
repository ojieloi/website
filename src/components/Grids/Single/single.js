import * as React from "react";
import "./single.css";

import { RiLinkedinFill, RiCloudFill, RiBehanceFill, RiSpotifyFill } from "react-icons/ri";

// Components
import Link from "../../Link/link";
import Header2 from "../../Headers/Header2/header2";
import Header3 from "../../Headers/Header3/header3";
import Body from "../../Body/body";

// markup
const Single = props => {

    const iconName = props.image;
    const size = 40;
    var icon = null;

    switch (iconName) {
        case "spotify":
            icon = <RiSpotifyFill size="45" color="white" />;
            break;

        case "linkedin":
            icon = <RiLinkedinFill size="35" color="white" />;
            break;

        case "salesforce":
            icon = <RiCloudFill size={size} color="white" />;
            break;

        case "behance":
            icon = <RiBehanceFill size="35" color="white" />;
            break;

        default:
            icon = null;
    }

    return (
        <div className="sg-wrapper">
            <div className="sg-image-container">
                <div className="image" style={{backgroundColor: props.color}}>{icon}</div>
            </div>
            <div className="sg-body-container">
                {props.preHeader.length > 0 ? <Header3 text={props.preHeader} style={{color: props.color}} /> : null}
                {props.mainHeader.length > 0 ? <Header2 text={props.mainHeader} /> : null}
                {props.postHeader.length > 0 ? <Body text={props.postHeader} style={{"marginTop": "5px"}} /> : null}
                {props.url.length > 0 ? <Link text="Visit site" url={props.url} /> : null}
            </div>
        </div>
    )
}

export default Single;