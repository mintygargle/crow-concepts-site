import styled from "styled-components"
import React from "react"

import { default as component } from "./Box"
import { default as Check } from "./Checkbox"
import { default as BoxCircle } from "./Circle.styled"

const BoxBG = styled(component)`
  background-color: ${props => props.theme.font_light};
  border-radius: 8px;
  width: 32px;
  height: 32px;
  transition: background-color 0.3s;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const StyledBox = props => {
  return (
    <BoxBG {...props}>
      <BoxCircle {...props}></BoxCircle>
    </BoxBG>
  )
}

const Checkbox = props => {
  return <Check Style={StyledBox}></Check>
}

export default Checkbox
