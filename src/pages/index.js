import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import PostFetcher from "../components/postFetcher"

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <PostFetcher></PostFetcher>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
