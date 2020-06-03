import React from "react"
import Layout from "../components/layout"
import * as Text from "../components/Text/text_index"
import { default as ContactForm } from "../components/Forms/ContactForm"
const ContactPage = ({ data }) => (
  <Layout>
    <Text.H1>ContactPage</Text.H1>
    <ContactForm></ContactForm>
  </Layout>
)

export default ContactPage
