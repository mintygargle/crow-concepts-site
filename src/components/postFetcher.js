import React, { useState, useEffect } from "react"
import axios from "axios"
import { default as Button } from "./Buttons/PrimaryButton.styled"
import { Link } from "gatsby"
import PostCard from "../components/Cards/Post/PostCard"

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
    console.log(posts)
    return (
      <div className="grid grid--col-3">
        {posts.map(post => (
          <div className="margin grid__item" key={post.title}>
            <div className="">
              <PostCard
                post={post}
                image={post.cover}
                title={post.title}
                author={post.author}
                date={post.date}
              ></PostCard>
            </div>
          </div>
        ))}
      </div>
    )
  } else {
    return <div>No Posts</div>
  }
}

export default PostFetcher
