import styled from "styled-components";

const TextLink = styled.a`
    color: black;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-decoration: none;
    transition: all 0.2s ease-out;

    :hover {
        opacity: 0.5;
    }

    /* Reduce Animation */
    @media (prefers-reduced-motion) {
        transition: none;
    }

    /* Dark Preference */
    @media (prefers-color-scheme: dark) {
        color: white;
    }
`

export default TextLink;