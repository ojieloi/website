import * as React from "react";
import { useState } from "react";
import "./singleButton.css";
import Header2 from "../../Headers/Header2/header2";

import { RiMoonFill, RiSunFill } from "react-icons/ri";

// markup
const SingleButton = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", res => {
        if (res.matches === true) {
            setIsDarkMode(true);
        } else {
            setIsDarkMode(false);
        }
    });

    const size = 80;
    var icon = isDarkMode === true ? <RiMoonFill className="sg-button-icon__dark" size={size} color="#525F77" /> : <RiSunFill className="sg-button-icon__light" size={size} color="#525F77" />;
    var text = isDarkMode === true ? "Dark Mode" : "Light Mode";

    return (
        <div className="sg-button-wrapper">
            {icon}
            <Header2 text={text} style={{"marginTop": "34px"}} />
        </div>
    )
}

export default SingleButton;