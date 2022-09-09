// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type Book {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    getSingleUser(username: String!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    saveBook(
      authors: [String],
      description: String!,
      bookId: String!,
      image: String,
      link: String,
      title: String!
      ): User
    deleteBook(bookId: String!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;
