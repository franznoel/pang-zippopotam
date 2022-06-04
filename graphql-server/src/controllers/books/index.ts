import { BooksModel } from "@models/BooksModel"


export const getBooks = () => {
  const allBooks = BooksModel.getAllBooks()
  return allBooks
}
