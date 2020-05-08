import React, { useState, useEffect } from "react"

import * as Card from "../components/Cards/card_index"
import * as Layout from "../components/Layouts/layout_index"
import axios from "axios"

const FilmFetcher = props => {
  const [films, setFilms] = useState(null)

  const apiURL = "https://crow-concepts-admin.herokuapp.com"
  const collection = "/films"

  const fetchData = async () => {
    const response = await axios.get(apiURL + collection)

    console.log(response.data)

    setFilms(response.data)
  }

  useEffect(async () => fetchData(), [])

  return (
    <Layout.ArchivePage
      title="Films"
      items={
        (films &&
          films.map(item => {
            console.log(item.video_link)
            return (
              <Card.Video
                title={item.title}
                cast={item.cast.cast}
                link={item.link}
                video={item.video_link}
              ></Card.Video>
            )
          })) || [<Card.Video cast={[""]}></Card.Video>]
      }
    ></Layout.ArchivePage>
  )
}

export default FilmFetcher
