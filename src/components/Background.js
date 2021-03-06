import styled from "styled-components"

const Background = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url(${props => props.image}) no-repeat center center scroll;
  background-size: cover;
  background-repeat: no-repeat;
`

export default Background
