//import libraries
import styled from "styled-components";
import { default as component } from "./RedBG";

// create a component
const RedBG = styled(component)`
  position: relative;
  height: fit-content;
  margin-bottom: 4rem;

  .bar-1 {
    background-color: ${props => props.theme.primary};
    bottom: 95.62%;
    height: 90%;
    left: 6%;
    position: absolute;
    right: -41.2%;
    top: 0.21%;
    width: 60px;
    z-index: inherit;
  }
  .bar-2 {
    background-color: rgba(128, 0, 0, 0.6);
    bottom: 90.9%;
    height: 88%;
    left: 16.02%;
    position: absolute;
    right: -43.41%;
    top: 50px;
    width: 60px;
    z-index: inherit;
  }

  .bar-3 {
    background-color: ${props => props.theme.primary};
    bottom: 83.3%;
    height: 83%;
    left: 38.09%;
    position: absolute;
    right: -63.88%;
    top: 12.53%;
    width: 60px;
    z-index: inherit;
  }
  .bar-4 {
    background-color: rgba(128, 0, 0, 0.6);
    bottom: 81.59%;
    height: 80%;
    left: 48.43%;
    position: absolute;
    right: -64.76%;
    top: 60px;
    width: 60px;
    z-index: inherit;
  }
  .bar-5 {
    background-color: ${props => props.theme.primary};
    bottom: 95.82%;
    height: 80%;
    left: 69.98%;
    position: absolute;
    right: -86.32%;
    top: 45px;
    width: 60px;
    z-index: inherit;
  }
  .bar-6 {
    background-color: rgba(128, 0, 0, 0.6);
    bottom: 93.77%;
    height: 80%;
    left: 78.44%;
    position: absolute;
    right: -94.78%;
    top: 2.05%;
    width: 60px;
    z-index: inherit;
  }
`;

//make this component available to the app
export default RedBG;
