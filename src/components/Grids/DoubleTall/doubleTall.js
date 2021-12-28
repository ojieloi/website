import * as React from "react";
import "./doubleTall.css";

// Components
import Link from "../../Link/link";
import Header3 from "../../Headers/Header3/header3";
import Body from "../../Body/body";

// markup
const DoubleTall = () => {

    const current = new Date();
    const joined = new Date(2021, 5, 21);

    var duration = Math.ceil((current - joined) / 1000 / 60 / 60 / 24 / 30);
    var after;

    if (current.getDate() <= joined.getDate()) {
        duration -= 1;
    }

    if (duration === 1) {
        after = "month ago";
    } else if (duration > 12) {
        duration = current.getFullYear() - joined.getFullYear();
        after = "year ago";
    } else {
        after = "months ago";
    }

    return (
        <div className="dt-wrapper">
            <div className="dt-container">
                <div className="dt-one">
                    <Header3 text="Currently at" />
                    <h2 className="website-header2">Shift<span>7</span> Digital</h2>
                    <Body text="Front End Developer" style={{"marginTop": "10px"}} />
                </div>

                <div className="dt-two">
                    <Header3 text="Joined" style={{"marginBottom": "5px"}} />
                    <h2 className="website-header2"><span>{duration}</span> {after}</h2>
                </div>

                <div className="dt-three">
                    <Link text="Visit site" url="https://www.shift7digital.com/" />
                </div>
            </div>
        </div>
    )
}

export default DoubleTall;