import React from "react"
import Layout from "../components/layout"
import * as Text from "../components/Text/text_index"

const PostPage = ({ location }) => (
  <Layout>
    <br />
    <br />
    <article>
      <Text.H1>{location.state.post.title}</Text.H1>
      <Text.H2>{location.state.post.author}</Text.H2>
      <Text.P>{location.state.post.body}</Text.P>
    </article>
  </Layout>
)

export default PostPage
