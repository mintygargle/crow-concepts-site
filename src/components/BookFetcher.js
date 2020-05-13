import React, { useState, useEffect } from "react"
import axios from "axios"

import * as Layout from "../components/Layouts/layout_index"
import * as Card from "../components/Cards/card_index"

const BookFetcher = props => {
  const [books, setBooks] = useState(null)

  const apiURL = "https://crow-concepts-backend.herokuapp.com"
  const collection = "/books"

  const fetchData = async () => {
    const response = await axios.get(apiURL + collection)

    console.log(response.data)

    setBooks(response.data)
  }

  useEffect(async () => fetchData(), [])
  return (
    <Layout.ArchivePage
      title="Books"
      items={
        (books &&
          books.map(item => {
            console.log(item.image.url)
            return (
              <Card.Book
                title={item.title}
                author={item.author}
                image={apiURL + item.image.url}
                description={item.description}
                link={item.purchase_link}
              ></Card.Book>
            )
          })) || [<Card.Book></Card.Book>]
      }
    ></Layout.ArchivePage>
  )
}

export default BookFetcher
