import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import * as Text from "../components/Text/text_index"
import { useEffect } from "react"

const PostPage = ({ location, history }) => {
  // const state = location.state || (typeof history === "object" && history.state)
  const [state, setState] = useState(null)

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    setState({ post: location.state.post })
  })

  if (state) {
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
  } else {
    return (
      <Layout>
        <br />
        <br />
        <h1>Loading</h1>
      </Layout>
    )
  }
}

export default PostPage
