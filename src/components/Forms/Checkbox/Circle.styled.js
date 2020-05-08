import styled, { css } from "styled-components";

const hidden = css`
  opacity: 0;
`;

const Circle = styled.div`
  ${props => (props.checked ? "opacity: 1" : hidden)};
  background-color: ${props => props.theme.primary};
  width: 16px;
  height: 16px;
  border-radius: 8px;
  transition: 0.2s;
`;

export default Circle;
