import { mergeTypeDefs } from "@graphql-tools/merge";
import { BooksType } from "./BooksType";

export const typeDefs = mergeTypeDefs([BooksType])
