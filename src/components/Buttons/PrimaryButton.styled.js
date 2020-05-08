import styled from "styled-components";
import { default as component } from "./PrimaryButton";

const PrimaryButton = styled(component)`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.font_light};
  border-radius: ${props => props.theme.border_radius};
  box-shadow: none;
  height: fit-content;
  &:hover {
    //background-color: lighten(${props => props.theme.primary}, 20%);
    filter: brightness(120%);
  }

  &:active {
    filter: brightness(85%);
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

export default PrimaryButton;
