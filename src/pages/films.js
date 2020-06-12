import React from "react"
import Layout from "../components/layout"
import FilmFetcher from "../components/FilmFetcher"

const FilmPage = ({ data }) => (
  <Layout>
    <FilmFetcher></FilmFetcher>
  </Layout>
)

export default FilmPage
