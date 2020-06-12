import React from "react"
import Layout from "../components/layout"
import GalleryPage from "../components/Layouts/GalleryPage"
import PhotoCard from "../components/Cards/Photo/PhotoCard.styled"

export default ({ pageContext: { allPhotos } }) => (
  <Layout>
    <GalleryPage
      title="Photos"
      cta="Schedule a Photo Session"
      items={
        (allPhotos &&
          allPhotos.map(item => {
            return (
              <PhotoCard
                title={item.title}
                photographer={item.photographer}
                medium={item.medium}
                image={item.image}
                className="foreground"
              ></PhotoCard>
            )
          })) || [<PhotoCard></PhotoCard>]
      }
    ></GalleryPage>
  </Layout>
)
