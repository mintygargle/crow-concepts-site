import React from "react"
import Layout from "../components/layout"
import * as Text from "../components/Text/text_index"
import { default as Posts } from "../components/postFetcher"
const BlogPage = ({ data }) => (
  <Layout>
    <Text.H1>BLOG PAGE</Text.H1>
    <Posts></Posts>
  </Layout>
)

export default BlogPage
