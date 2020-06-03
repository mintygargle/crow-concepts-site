import React, { useState, useEffect } from "react"

import * as Layout from "../components/Layouts/layout_index"
import * as Card from "../components/Cards/card_index"
import axios from "axios"

const ArtFetcher = props => {
  const [art, setArt] = useState(null)

  //   const apiURL = "http://localhost:1337"
  const apiURL = "https://crow-concepts-backend.herokuapp.com"
  const collection = "/arts"

  const fetchData = async () => {
    const response = await axios.get(apiURL + collection)

    console.log(response.data)

    setArt(response.data)
  }

  useEffect(async () => fetchData(), [])

  return (
    <Layout.GalleryPage
      {...props}
      title="Art"
      cta="Commission Art"
      items={
        (art &&
          art.map(item => {
            console.log(item.image.url)
            return (
              <Card.Art
                title={item.title}
                artist={item.artist}
                medium={item.medium}
                image={item.image}
                className="foreground"
              ></Card.Art>
            )
          })) || [<Card.Art></Card.Art>]
      }
    ></Layout.GalleryPage>
  )
}

export default ArtFetcher
