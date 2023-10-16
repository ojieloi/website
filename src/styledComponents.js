import { Colors } from "./colors/colors";
import styled from "styled-components";

// header text
export const HeaderText = styled.h1`
  font-size: 20px;
  color: ${Colors.black};
  font-weight: 900;
`;

// subheader text
export const SubheaderText = styled.h2`
  font-size: 16px;
  color: ${Colors.black};
  font-weight: 900;
`;

// body text
export const BodyText = styled.p`
  font-size: 14px;
  color: ${Colors.gray};
  font-weight: 700;
  line-height: 24px;
`;
