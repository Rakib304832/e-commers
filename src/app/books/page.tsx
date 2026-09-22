import booksData from "../../../public/booksData.json";
import type { Book } from "../type";
import Bookcard from "../component/shared/bookcard";

const books: Book[] = booksData as Book[];

export default function BooksPage() {
  return (
    <section className="container mx-auto my-10 px-4">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Reading List
          </p>
          <h1 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">Books</h1>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {books.map((book) => (
          <Bookcard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
}