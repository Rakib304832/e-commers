import type { Book } from "../../type";
import booksData from "../../../../public/booksData.json";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReviewText from "../../../ReviewText";

const books = booksData as Book[];

type PageProps = {
  params: Promise<{ bookId: string }>;
};

export default async function BookDetailsPage({ params }: PageProps) {
  const { bookId } = await params;

  const book = books.find((b) => b.bookId === Number(bookId));

  if (!book) {
    notFound();
  }

  return (
    <div className="mx-auto my-10 max-w-5xl px-4">
      <div className="flex flex-col gap-10 rounded-2xl bg-[#FBF6EC] p-6 shadow-[0_20px_60px_-15px_rgba(27,42,61,0.25)] md:flex-row md:p-10">

        {/* Cover */}
        <div className="group relative mx-auto h-96 w-64 shrink-0 md:mx-0">
          <div className="absolute -inset-3 -z-10 rounded-lg bg-[#1B2A3D]/5 transition-transform duration-500 ease-out group-hover:rotate-1" />
          <div className="relative h-full w-full overflow-hidden rounded-md shadow-[6px_6px_0_0_#C9A227] transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-[10px_10px_0_0_#C9A227]">
            <Image
              src={book.image}
              alt={book.bookName}
              fill
              sizes="(max-width: 768px) 90vw, 320px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-1 flex-col justify-center">
          <span className="inline-block w-fit rounded-full bg-[#7C8B6F]/15 px-3 py-1 text-sm font-medium text-[#5C6B4F]">
            {book.category}
          </span>

          <h1 className="mt-4 font-serif text-4xl leading-tight text-[#1B2A3D]">
            {book.bookName}
          </h1>
          <p className="mt-2 text-[#1B2A3D]/60">by {book.author}</p>

          {/* Rating */}
          <div className="mt-5 flex items-center gap-1" aria-label={`Rated ${book.rating} out of 5`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                viewBox="0 0 20 20"
                className={`h-5 w-5 transition-colors ${
                  i < Math.round(book.rating) ? "fill-[#C9A227]" : "fill-[#1B2A3D]/15"
                }`}
              >
                <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1L4.6 17.8l1.3-6-4.6-4.1 6.1-.6L10 1.5z" />
              </svg>
            ))}
            <span className="ml-2 text-sm text-[#1B2A3D]/50">{book.rating.toFixed(1)}</span>
          </div>

          {/* Page count "spine meter" */}
          <div className="mt-5 max-w-xs">
            <div className="flex justify-between text-xs text-[#1B2A3D]/50">
              <span>Length</span>
              <span>{book.totalPages} pages</span>
            </div>
            <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-[#1B2A3D]/10">
              <div
                className="h-full rounded-full bg-[#C9A227] transition-all duration-700 ease-out"
                style={{ width: `${Math.min(book.totalPages / 6, 100)}%` }}
              />
            </div>
          </div>

          {/* Review */}
          <ReviewText review={book.review} />
        </div>
      </div>
    </div>
  );
}