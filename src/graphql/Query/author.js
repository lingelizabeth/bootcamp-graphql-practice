/* eslint-disable linebreak-style */
const Author = require('../../models/Author')

const author = async ({ authorId }) => {
  const getAuthor = await Author.query().findById(authorId)
  return getAuthor
}

const authors = async () => {
  const allAuthors = await Author.query()
  return allAuthors
}

const authorQResolver = {
  Query: {
    author,
    authors,
  },
}

module.exports = authorQResolver
