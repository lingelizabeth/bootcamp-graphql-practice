/* eslint-disable linebreak-style */
const Author = require('../../models/Author')

const addAuthor = async (obj, { input }) => {
  const addAuthorQuery = await Author.query().insert({ ...input }).returning('*')
  return addAuthorQuery
}

const updateAddress = async (obj, { authorId, addressId, ...input }) => {
  const updateAddressQ = await Author.query().upsertGraph({
    id: authorId,
    address: {
      id: addressId,
      ...input,
    },
  })
  return updateAddressQ
}

const incrementNumPublished = async (obj, { id }) => {
  const getCurrentNP = await Author.query().select('numBooksPublished').where('id', id)
  const incrementNP = await Author.query().patch({ numBooksPublished: getCurrentNP + 1 }).returning('*')
  return incrementNP
}

const authorResolver = {
  Mutation: {
    addAuthor,
    updateAddress,
    incrementNumPublished,
  },
}

module.exports = authorResolver
