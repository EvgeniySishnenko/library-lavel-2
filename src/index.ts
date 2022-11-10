import "reflect-metadata";
import { injectable, Container } from "inversify";
import { Request, Response, Router } from "express";
const router = Router();

interface Book {
  id: string;
  title: string;
  description: string;
  authors: string;
  favorite: string;
  fileCover: string;
  fileName: string;
}

interface IBooksRepository {
  createBook(book: Omit<Book, "id">): void;
  getBook(id: string): void;
  getBooks(): void;
  updateBook(id: string): void;
  deleteBook(id: string): void;
}

@injectable()
class BooksRepository {
  createBook(book: Omit<Book, "id">) {}
  getBook(id: string) {}
  getBooks() {}
  updateBook(id: string) {}
  deleteBook(id: string) {}
}

const container = new Container();
container.bind(BooksRepository).toSelf();

router.get(":id", async (req: Request, res: Response) => {
  const repo = container.get(BooksRepository);
  const book = await repo.getBook(req.params.id);
  res.json(book);
});
