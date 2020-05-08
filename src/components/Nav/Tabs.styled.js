import styled from "styled-components";
import { default as component } from "./TabBar";

const Tabs = styled(component)`
  .tab {
    overflow: hidden;

    background-color: #00000000;
  }

  .tab button {
    font-family: ${props => props.theme.secondary_font};
    background-color: ${props => props.theme.white};
    color: ${props => props.theme.primary};
    box-shadow: none;
    float: left;
    border: none;
    border-radius: 0px;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
    font-size: 17px;
  }

  .tab button:hover {
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.white};
  }

  .tab button.active {
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.white};
  }

  .tabcontent {
    display: none;
    padding: 6px 12px;
    border-top: none;
  }
`;

export default Tabs;
