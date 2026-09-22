import booksData from "../../../../public/booksData.json";
import type { Book } from "../../type";

const page = ({ params }: { params: { bookId: string } }) => {
  const books: Book[] = booksData;
  const book = books.find((b) => String(b.bookId) === params.bookId);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="container mx-auto my-10 px-4">
      <h1 className="text-3xl font-bold">{book.bookName}</h1>
      <p className="text-gray-600">by {book.author}</p>
      <p className="mt-4">{book.review}</p>
      <p>⭐ {book.rating} — {book.totalPages} pages</p>
    </div>
  );
};

export default page;