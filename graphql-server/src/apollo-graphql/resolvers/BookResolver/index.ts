import { getBooks } from '@controllers/books'
import { iBooks } from '@interfaces/iBooks'

export const BooksResolver = {
  Query: {
    books: (): iBooks[] => {
      const books = getBooks()
      return books
    }
  }
}
