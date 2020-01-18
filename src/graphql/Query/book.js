/* eslint-disable linebreak-style */
const Book = require('../../models/Book')
const Author = require('../../models/Author')
const Publisher = require('../../models/Publisher')

const book = async (obj, { id }) => {
  const getBook = await Book.query().findById(id).returning('*')
  return getBook
}

const searchBook = async (obj, { title }) => {
  const searchByTitle = await Book.query().where('title', title)
  return searchByTitle
}

const books = async () => {
  const allBooks = await Book.query()
  return allBooks
}

const author = async ({ authorId }) => {
  const getAuthor = await Author.query().findById(authorId)
  return getAuthor
}

const publisher = async ({ publisherId }) => {
  const getPublisher = await Publisher.query().findById(publisherId)
  return getPublisher
}

const bookQResolver = {
  Query: {
    book,
    searchBook,
    books,
  },
  Book: {
    author,
    publisher,
  },
}

module.exports = bookQResolver
