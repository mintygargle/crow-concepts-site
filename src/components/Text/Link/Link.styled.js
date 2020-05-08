import styled from "styled-components";
import { default as component } from "./Link";

const Link = styled(component)`
  font-family: ${props => props.theme.secondary_font};
  font-size: ${props => props.theme.small};
  color: ${props => props.theme.accent};
  border-bottom: solid 1px white;

  font-style: ${props => props.italic && "italic"};
  font-weight: ${props => props.bold && "bold"};

  &:hover {
    color: ${props => props.theme.accent_light};
  }

  &:visited {
    color: ${props => props.theme.accent_dark};
  }
`;

export default Link;
