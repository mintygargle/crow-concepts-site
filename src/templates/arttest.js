import React from "react"
import Layout from "../components/layout"

export default ({ pageContext: { allArt } }) => (
  <Layout>
    <div style={{ width: 960, margin: "4rem auto" }}>
      <h1>Artwork</h1>
      <ul style={{ padding: 0 }}>
        {allArt.map(art => (
          <li
            key={art.id}
            style={{
              textAlign: "center",
              listStyle: "none",
              display: "inline-block",
            }}
          >
            <img src={art.image} alt={art.title} />
            <p>{art.title}</p>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)
