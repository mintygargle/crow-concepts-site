import styled from "styled-components";
import { default as component } from "./Textbox";

const Textbox = styled(component)`
  background-color: ${props => props.theme.white};
  border-color: #00000000;
  border-radius: ${props => props.theme.border_radius};
  border-style: solid;
  border-width: 2px;
  color: ${props => props.theme.background};
  padding: 1em;
  transition: border-color 0.6s;
  width: 100%;

  &:focus {
    border-color: ${props => props.theme.primary};
  }
`;

export default Textbox;
