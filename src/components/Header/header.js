import styled from "styled-components";

const Header = styled.h1`
    color: black;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 42px;

    /* Dark Preference */
    @media (prefers-color-scheme: dark) {
        color: white;
    }
`

export default Header;