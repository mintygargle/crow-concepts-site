import React, { useState, useEffect } from "react"
import axios from "axios"
import PostCard from "../components/Cards/Post/PostCard"

const PostFetcher = ({ posts }) => {
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
