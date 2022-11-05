interface Book {
  id: "string",
  title: "string",
  description: "string",
  authors: "string",
  favorite: "string",
  fileCover: "string",
  fileName: "string"
}

class BooksRepository  {
  createBook(book: Book){}
  getBook(id: number){}
  getBooks(){}
  updateBook(id: number){}
  deleteBook(id: number){}
}