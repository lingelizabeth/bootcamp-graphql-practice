/* eslint-disable linebreak-style */
const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    books:[Book!]!
    authors:[Author!]!
    publishers: [Publisher!]!
    book(id:ID!):Book!
    searchBook(title:String!): Book!
    author(authorId:ID!): Author!
    publisher(id:ID!): Publisher!
  } 

  type Mutation{
    addBook(input:AddBookInput!):Book!
    addAuthor(input:AddAuthorInput!):Author!
    updateAddress(input:AddAddressInput!):Author!
    incrementNumPublished(id:ID!):Author!
    login(email:String!, password:String!):AuthReturn!
  }

  type Book{
    id:ID!
    title:String!
    language:Language
    numPages:Int
    datePublished:String
    bestseller:Boolean
    authorId:ID!
    publisherId:ID!
    author:Author
    publisher:Publisher
    createdAt:String
    updatedAt:String
  }

  type Author{
    id:ID!
    firstName:String!
    lastName:String!
    age: Int
    email:String
    numBooksPublished:Int!
    addressId:ID!
    address: Address
    createdAt:String
    updatedAt:String
  }

  type Publisher{
    id:ID!
    company:String!
    phoneNumber:String
    numBooksPublished:Int!
    addressId:ID!
    createdAt:String
    updatedAt:String

  }

  type Address{
    id:ID!
    street:String!
    city:String!
    state:String!
    zip:Int!
    createdAt:String
    updatedAt:String
  }

  type AuthReturn{
    token:String!
    user:Author!
  }

  input AddBookInput{
    title:String!
    language:Language!
    numPages:Int!
    datePublished:String
    bestseller:Boolean
    authorId:ID!
    publisherId:ID!
    # author:AddAuthorInput
  }

  input AddAuthorInput{
    firstName:String!
    lastName:String!
    age: Int
    email:String
    numBooksPublished:Int!
    # how do we put an address in here?
  }

  input AddPublisherInput{
    company:String!
    phoneNumber:String
    numBooksPublished:Int!
  }

  input AddAddressInput{
    authorId:ID!
    addressId:ID
    street:String!
    city:String!
    state:String!
    zip:Int!
  }



  enum Language{
    de
    es
    cn
    fr
    it
    ru
    pt
  }

`
