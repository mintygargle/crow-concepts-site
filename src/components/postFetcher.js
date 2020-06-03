import React, { useState, useEffect } from "react"
import axios from "axios"

const PostFetcher = () => {
  const [posts, setPosts] = useState(null)

  const apiURL = "https://crow-concepts-backend.herokuapp.com"
  const collection = "/posts"

  const fetchData = async () => {
    const response = await axios.get(apiURL + collection)

    console.log(response.data)

    setPosts(response.data)
  }

  useEffect(async () => fetchData(), [])

  if (posts && posts.length > 0) {
    return (
      <div>
        <article>
          <h1>{posts[0].title}</h1>
          <h2>{posts[0].author}</h2>
          <p>{posts[0].date}</p>
          {posts[0].body}
        </article>
      </div>
    )
  } else {
    return <div>No Posts</div>
  }
}

export default PostFetcher
