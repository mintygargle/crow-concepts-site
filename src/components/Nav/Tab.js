import React from "react";
import PropTypes from "prop-types";

const Tab = props => {
  return (
    <div className="tab" {...props}>
      <button className="tab_button">{props.text}</button>

      <div className="tabcontent" id={props.content_id}>
        {/* {props.content} */}
      </div>
    </div>
  );
};

Tab.propTypes = {
  text: PropTypes.string,
  selected: PropTypes.bool,
  content: PropTypes.string
};

export default Tab;
