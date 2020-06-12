import React from "react"
import Layout from "../components/layout"
import ArchivePage from "../components/Layouts/ArchivePage"
import BookCard from "../components/Cards/Book/BookCard.styled"

export default ({ pageContext: { allBooks } }) => (
  <Layout>
    <ArchivePage
      title="Books"
      items={
        (allBooks &&
          allBooks.map(item => {
            return (
              <BookCard
                title={item.title}
                author={item.author}
                image={item.cover}
                description={item.description}
                link={item.purchase_link}
              ></BookCard>
            )
          })) || [<BookCard></BookCard>]
      }
    ></ArchivePage>
  </Layout>
)
