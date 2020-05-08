import styled from "styled-components";
import { default as component } from "./HR";

const HR = styled(component)`
  border-top: solid ${props => (props.width ? props.width : "0.1px")};
  width: ${props => (props.length ? props.length : "100%")};
  border-color: ${props => (props.color ? props.color : props.theme.white)};
`;

export default HR;
