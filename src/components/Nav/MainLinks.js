import React from "react";
// import Link from "../Text/Link/Link";
import FlexContainer from "../Layouts/FlexContainer";
import { SecondaryBtn } from "../Buttons/button_index";
import { Link } from "react-router-dom";

const MainLinks = props => {
  return (
    <nav>
      <FlexContainer {...props}>
        <Link to="/">Home</Link>
        <Link to="/photos">Photography</Link>
        <Link to="/art">Art</Link>
        <Link to="/books">Books</Link>
        <Link to="/films">Films</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/booking" className="btn-link">
          <SecondaryBtn>Booking</SecondaryBtn>
        </Link>
      </FlexContainer>
    </nav>
  );
};

export default MainLinks;
