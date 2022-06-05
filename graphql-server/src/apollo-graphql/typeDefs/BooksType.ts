import { gql } from 'apollo-server'

export const BooksType = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`
