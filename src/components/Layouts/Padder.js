//import libraries
import styled from "styled-components";

// create a component
const Padder = styled.div`
  padding: ${props => props.padding || "1em"};
`;

//make this component available to the app
export default Padder;
