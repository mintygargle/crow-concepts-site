import React from "react";
import PropTypes from "prop-types";

import { P, HR } from "../../Text/text_index";
import Image from "../../Image.styled";
import {
  FlexContainer as Container,
  FlexContainer as Details
} from "../../Layouts/layout_index";

const ArtCard = props => {
  return (
    <Container direction="column" {...props}>
      <Image className="image" border src={props.image} alt="" />
      <Details direction="column" className="details">
        <P>{"Title:\t" + props.title}</P>
        <P> {"Artist:\t" + props.artist}</P>
        <P> {"Medium:\t" + props.medium}</P>
        <HR></HR>
      </Details>
    </Container>
  );
};

ArtCard.propTypes = {
  title: PropTypes.string,
  artist: PropTypes.string,
  medium: PropTypes.string,
  image: PropTypes.string
};

export default ArtCard;
