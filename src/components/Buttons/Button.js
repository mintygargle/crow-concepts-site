import React from "react"
import PropTypes from "prop-types"

const Button = props => {
  return (
    <button type="button" {...props}>
      {props.children}
    </button>
  )
}

Button.propTypes = {
  size: PropTypes.string,
}

export default Button
