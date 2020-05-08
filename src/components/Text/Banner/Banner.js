import React from "react";
import { Title } from "../text_index";

const Banner = props => {
  return (
    <div {...props}>
      <Title>{props.children}</Title>
    </div>
  );
};

export default Banner;
