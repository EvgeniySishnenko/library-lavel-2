import "reflect-metadata";
import { Container } from "inversify";
import { BooksRepository } from "./index";
const container = new Container();
container.bind(BooksRepository).toSelf();

export { container };
