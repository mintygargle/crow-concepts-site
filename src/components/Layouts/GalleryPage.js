import React from "react"

import * as Text from "../Text/text_index"
import { PrimaryBtn } from "../Buttons/button_index"
import * as Layout from "./layout_index"
import RedBG from "../RedBG.styled"
import { Link } from "gatsby"

const GalleryPage = props => {
  return (
    <div className="">
      <Text.Banner>{props.title}</Text.Banner>
      <RedBG className="background">
        <Layout.Gallery
          className="--center"
          items={props.items}
        ></Layout.Gallery>
      </RedBG>

      <Text.HR></Text.HR>
      <div className="--center m-1r">
        <PrimaryBtn>
          <Link to="/booking">{props.cta}</Link>
        </PrimaryBtn>
      </div>
      <Text.HR></Text.HR>
    </div>
  )
}

export default GalleryPage
