const axios = require("axios")
const path = require("path")
const g_node = "gatsby_node"
const apiURL = "https://crow-concepts-backend.herokuapp.com"
const collection = "/arts"

const get = endpoint => axios.get(`${apiURL}${endpoint}`)

const getArtData = async () => {
  const response = await get(collection)

  console.log("ALL ART")
  console.log(response.data)

  return response.data
}

exports.createPages = async ({ actions: { createPage } }) => {
  const allArt = await getArtData()

  if (!allArt) {
    console.log("NO ART")
    return null
  }

  // Create a page that lists all Art
  createPage({
    path: `/arttest`,
    component: path.resolve(`./src/templates/arttest.js`),
    context: { allArt },
  })

  console.log("Pages created")
}
