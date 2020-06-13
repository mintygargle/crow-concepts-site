const axios = require("axios")
const path = require("path")
const g_node = "gatsby_node"
const apiURL = "https://crow-concepts-backend.herokuapp.com"
const art = "/arts"
const films = "/videos"
const photos = "/photos"
const books = "/books"
const posts = "/posts"

const collections = [art, films, photos, books, posts]

const get = endpoint => axios.get(`${apiURL}${endpoint}`)

const getContentData = async collection => {
  const response = await get(collection)

  console.log(collection)
  console.log(response.data)

  return response.data
}

exports.createPages = async ({ actions: { createPage } }) => {
  const allArt = await getContentData(art)
  const allPhotos = await getContentData(photos)
  const allFilms = await getContentData(films)
  const allBooks = await getContentData(books)
  const allPosts = await getContentData(posts)

  if (!allArt || !allPhotos || !allBooks || !allPosts) {
    console.log("NO DATA")
    return null
  }

  // Create a page that lists all Art
  createPage({
    path: `/art`,
    component: path.resolve(`./src/templates/art.js`),
    context: { allArt },
  })

  createPage({
    path: `/photos`,
    component: path.resolve(`./src/templates/photos.js`),
    context: { allPhotos },
  })

  createPage({
    path: `/films`,
    component: path.resolve(`./src/templates/films.js`),
    context: { allFilms },
  })

  createPage({
    path: `/books`,
    component: path.resolve(`./src/templates/books.js`),
    context: { allBooks },
  })

  createPage({
    path: `/blog`,
    component: path.resolve(`./src/templates/blog.js`),
    context: { allPosts },
  })

  console.log("Pages created")
}
