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
  getBook(id: string): void;
  getBooks(): void;
  updateBook(id: string): void;
  deleteBook(id: string): void;
}

@injectable()
export class BooksRepository {
  createBook(book: Omit<Book, "id">) {}
  getBook(id: string) {}
  getBooks() {}
  updateBook(id: string) {}
  deleteBook(id: string) {}
}

router.get(":id", async (req: Request, res: Response) => {
  const repo = container.get(BooksRepository);
  const book = await repo.getBook(req.params.id);
  res.json(book);
});
