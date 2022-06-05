import { iBooks } from '@interfaces/iBooks'
import { BooksModel } from '@models/BooksModel'

export const getBooks = (): iBooks[] => {
  const allBooks = BooksModel.getAllBooks()
  return allBooks
}
