/* eslint-disable linebreak-style */
const merge = require('lodash.merge')
// const bookQ = require('../Query/book')
const bookResolver = require('../Mutation/book')
// const authorQ = require('../Query/author')
const authorResolver = require('../Mutation/author')
const loginResolver = require('../Mutation/login')
// const pubQ = require('../Query/publisher')


const resolvers = [bookResolver, authorResolver, loginResolver]

module.exports = merge(...resolvers)
