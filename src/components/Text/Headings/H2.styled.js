import styled from "styled-components";
import { default as component } from "./H2";

const H2 = styled(component)`
  font-family: ${props => props.theme.primary_font};
  font-size: ${props => props.theme.medium};
  color: ${props =>
    (props.light && props.theme.font_light) ||
    (props.dark && props.theme.font_dark)};

  font-style: ${props => props.italic && "italic"};
  font-weight: normal;
  margin-top: 0.5em;
`;

export default H2;
