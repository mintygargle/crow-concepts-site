import React from "react";
import PropTypes from "prop-types";

const H2 = props => {
  return <h2 {...props}>{props.children}</h2>;
};

H2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string
};

export default H2;
