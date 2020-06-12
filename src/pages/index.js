import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Hero from "../components/Hero.styled"
import Lake from "../images/lake.jpg"
import Mountains from "../images/benjamin-voros-phIFdC6lA4E-unsplash.jpg"
import Books from "../images/janko-ferlic-sfL_QOnmy00-unsplash.jpg"
import V from "../images/jon-tyson-eIhH7RTlTZA-unsplash.jpg"
import { FlexContainer as Container } from "../components/Layouts/layout_index"
import Image from "../components/Image.styled"
import { SecondaryBtn } from "../components/Buttons/button_index"
import * as Text from "../components/Text/text_index"
import ServiceSection from "../components/Layouts/Section"

const IndexPage = ({ data }) => (
  <Layout>
    <section>
      <Hero
        image={Lake}
        title="CrowConcepts"
        cta="Book Now"
        tagline="Create your concepts"
      ></Hero>
    </section>
    <ServiceSection className="--center col foreground bg-color">
      <Text.HR />

      <Container
        direction="column"
        spacing="space-around"
        alignment="space-between"
      >
        <Container
          direction="row"
          spacing="space-evenly"
          align_items="flex-start"
          className="service-container"
        >
          <Image className="foreground" src={Mountains} width="50%"></Image>
          <Container direction="column" className="m-2r mt-0r">
            <Text.H1>Photography</Text.H1>
            <Text.P>
              We are here to capture your concept and help you create powerful
              images for you or your company.
            </Text.P>
          </Container>
        </Container>
        <br />
        <Container
          direction="row"
          spacing="space-evenly"
          align_items="flex-start"
          className="service-container"
        >
          <Container direction="column" className="m-2r mt-0r">
            <Text.H1>Art</Text.H1>
            <Text.P>
              Let us help you create your concept. From crafting custom pieces
              of artwork to helping you illustrate your story, Crow Concepts
              offers our clients a way to express themselves through art.
            </Text.P>
          </Container>
          <Image className="foreground" src={V} width="50%"></Image>
        </Container>
        <br />
        <Container
          direction="row"
          spacing="space-evenly"
          align_items="flex-start"
          className="service-container"
        >
          <Image className="foreground" src={Books} width="50%"></Image>
          <Container direction="column" className="m-2r mt-0r">
            <Text.H1>Writing</Text.H1>
            <Text.P>
              Let us help write your story. Here at Crow Concepts our writers
              give you an edge to help you get your audience drawn to your work.
            </Text.P>
          </Container>
        </Container>
      </Container>

      <Text.HR />

      <SecondaryBtn className="m-4r">
        <Link to="/photos">View Gallery</Link>
      </SecondaryBtn>
    </ServiceSection>
  </Layout>
)

export default IndexPage
