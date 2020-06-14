import styled from "styled-components"
import { default as component } from "./SecondaryButton"

const SecondaryButton = styled(component)`
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.primary};
  border-radius: ${props => props.theme.border_radius};
  box-shadow: none;
  height: fit-content;

  a {
    color: ${props => props.theme.primary};
  }

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(85%);
  }
`

export default SecondaryButton
