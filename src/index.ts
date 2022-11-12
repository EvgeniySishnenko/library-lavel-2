import "reflect-metadata";
import { injectable } from "inversify";
import { Request, Response, Router } from "express";
import { container } from "./container";

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
  getBook(id: string): Book;
  getBooks(): void;
  updateBook(id: string): void;
  deleteBook(id: string): void;
}

@injectable()
export class BooksRepository implements IBooksRepository {
  createBook(book: Omit<Book, "id">) {}
  getBook(id: string) {
    return {} as Book;
  }
  getBooks() {}
  updateBook(id: string) {}
  deleteBook(id: string) {}
}

router.get(":id", async (req: Request, res: Response) => {
  const repo: IBooksRepository = container.get(BooksRepository);
  const book: Book = await repo.getBook(req.params.id);
  res.json(book);
});
