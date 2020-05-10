import styled from "styled-components"
import { default as component } from "./Footer"

const Footer = styled(component)`
  background-color: ${props => props.theme.primary};
  width: 100%;
  padding: 1em;
  margin-top: 100px;
  z-index: 2;

  h2 {
    @media (max-width: 420px) {
      font-size: ${props => props.theme.small};
    }
  }

  a,
  p,
  h1 {
    color: white;
    font-size: 16px;
  }

  a:after {
    content: "";
    display: block;
    width: 0%;
    transition: width 0.4s;
    border-bottom: 1px solid ${props => props.theme.white};
  }

  a:hover {
    color: ${props => props.theme.accent};
    &:after {
      width: 100%;
    }
  }
`

export default Footer
