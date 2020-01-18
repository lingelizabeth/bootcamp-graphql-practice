/* eslint-disable linebreak-style */
const { comparePassword, createToken } = require('../../lib/auth')

const Author = require('../../models/Author')

const login = async (obj, { email, password }) => {
  console.log('INSIDE LOGIN')
  const user = await Author.query().findOne({ email })
  if (!user) { throw new Error('Invalid Email or Password') }
  const getHashPassword = await Author.query()
    .select('password').where({ id: user.id })
  const hashedPassword = getHashPassword[0].password
  console.log('HASHED PW', getHashPassword[0].password)
  const passwordMatch = comparePassword(password, hashedPassword)
  console.log('SUCCESS:', passwordMatch)
  if (!passwordMatch) { throw new Error('Invalid Email or Password') }
  const payload = {
    id: user.id,
  }
  const token = createToken(payload)
  console.log('TOKEN', token)
  return ({ token, user })
}

const loginResolver = {
  Mutation: {
    login,
  },
}

module.exports = loginResolver
