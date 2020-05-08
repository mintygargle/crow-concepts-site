import React from "react"
import Layout from "../components/layout"
import * as Text from "../components/Text/text_index"
import FilmFetcher from "../components/FilmFetcher"

const FilmPage = ({ data }) => (
  <Layout>
    <FilmFetcher></FilmFetcher>
  </Layout>
)

export default FilmPage
