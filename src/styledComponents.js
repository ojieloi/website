import { Colors } from "./colors/colors";
import styled from "styled-components";

// header text
export const HeaderText = styled.h1`
  color: ${(props) => (props.color ? props.color : Colors.darkGray)};
  font-family: "Libre Baskerville", serif;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 150%;
`;

// subheader text
export const SubheaderText = styled.h2`
  color: ${(props) => (props.color ? props.color : Colors.textGray)};
  font-family: "Libre Baskerville", serif;
  font-size: 2rem;
  font-weight: 700;
  line-height: 200%;
`;

// body text
export const BodyText = styled.p`
  color: ${(props) => (props.color ? props.color : Colors.darkGray)};
  font-family: "Inter", sans-serif;
  font-size: 1.15rem;
  font-weight: 500;
  line-height: 175%;
`;

// sub-body text
export const SubBodyText = styled.p`
  color: ${(props) => (props.color ? props.color : Colors.darkGray)};
  font-family: "Inter", sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
  line-height: 175%;
`;

// sub-body header text
export const SubBodyHeaderText = styled.p`
  color: ${(props) => (props.color ? props.color : Colors.darkGray)};
  font-family: "Inter", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 175%;
`;
