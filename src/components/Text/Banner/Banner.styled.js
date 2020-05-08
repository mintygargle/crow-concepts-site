import styled from "styled-components";
import { default as component } from "./Banner";

const Banner = styled(component)`
  background-color: ${props => props.theme.primary};
  width: 100%;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 80px;
`;

export default Banner;
