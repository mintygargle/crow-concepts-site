import styled from "styled-components"
import { default as component } from "./Title"

const Title = styled(component)`
  font-family: ${props => props.theme.primary_font};
  font-size: ${props => props.theme.x_large};
  color: ${props => props.theme.font_light};

  @media (max-width: 360px) {
    font-size: ${props => props.theme.large};
  }
`

export default Title
