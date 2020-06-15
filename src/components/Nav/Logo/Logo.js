import React from "react"
import StyledLogo from "./Logo.styled"

const Logo = (props, { style: Style = StyledLogo }) => {
  return (
    <Style>
      <img {...props} />
    </Style>
  )
}

export default Logo
