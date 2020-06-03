import React from "react"
import Layout from "../components/layout"
import * as Text from "../components/Text/text_index"
import { default as BookingForm } from "../components/Forms/BookingForm"
const BookingPage = ({ data }) => (
  <Layout>
    <Text.H1>BookingPage</Text.H1>
    <BookingForm></BookingForm>
  </Layout>
)

export default BookingPage
