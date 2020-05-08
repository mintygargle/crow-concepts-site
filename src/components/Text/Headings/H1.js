import React from "react";
import PropTypes from "prop-types";

const H1 = props => {
  return <h1 {...props}>{props.children}</h1>;
};

H1.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string
};

export default H1;
