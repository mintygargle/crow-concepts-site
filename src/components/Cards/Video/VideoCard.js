import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"

import { H2, HR } from "../../Text/text_index"
import { FlexContainer as Container } from "../../Layouts/layout_index"
import { SecondaryBtn } from "../../Buttons/button_index"
import { toggleClass } from "../../../utils/toggleClass"

const VideoCard = props => {
  const list = useRef(null)

  useEffect(() => {}, [list])
  // https://www.youtube.com/watch?feature=share&v=ZlC8j6aZXIs&fbclid=IwAR1lKlde0GduswUNUCVFeKfnrwZdz88UMHO4fJGQLmWbsi02i9HmTYzSAbE&app=desktop

  // https://www.youtube.com/watch?feature=youtu.be&v=BEM5grlZ-k8&fbclid=IwAR3tfn0Gi2L2BGLmrB5EgHOIzRMWuQRX5fR1DxaXPnzWMWHe1wv2AVfoQfw&app=desktop

  // https://www.youtube.com/watch?v=unFMBiAkmR0&feature=youtu.be&fbclid=IwAR1rgjWWhPnn98QoCOQqFMIFVlOjd_v5T3peU_1KDykGPFf0xEIb6EHwsn0&app=desktop
  return (
    <Container {...props} className="mb-2r" direction="column">
      <H2 className="mb-0">{props.title}</H2>

      <iframe
        className="mb-1r"
        width="100%"
        height="315"
        controls
        allowfullscreen
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        src={props.video}
        title={props.title}
      >
        Your browser does not support the video tag.
      </iframe>
      <SecondaryBtn onClick={() => toggleClass(list, "flat")} className="mb-1r">
        Cast
      </SecondaryBtn>

      <ul ref={list} {...props} className="flat transition">
        {props.cast.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <HR></HR>
    </Container>
  )
}

VideoCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  cast: PropTypes.array,
  video: PropTypes.string,
}

export default VideoCard
