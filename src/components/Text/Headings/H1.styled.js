import styled from "styled-components";
import { default as component } from "./H1";

const H1 = styled(component)`
  font-family: ${props => props.theme.primary_font};
  font-size: ${props => props.theme.large};
  color: ${props =>
    (props.light && props.theme.font_light) ||
    (props.dark && props.theme.font_dark)};

  font-style: ${props => props.italic && "italic"};
  font-weight: normal;
`;

export default H1;
