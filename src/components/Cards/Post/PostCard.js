import React from "react"
import { Link } from "gatsby"
import { default as Button } from "../../Buttons/PrimaryButton.styled"
import StyledCard from "./PostCard.styled"

const PostCard = (props, { style: Style = StyledCard }) => {
  return (
    <Style {...props}>
      <img src={props.image} alt="" />
      <h1>{props.title}</h1>
      <h2>{props.author}</h2>
      <p>{props.date}</p>
      <Link to="/post" state={{ post: props.post }}>
        <Button>Read More</Button>
      </Link>
    </Style>
  )
}

export default PostCard
