import { iBooks } from '@interfaces/iBooks'

export class BooksModel implements iBooks {
  title: string
  author: string

  static getAllBooks (): iBooks[] {
    return [
      {
        title: 'The Awakening',
        author: 'Kate Chopin'
      },
      {
        title: 'City of Glass',
        author: 'Paul Auster'
      }
    ]
  }
}
