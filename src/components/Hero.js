import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { window, document } from "global"

import { Title, P } from "./Text/text_index"
import { PrimaryBtn } from "./Buttons/button_index"
import { FlexContainer } from "./Layouts/layout_index"
import Background from "./Background"

function getDocHeight() {
  var D = document
  return Math.max(
    D.body.scrollHeight,
    D.documentElement.scrollHeight,
    D.body.offsetHeight,
    D.documentElement.offsetHeight,
    D.body.clientHeight,
    D.documentElement.clientHeight
  )
}
function getDocWidth() {
  var D = document
  return Math.max(D.body.clientWidth, D.documentElement.clientWidth)
}

function scrollHandler(event) {
  var winheight = window.innerHeight
  var docheight = getDocHeight()
  var docwidth = getDocWidth()
  var scrollTop = window.pageYOffset
  var trackLength = docheight - winheight
  var pctScrolled = Math.floor((scrollTop / trackLength) * 100)

  var reflection = document.getElementsByClassName("reflection-text")[0]

  if (reflection !== undefined && docwidth > 450) {
    reflection.style.opacity = 1 / pctScrolled
  }
}

function addListeners() {
  window.addEventListener("scroll", scrollHandler)
}

const Hero = props => {
  useEffect(() => {
    addListeners()
  }, [])

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
