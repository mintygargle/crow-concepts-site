import styled from "styled-components";
import { default as component } from "./PhotoCard";

const PhotoCard = styled(component)`
  border-color: ${props => props.theme.white};
  border-radius: 0px 0px 16px 16px;
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  height: fit-content;
  max-width: 45%;
  transition: 0.4s;
 

  @media (max-width: ${props => props.theme.tablet}) {
    max-width: 80%;
  }
  @media (max-width: 350px) {
    max-width: 100%;
  }

  @media (min-width: ${props => props.theme.desktop}) {
    &:hover {
      max-width: 50%;
      box-shadow: 10px 15px 0px 10px #00000044;
    }
  }

  .image {
    z-index: 1;
  }

  .details {
    height: 0%;
    transition 0.4s;

    p {
      height: 0px;
      opacity: 0;
      transition 0.4s;
    }
  }

  &:hover {
    .details {
      height: 100%;

      p {
        height: 32px;
        opacity: 1;
      }
    }
  }
`;

export default PhotoCard;
