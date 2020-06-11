import React from "react"
import Layout from "../components/layout"
import * as Text from "../components/Text/text_index"

const PostPage = ({ location, history }) => {
  const state = location.state || (typeof history === "object" && history.state)

  return (
    <Layout>
      <br />
      <br />
      <article>
        <Text.H1>{state.post.title}</Text.H1>
        <Text.H2>{state.post.author}</Text.H2>
        <Text.P>{state.post.body}</Text.P>
      </article>
    </Layout>
  )
}

export default PostPage
