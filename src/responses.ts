import { Book } from "./models";

/**
 * Base shape for a Response. This interface is extended
 * to provide the specific shape for the responses
 * of each resource+verb.
 */
export interface Response {
  status: string;
  body?: unknown;
  headers?: Record<string, unknown>;
}

export interface ErrorResponse extends Response {
  // String literal unions provide a predefined set of
  // possible status codes that we can get. This helps
  // the TS language server to be able to narrow down
  // the types through control flow analysis.
  status: "400" | "404" | "500";
  body: {
    errorCode: string;
    message: string;
  };
}

export interface AddBook201Response extends Response {
  status: "201";
  body?: never;
}

export interface ListBooks200Response extends Response {
  status: "200";
  body: Book[];
}

export interface UpdateBook201Response extends Response {
  status: "201";
  // Response doesn't send a body payload so we set it to
  // never so our users know they shouldn't expect one.
  body?: never;
}

export interface GetBook200Response extends Response {
  status: "200";
  body: Book;
}

export interface DeleteBook201Response extends Response {
  status: "201";
  body?: never;
}
