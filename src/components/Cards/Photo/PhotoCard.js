import React from "react"
import PropTypes from "prop-types"

import { P, HR } from "../../Text/text_index"
import Image from "../../Image.styled"
import {
  FlexContainer as Container,
  FlexContainer as Details,
  Padder,
} from "../../Layouts/layout_index"

const PhotoCard = props => {
  return (
    <Container {...props} direction="column">
      <Image className="image" border src={props.image} alt=""></Image>

      <Details className="details" direction="column">
        <P>{"Title:\t" + props.title}</P>
        <P>{"Photographer:\t" + props.photographer}</P>
        <HR></HR>
      </Details>
    </Container>
  )
}

PhotoCard.propTypes = {
  photographer: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
}

export default PhotoCard
