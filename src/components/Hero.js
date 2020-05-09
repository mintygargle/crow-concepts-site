import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { Title, P } from "./Text/text_index"
import { PrimaryBtn } from "./Buttons/button_index"
import { FlexContainer } from "./Layouts/layout_index"
import Background from "./Background"

const Hero = props => {
  return (
    <Background image={props.image} {...props}>
      <div className="--center v-center">
        <FlexContainer direction="column">
          <Title className="m-4r v-align-text reflection-text">
            {props.title}
          </Title>

          <FlexContainer
            direction="row"
            spacing="space-between"
            className="cta-container"
          >
            <PrimaryBtn className="m-1r foreground">{props.cta}</PrimaryBtn>
            <P className="m-1r">{props.tagline}</P>
          </FlexContainer>
        </FlexContainer>
      </div>
    </Background>
  )
}

Hero.propTypes = {
  image: PropTypes.any,
  title: PropTypes.string,
  tagline: PropTypes.string,
  cta: PropTypes.string,
}

export default Hero
