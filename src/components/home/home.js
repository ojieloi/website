import * as React from "react";
import "./home.css";

// Components
import Single from "../Grids/Single/single";
import SingleButton from "../Grids/SingleButton/singleButton";
import DoubleWide from "../Grids/DoubleWide/doubleWide";
import DoubleTall from "../Grids/DoubleTall/doubleTall";

// markup
const HomePage = () => {
    return (
        <div className="home-wrapper">
            <div className="home-container">

                <div className="box1">
                    <Single
                        image="spotify"
                        color="#6ADF8C"
                        preHeader="Now playing"
                        mainHeader="Lost Souls"
                        postHeader="Baby Keem ft. Brent Faiyaz"
                        url=""
                    />
                </div>
                <div className="box2">
                    <DoubleWide
                        image="memoji"
                        header="I'm Ik"
                        body="A UI Designer and Front End Developer from New Jersey. I’m passionate about creating user-centered experiences, with the goal of turning ideas into practical and elegant solutions."
                        url=""
                    />
                </div>
                <div className="box3">
                    <DoubleWide
                        image="github"
                        bgColor="#303A4E"
                        color="#FFF"
                        header="Github"
                        body="View some of my past developement work, projects, and others."
                        url="https://github.com/ojieloi"
                    />
                </div>
                <div className="box4">
                    <Single
                        image="salesforce"
                        color="#1FA1DE"
                        preHeader="Certification"
                        mainHeader="Salesforce"
                        postHeader="JS - Developer I"
                        url=""
                    />
                </div>
                <div className="box5">
                    <DoubleTall />
                </div>
                <div className="box6">
                    <Single
                        image="linkedin"
                        color="#1865BF"
                        headerColor="#1865BF"
                        preHeader=""
                        mainHeader="LinkedIn"
                        postHeader=""
                        url="https://www.linkedin.com/in/ikecojielo/"
                    />
                </div>
                <div className="box6">
                    <Single
                        image="behance"
                        color="#EFC756"
                        headerColor="#EFC756"
                        preHeader=""
                        mainHeader="Behance"
                        postHeader=""
                        url="https://www.behance.net/ikeojielo"
                    />
                </div>
                <div className="box7">
                    <SingleButton />
                </div>
            </div>
        </div>
    )
}

export default HomePage;