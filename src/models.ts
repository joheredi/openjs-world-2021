/**
 * Simple shape of a Book
 */
export interface Book {
  id: string;
  title: string;
  authors: string[];
  publishYear?: string;
  color: "black" | "blue" | "brown" | "green" | "red" | "white" | "yellow";
}
