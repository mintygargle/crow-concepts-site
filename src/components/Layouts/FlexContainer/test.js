import React from "react";
import PropTypes from "prop-types";

const FlexContainer = props => {
  return <div {...props}>{props.children}</div>;
};

FlexContainer.propTypes = {
  direction: PropTypes.string,
  alignment: PropTypes.string,
  text_align: PropTypes.string,
  spacing: PropTypes.string
};

export default FlexContainer;
