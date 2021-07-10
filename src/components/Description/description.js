import styled from "styled-components";

const Description = styled.p`
    color: black;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.5px;
    line-height: 37px;

    /* Dark Preference */
    @media (prefers-color-scheme: dark) {
        color: white;
    }
`

export default Description;