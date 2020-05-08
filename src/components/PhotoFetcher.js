import React, { useState, useEffect } from "react"

import * as Layout from "../components/Layouts/layout_index"
import * as Card from "../components/Cards/card_index"
import axios from "axios"

const PhotoFetcher = props => {
  const [photos, setPhotos] = useState(null)

  //   const apiURL = "http://localhost:1337"
  const apiURL = "https://crow-concepts-admin.herokuapp.com"
  const collection = "/photos"

  const fetchData = async () => {
    const response = await axios.get(apiURL + collection)

    console.log(response.data)

    setPhotos(response.data)
  }

  useEffect(async () => fetchData(), [])

  return (
    <Layout.GalleryPage
      {...props}
      title="Photos"
      cta="Schedule Photo Session"
      items={
        (photos &&
          photos.map(item => {
            console.log(item.image.url)
            return (
              <Card.Photo
                title={item.title}
                photographer={item.photographer}
                medium={item.medium}
                image={apiURL + item.image.url}
                className="foreground"
              ></Card.Photo>
            )
          })) || [<Card.Photo></Card.Photo>]
      }
    ></Layout.GalleryPage>
  )
}

export default PhotoFetcher
