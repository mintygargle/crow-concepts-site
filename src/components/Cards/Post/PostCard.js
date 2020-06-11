import React from "react"
import { Link } from "gatsby"
import { default as Button } from "../../Buttons/PrimaryButton.styled"
import StyledCard from "./PostCard.styled"

const PostCard = (
  props,
  { style: Style = StyledCard, post, image, title, author, date }
) => {
  return (
    <Style {...props}>
      <img src={image} alt="" />
      <h1>{title}</h1>
      <h2>{author}</h2>
      <p>{date}</p>
      <Link to="/post" state={{ post: post }}>
        <Button>Read More</Button>
      </Link>
    </Style>
  )
}

export default PostCard
