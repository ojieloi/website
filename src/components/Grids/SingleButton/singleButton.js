import * as React from "react";
import { useState } from "react";
import "./singleButton.css";

import { RiMoonFill, RiSunFill } from "react-icons/ri";

// markup
const SingleButton = () => {

    const [isDarkMode, setIsDarkMode] = useState("light");
    const size = 80;
    var icon = isDarkMode === "dark" ? <RiMoonFill className="sg-button-icon__dark" size={size} color="#525F77" /> : <RiSunFill className="sg-button-icon__light" size={size} color="#525F77" />

    const handleClick = (event) => {
        const currentItem = event.target;
        const marker = document.querySelector("#sg-marker");
        const buttons = document.querySelectorAll(".button-click");

        buttons.forEach(item => {
            if (item.getAttribute("id") !== currentItem.getAttribute("id") && item.classList.contains("active")) {
                item.classList.remove("active");
            } else {
                currentItem.classList.add("active");
                marker.style.left = currentItem.offsetLeft + "px";

                if (marker.style.left === "-10px") {
                    marker.style.backgroundColor = "#C7C7C7";
                    setIsDarkMode("light");
                } else if (marker.style.left === "30px") {
                    marker.style.backgroundColor = "#525F77";
                    setIsDarkMode("dark");
                }
            }
        });
    }

    return (
        <div className="sg-button-wrapper">
            <div className="sg-icon-container">
                {icon}
            </div>
            <div className="sg-button-container" onClick={handleClick} onKeyDown={handleClick} role="button" tabIndex="-1">
                <div id="sg-marker"></div>
                <div className="button-click active" id="light-mode"></div>
                <div className="button-click" id="dark-mode"></div>
            </div>
        </div>
    )
}

export default SingleButton;