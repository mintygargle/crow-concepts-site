import React from "react"
import Layout from "../components/layout"
import * as Text from "../components/Text/text_index"
import BookFetcher from "../components/BookFetcher"

const BookPage = ({ data }) => (
  <Layout>
    <BookFetcher></BookFetcher>
  </Layout>
)

export default BookPage
