import React from "react";
import { default as FooterContainer } from "../../Layouts/FlexContainer";
import { default as LinkContainer } from "../../Layouts/FlexContainer";
import { default as ExploreLinks } from "../../Layouts/FlexContainer";
import { default as SocialLinks } from "../../Layouts/FlexContainer";
import { default as CopyrightContainer } from "../../Layouts/Padder";
import Link from "../../Text/Link/Link";
import { default as FooterHeading } from "../../Text/Headings/H2.styled";
import { default as Copyright } from "../../Text/Copyright";

const Footer = props => {
  return (
    <FooterContainer
      direction="column"
      alignment="center"
      spacing="space-between"
      {...props}
    >
      <LinkContainer direction="row" alignment="center" spacing="space-around">
        <ExploreLinks direction="column">
          <FooterHeading>Quick Links</FooterHeading>
          <Link to="/booking">Booking</Link>
          <Link to="/about">About Us</Link>
          <Link to="/home">Home</Link>
          <Link to="/photos">Photos</Link>
        </ExploreLinks>
        <SocialLinks direction="column" text_align="right">
          <FooterHeading>Contact Us!</FooterHeading>
          <a href="#fb" className="active">
            Phone Number:
          </a>
          <a href="#twitter">Email:</a>
        </SocialLinks>
      </LinkContainer>
      <CopyrightContainer>
        <Copyright size="">©2020 CrowConcepts</Copyright>
      </CopyrightContainer>
    </FooterContainer>
  );
};

export default Footer;
