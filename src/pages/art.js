import React from "react"
import Layout from "../components/layout"
import ArtFetcher from "../components/ArtFetcher"

const ArtPage = ({ data }) => (
  <Layout>
    <ArtFetcher></ArtFetcher>
  </Layout>
)

export default ArtPage
