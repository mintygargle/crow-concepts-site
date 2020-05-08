import React from "react";
import PropTypes from "prop-types";

const List = props => {
  return (
    <ul {...props}>
      {props.items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.array
};

export default List;
