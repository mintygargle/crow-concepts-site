import React from "react";
import PropTypes from "prop-types";

const Textarea = props => {
  return <textarea placeholder={props.placeholder} {...props}></textarea>;
};

Textarea.propTypes = {
  placeholder: PropTypes.string
};

export default Textarea;
