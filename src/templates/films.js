import React from "react"
import Layout from "../components/layout"
import ArchivePage from "../components/Layouts/ArchivePage"
import VideoCard from "../components/Cards/Video/VideoCard.styled"

export default ({ pageContext: { allFilms } }) => (
  <Layout>
    <ArchivePage
      title="Films"
      items={
        (allFilms &&
          allFilms.map(item => {
            return (
              <VideoCard
                title={item.title}
                cast={item.cast.cast}
                link={item.link}
                video={item.video_url}
              ></VideoCard>
            )
          })) || [<VideoCard cast={[""]}></VideoCard>]
      }
    ></ArchivePage>
  </Layout>
)
