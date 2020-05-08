import React from "react";
import PropTypes from "prop-types";

import FlexContainer from "./FlexContainer";
import Spacer from "./Spacer";

const Gallery = props => {
  let side = "flex-end";

  return (
    <FlexContainer direction="column" {...props}>
      {props.items.map(item => {
        side = side === "flex-end" ? "flex-start" : "flex-end";

        return (
          <Spacer spacing="-1.5em">
            <FlexContainer
              direction="row"
              spacing={side}
              alignment={side}
              key={item}
            >
              {item}
            </FlexContainer>
          </Spacer>
        );
      })}
    </FlexContainer>
  );
};

Gallery.propTypes = {
  items: PropTypes.array
};

export default Gallery;
