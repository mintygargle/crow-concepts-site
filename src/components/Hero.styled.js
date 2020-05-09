import styled from "styled-components"
import { default as component } from "./Hero"

const Hero = styled(component)`
  @media (max-width: 450px) {
    .cta-container {
      flex-direction: column;
      align-items: center;
      margin-top: 1rem;
    }
  }
`

export default Hero
