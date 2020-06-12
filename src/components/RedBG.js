import React from "react"

const RedBG = props => {
  return (
    <div {...props}>
      <div className="bar-1"></div>
      <div className="bar-2"></div>
      <div className="bar-3"></div>
      <div className="bar-4"></div>
      <div className="bar-5"></div>
      <div className="bar-6"></div>
      {props.children}
    </div>
  )
}

export default RedBG
