import React from "react";
import PropTypes from "prop-types";

const P = props => {
  return <p {...props}>{props.children}</p>;
};

P.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  bold: PropTypes.bool,
  italic: PropTypes.bool
};

export default P;
