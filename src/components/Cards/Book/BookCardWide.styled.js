import styled from "styled-components";
import { default as component } from "./BookCard";

const BookCard = styled(component)`
  max-width: 80%;
  min-width: 280px;

  border-style: solid;
  border-width: 1px;
  border-color: ${props => props.theme.white};
  border-radius: ${props => props.theme.border_radius};
  height: fit-content;
  transition: 0.4s;

  @media (max-width: ${props => props.theme.tablet}) {
    display: none;
  }
`;

export default BookCard;
