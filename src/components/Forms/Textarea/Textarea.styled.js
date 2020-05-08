import styled from "styled-components";
import { default as component } from "./Textarea";

const Textarea = styled(component)`
  background-color: ${props => props.theme.white};
  border-color: #00000000;
  border-radius: ${props => props.theme.border_radius};
  border-style: solid;
  border-width: 2px;
  color: ${props => props.theme.background};
  height: 250px;
  padding: 1em;
  width: 100%;
  &:focus {
    border-color: ${props => props.theme.primary};
  }
`;

export default Textarea;
