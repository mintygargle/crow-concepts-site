//import libraries
import styled from "styled-components";

// create a component
const Spacer = styled.div`
  margin: ${props => props.spacing || "1em"};
  width: fit-content;
`;

//make this component available to the app
export default Spacer;
