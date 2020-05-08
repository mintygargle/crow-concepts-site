import styled, { css } from "styled-components";
import { default as component } from "./Image";

const border = css`
  border-style: solid;
  border-color: ${props => props.theme.white};
  border-width: ${props => props.theme.border_width};
`;

const Image = styled(component)`
  ${props => (props.border ? border : "")};
  ${props => (props.width ? "max-width: " + props.width : "")};
  height: auto;

  @media (max-width: 500px) {
    max-width: 100%;
  }
`;

export default Image;
