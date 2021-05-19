import {
  CreateBookOptions,
  DeleteBookOptions,
  GetBookOptions,
  ListBookOptions,
  UpdateBookOptions,
} from "./requestOptions";
import {
  AddBook201Response,
  DeleteBook201Response,
  ErrorResponse,
  GetBook200Response,
  ListBooks200Response,
  UpdateBook201Response,
} from "./responses";

/**
 * Interface used to define the REST API
 */
export interface BookLibrary {
  "/book": {
    get: (
      input?: ListBookOptions
    ) => Promise<ListBooks200Response | ErrorResponse>;
    post: (
      input: CreateBookOptions
    ) => Promise<AddBook201Response | ErrorResponse>;
    put: (
      input: UpdateBookOptions
    ) => Promise<UpdateBook201Response | ErrorResponse>;
  };
  "/book/{bookId}": {
    get: (
      input?: GetBookOptions
    ) => Promise<GetBook200Response | ErrorResponse>;
    delete: (
      input?: DeleteBookOptions
    ) => Promise<DeleteBook201Response | ErrorResponse>;
  };
}

/**
 * Helper type that matches a string with a Template
 * we use this to figure out if a string contains
 * one or more path parameters. Path parameters
 * are segments of the path that start with '/' and
 * are enclosed by '{}'
 */
export type PathParameter<TPath extends string> =
  // Define our template in terms of Head/{Parameter}Tail
  TPath extends `${infer Head}/{${infer Parameter}}${infer Tail}`
    ? // We can call PathParameter<Tail> recursively to
      // match the template against the Tail of the path
      [pathParameter: string, ...params: PathParameter<Tail>]
    : // If no parameters were found we get an empty tuple
      [];

/**
 * Defines the type for the path function that will be part
 * of the client. This will only accept a string that
 * matches any of the keys of our BookLibrary interface
 */
export type Path = <TPath extends keyof BookLibrary>(
  path: TPath,
  // Our PathParameter helper type gives us a tuple
  // of the parameters that were found. If we spread
  // the tuple, we get each single parameter as a positiona
  // parameter of this function
  ...pathParam: PathParameter<TPath>
) => BookLibrary[TPath]; // We can access elements of an interface by key

/**
 * This is our client factory function.
 * It takes the BaseURL of the service and returns a client
 * with a `path` function.
 */
export declare function BooksClient(baseUrl: string): { path: Path };
