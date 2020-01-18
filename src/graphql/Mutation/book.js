/* eslint-disable linebreak-style */
const Book = require('../../models/Book')

const addBook = async (obj, { input }) => {
  const addBookQuery = await Book.query().insert({ ...input }).returning('*')
  return addBookQuery
}

const bookResolver = {
  Mutation: {
    addBook,
  },
}

module.exports = bookResolver
