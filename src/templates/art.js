import React from "react"
import Layout from "../components/layout"
import GalleryPage from "../components/Layouts/GalleryPage"
import ArtCard from "../components/Cards/Art/ArtCard.styled"

export default ({ pageContext: { allArt } }) => (
  <Layout>
    <GalleryPage
      title="Art"
      cta="Commission Art"
      items={
        (allArt &&
          allArt.map(item => {
            return (
              <ArtCard
                title={item.title}
                artist={item.artist}
                medium={item.medium}
                image={item.image}
                className="foreground"
              ></ArtCard>
            )
          })) || [<ArtCard></ArtCard>]
      }
    ></GalleryPage>
  </Layout>
)
