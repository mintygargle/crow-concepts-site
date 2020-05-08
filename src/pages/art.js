import React from "react"
import Layout from "../components/layout"
import ArtFetcher from "../components/ArtFetcher"
import * as Text from "../components/Text/text_index"

const ArtPage = ({ data }) => (
  <Layout>
    <ArtFetcher></ArtFetcher>
  </Layout>
)

export default ArtPage
