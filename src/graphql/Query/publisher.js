/* eslint-disable linebreak-style */
const Publisher = require('../../models/Publisher')

const publisher = async ({ id }) => {
  const getPublisher = await Publisher.query().findById(id)
  return getPublisher
}

const publishers = async () => {
  const allPublishers = await Publisher.query()
  return allPublishers
}

const pubQResolver = {
  Query: {
    publisher,
    publishers,
  },
}

module.exports = pubQResolver
