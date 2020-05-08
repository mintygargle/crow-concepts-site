import React from "react";
import PropTypes from "prop-types";

const HR = props => {
  return <hr {...props}></hr>;
};

HR.propTypes = {
  length: PropTypes.string,
  width: PropTypes.string,
  color: PropTypes.string
};

export default HR;
