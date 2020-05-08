import React from "react";
import PropTypes from "prop-types";

const Link = props => {
  return (
    <a href={props.to} {...props}>
      {props.children}
    </a>
  );
};

Link.propTypes = {
  to: PropTypes.string,
  state: PropTypes.symbol
};

export default Link;
