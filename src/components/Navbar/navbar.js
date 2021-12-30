import * as React from "react";
import "./navbar.css";

// Pages
import HomePage from "../Home/home";

// markup
const Navbar = () => {

    const handleClick = (event) => {
        const currentItem = event.target;
        const marker = document.querySelector("#marker");
        const navItems = document.querySelectorAll(".navbar-element");

        navItems.forEach(item => {
            if (item.getAttribute("id") !== currentItem.getAttribute("id") && item.classList.contains("active")) {
                item.classList.remove("active");
            } else {
                currentItem.classList.add("active");
                marker.style.left = currentItem.offsetLeft + "px";
			    marker.style.width = currentItem.offsetWidth + "px";
			    marker.style.height = currentItem.offsetHeight + "px";
            }
        });
    }

    return (
        <nav className="navbar-wrapper">
            <div className="navbar-container" onClick={handleClick} onKeyDown={handleClick} role="menuitem" tabIndex="-1">
                <div id="marker"></div>
                <a href={HomePage} className="navbar-element active" id="home" tabIndex="0">Home</a>
                <a href={HomePage} className="navbar-element" id="about" tabIndex="0">About</a>
                <a href={HomePage} className="navbar-element" id="exp" tabIndex="0">Experience</a>
            </div>
        </nav>
    )
}

export default Navbar;