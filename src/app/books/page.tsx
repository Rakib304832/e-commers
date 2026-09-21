import booksData from "../../../public/booksData.json";

type Book = {
  bookId: number;
  bookName: string;
  author: string;
  image: string;
  review: string;
  category: string;
  rating: number;
  totalPages: number;
};

const getBooks = (): Book[] => booksData as Book[];

export default function BooksPage() {
  const books = getBooks();

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

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {books.map((book) => (
          <article
            key={book.bookId}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-64 overflow-hidden bg-gray-100">
              <img
                src={book.image}
                alt={book.bookName}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
                {book.category}
              </span>
            </div>

            <div className="space-y-4 p-5">
              <div>
                <h2 className="text-xl font-bold text-neutral-900">{book.bookName}</h2>
                <p className="mt-1 text-sm text-gray-600">by {book.author}</p>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-700">
                <span>⭐ {book.rating}</span>
                <span>{book.totalPages} pages</span>
              </div>

              <p className="line-clamp-3 text-sm leading-6 text-gray-600">{book.review}</p>

              <button className="btn btn-success w-full text-white">View Details</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}