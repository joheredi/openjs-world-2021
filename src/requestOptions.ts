import { Book } from "./models";

/**
 * Base shape of the request input parameters
 * this is later on extended for each resource+method
 * to match the service requirements
 */
export interface RequestOptions {
  body?: unknown;
  headers?: Record<string, string>;
  queryParameters?: Record<string, string>;
}

export interface ListBookOptions extends RequestOptions {
  // GET Request don't contain a body
  // setting this as optional never won't require
  // our users to set the body, and prevents them to
  // set any value other than undefined.
  body?: never;
}

export interface CreateBookOptions extends RequestOptions {
  body: Book;
}

export interface UpdateBookOptions extends RequestOptions {
  body: Book;
  headers?: { etag?: string };
}

export interface GetBookOptions extends RequestOptions {
  body?: never;
}

export interface DeleteBookOptions extends RequestOptions {
  headers?: { etag?: string };
}
