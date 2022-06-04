import { BooksModel } from "@models/BooksModel";
import { getBooks } from "@controllers/books";

export const BooksResolver = {
  Query: {
    books: () => {
      const books = getBooks()
      return books
    },
  },
};
