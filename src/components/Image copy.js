import React from "react";
import PropTypes from "prop-types";

const Image = props => {
  return <img src={props.src} alt={props.alt} {...props}></img>;
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};

export default Image;
