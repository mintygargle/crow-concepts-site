import styled from "styled-components";
import { default as component } from "./BGText";

const BGText = styled(component)`
  color: gray;
  font-family: ${props => props.theme.primary};
  font-size: ${props => props.theme.x_large};
  opacity: 0.8;
`;

export default BGText;
