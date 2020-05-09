import React from "react"
import Layout from "../components/layout"
import * as Text from "../components/Text/text_index"
import { List } from "../components/Layouts/layout_index"
import Tabs from "../components/Nav/Tabs.styled"

const About = () => {
  return (
    <Layout>
      <Text.Banner>About</Text.Banner>
      <Tabs></Tabs>
      {/* <article>
        <section>
          <Text.H1>What We Do</Text.H1>
          <Text.P>
            Crow Concepts offers a variety of services ranging from art,
            writing, and photography commissions. We make sure to give our best
            efforts into creating your concepts for you. Whether you’re an
            individual looking to have a custom piece of art made, a business
            looking for a photographer who can do a company photoshoot, or
            writing pieces for your blog or website we offer our resources to
            make sure your message is conveyed.{" "}
          </Text.P>
        </section>
        <Text.HR color="#800011" width="1px"></Text.HR>
        <section>
          <Text.H1>Services</Text.H1>
          <Layout.FlexContainer direction="column" spacing="space-around">
            <Text.H2>Art</Text.H2>
            <List
              items={[
                "Custom Art Designs for individual customers ",
                "Logo Design for company brand development",
                "Commission art for independent story books"
              ]}
            ></List>

            <Text.H2>Photography</Text.H2>
            <List
              items={[
                "Commissioned photography for social gatherings (Weddings, Parties, Mixers.)",
                "Brand Development Photography for company photoshoots",
                "Short Film Making, Directing, and Film Consultation",
                "Personal Photoshoots"
              ]}
            ></List>

            <Text.H2>Writing</Text.H2>
            <List
              items={[
                "On-page and Off-Page SEO services",
                "Commission Blog posts for your company's websites",
                "Editing services for experienced or novice writers",
                "Content Consulting",
                "Writing/Literary assistance"
              ]}
            ></List>
          </Layout.FlexContainer>
        </section>
      </article> */}
    </Layout>
  )
}

export default About
