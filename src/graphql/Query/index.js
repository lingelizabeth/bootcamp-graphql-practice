/* eslint-disable linebreak-style */
const merge = require('lodash.merge')
// const Welcome = require('./Welcome')
const bookQResolver = require('../Query/book')
const authorQResolver = require('../Query/author')
const pubQResolver = require('../Query/publisher')


const resolvers = [bookQResolver, authorQResolver, pubQResolver]

module.exports = merge(...resolvers)
