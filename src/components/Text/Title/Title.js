import React from "react";
import PropTypes from "prop-types";

const Title = props => {
  return <title {...props}>{props.children}</title>;
};

Title.propTypes = {
  size: PropTypes.string
};

export default Title;
