import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  align-content: ${props => props.alignment};
  text-align: ${props => props.text_align};
  justify-content: ${props => props.spacing};
  align-items: ${props => props.align_items};
`;

export default FlexContainer;
