interface Book {
  id: string,
  title: string,
  description: string,
  authors: string,
  favorite: string,
  fileCover: string,
  fileName: string
}

class BooksRepository  {
  createBook(book: Omit<Book, "id">){}
  getBook(id: string){}
  getBooks(){}
  updateBook(id: string){}
  deleteBook(id: string){}
}