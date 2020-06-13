import React from "react"
import Layout from "./layout"
import * as Text from "./Text/text_index"
import { default as Posts } from "./postFetcher"

const BlogPage = ({ data }) => (
  <Layout>
    <Text.H1>BLOG PAGE</Text.H1>
    <Posts></Posts>
  </Layout>
)

export default BlogPage
