import * as React from "react";
import "./home.css";

// Assets
import Resume from "../../docs/Resume.pdf";
import Profile from "../../images/memoji.png";

// Components
import H1 from "../H1/h1";
import Description from "../Description/description";
import TextLink from "../TextLink/textLink";
import Header from "../Header/header";


// markup
const HomePage = () => {
    return (
        <div className="container">

            <nav className="nav">
                <div className="nav-navbar">
                    <H1>IK.</H1>
                    <TextLink href={Resume} target="_blank" rel="noreferrer">Resume</TextLink>
                </div>
            </nav>

            {/*  */}

            <div className="hero">
                <div className="hero-image">
                    <img src={Profile} alt="Profile" />
                </div>

                <div className="hero-description">
                    <Description>Ik Ojielo is a <b>Front End Developer</b> and <b>UI/UX Designer</b>, who is passionate about creating user-centered, beautiful digital experiences, with the goal of turning ideas into practical and elegant solutions. He currently works at <TextLink href="https://www.shift7digital.com" target="_blank" rel="noreferrer">Shift7 Digital</TextLink> as a Front End Developer, and previously worked at <TextLink href="https://heali.ai" target="_blank" rel="noreferrer">Heali AI</TextLink> as a UI/UX Designer, and <TextLink href="https://www.zensoft.io" target="_blank" rel="noreferrer">Zensoft IO</TextLink> as a Back End Developer.</Description>
                </div>

                <div className="hero-links">
                    <TextLink href="mailto:ojieloi@gmail.com" target="_blank" rel="noreferrer">Email</TextLink>
                    <TextLink href="https://www.linkedin.com/in/ikecojielo/" target="_blank" rel="noreferrer">LinkedIn</TextLink>
                    <TextLink href="https://github.com/ojieloi" target="_blank" rel="noreferrer">GitHub</TextLink>
                    <TextLink href="https://www.behance.net/ikeojielo" target="_blank" rel="noreferrer">Behance</TextLink>
                </div>
            </div>

            {/*  */}

            <div className="exp">
                <div className="exp-header">
                    <Header>Experience</Header>
                    <Description>Learn more about what I've been up to</Description>
                </div>

                <div className="exp-list">
                    <ul>
                        <li>
                            <div className="exp-list-item">
                                <H1>Shift7 Digital</H1>
                                <H1 style={{ color: 'rgb(198, 127, 69)' }}>Front End Developer</H1>
                                <Description style={{ color: '#878787', fontStyle: 'italic', fontWeight: 500 }}>Jun 2021 - Present</Description>
                            </div>
                        </li>
                        <li>
                            <div className="exp-list-item">
                                <H1>Heali AI</H1>
                                <H1 style={{ color: 'rgb(198, 127, 69)' }}>UI/UX Designer</H1>
                                <Description style={{ color: '#878787', fontStyle: 'italic', fontWeight: 500 }}>Nov 2020 - Jun 2021</Description>
                                <Description>Developed UI mockups and prototypes for new ideas that clearly illustrated how app will look and function. Gathered and evaluated user requirements in collaboration with product managers and UX researchers. Delivered UI specifications, wireframes, and prototypes across product design and engineering teams.</Description>
                            </div>
                        </li>
                        <li>
                            <div className="exp-list-item">
                                <H1>Planet Classroom</H1>
                                <H1 style={{ color: 'rgb(198, 127, 69)' }}>Web Development & Management Intern</H1>
                                <Description style={{ color: '#878787', fontStyle: 'italic', fontWeight: 500 }}>Sep 2020 - Nov 2020</Description>
                                <Description>Designed new features and interfaces using Figma. Wrote new, and modified existing code using HTML and CSS. Introduced new plugins and extensions to make website more usable and interactive.
                                </Description>
                            </div>
                        </li>
                        <li>
                            <div className="exp-list-item">
                                <H1>Zensoft IO</H1>
                                <H1 style={{ color: 'rgb(198, 127, 69)' }}>Back End Developer Intern</H1>
                                <Description style={{ color: '#878787', fontStyle: 'italic', fontWeight: 500 }}>Jun 2019 - Jul 2019</Description>
                                <Description>Built APIs for content management workflow. Collaborated with Front End Developers to develop server-side solutions. Developed services to retrieve and send user data to PostgreSQL databases.</Description>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/*  */}


        </div>
    )
}

export default HomePage