import styled from "styled-components";
import { default as component } from "./P/P";

const Copyright = styled(component)`
  font-family: ${props => props.theme.secondary_font};
  font-size: 14px;
  color: ${props =>
    (props.light && props.theme.font_light) ||
    (props.dark && props.theme.font_dark)};

  font-style: ${props => props.italic && "italic"};
  font-weight: ${props => props.bold && "bold"};
`;

export default Copyright;
