import React from "react"
import Button from "./Button"

const SecondaryButton = props => {
  return <Button secondary={"true"} {...props}></Button>
}

export default SecondaryButton
