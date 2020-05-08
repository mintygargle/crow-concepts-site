import React from "react"
import Layout from "../components/layout"
import * as Text from "../components/Text/text_index"
import PhotoFetcher from "../components/PhotoFetcher"

const PhotosPage = ({ data }) => (
  <Layout>
    <PhotoFetcher></PhotoFetcher>
  </Layout>
)

export default PhotosPage
