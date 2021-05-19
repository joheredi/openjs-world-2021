import { BooksClient } from "./index";

// Create a new client
const client = BooksClient("http://localhost");

// List all the books
const listBooks = await client.path("/book").get();

// Check if the result has an error response
if (listBooks.status !== "200") {
  // Thanks to control flow analysis TS knows that
  // once we are inside this block the only response
  // shape that matches a non "200" response is the ErrorResponse
  throw listBooks.body;
}

// The only way we can reach this part of the code is if the
// status code is "200". So TS knows that from here on
// listBooks is of type `ListBooks200Response`

for (const book of listBooks.body) {
  // Log the title and author of each of the books in our library
  console.log(`Title: ${book.title} - Author(s): ${book.authors.join()}`);
}
