import styled from "styled-components";
import { default as component } from "./P";

const P = styled(component)`
  font-family: ${props => props.theme.secondary_font};
  font-size: ${props => props.theme.small};
  color: ${props =>
    (props.light && props.theme.font_light) ||
    (props.dark && props.theme.font_dark)};

  font-style: ${props => props.italic && "italic"};
  font-weight: ${props => props.bold && "bold"};
`;

export default P;
