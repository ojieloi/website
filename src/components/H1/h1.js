import styled from "styled-components";

const H1 = styled.h1`
    color: black;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0.5px;
    line-height: 37px;

    /* Dark Preference */
    @media (prefers-color-scheme: dark) {
        color: white;
    }
`

export default H1;