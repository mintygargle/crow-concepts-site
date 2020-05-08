import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import PostFetcher from "../components/postFetcher"

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Home Page</h1>
  </Layout>
)

export default IndexPage
