import styled from "styled-components";
import { default as component } from "./ArtCard";

const ArtCard = styled(component)`
  max-width: 45%;
  height: auto;
  transition: opacity 0.4s;
  transition: max-width 0.4s;

  @media (max-width: 600px) {
    max-width: 80%;
  }
  @media (max-width: 350px) {
    max-width: 100%;
  }

  @media (min-width: ${props => props.theme.desktop}) {
    &:hover {
      max-width: 50%;
    }
  }

  .image {
    z-index: 1;
  }

  .details {
    position: relative;
    top: -100px;
    transition 0.4s;
  }

  &:hover {
    .details {
      top: 0px;
    }
  }
`;

export default ArtCard;
