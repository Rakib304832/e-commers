import Image from "next/image";
import Link from "next/link";
import type { Book } from "../../type";

type BookCardProps = {
  book: Book;
};

const Bookcard = ({ book, }: BookCardProps) => {
 
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-300 group-hover:scale-105"
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


        <Link href={`/books/${book.bookId}`} className="btn  w-full text-white bg-emerald-500 hover:bg-black">
          View Details
        </Link>
      </div>
    </article>
  );

};

export default Bookcard;