import React from "react";
import PropTypes from "prop-types";

const Textbox = props => {
  return (
    <input
      placeholder={props.placeholder}
      name={props.name}
      ref={props.ref}
      {...props}
    ></input>
  );
};

Textbox.propTypes = {
  placeholder: PropTypes.string
};

export default Textbox;
