import Link from "next/link";
import Image from "next/image";

const Navber = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-6 md:px-20">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={-1} className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/books">Listed Books</Link>
            </li>
            <li>
              <Link href="/listed-books">Pages in Read</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <Image src="/book.ico" alt="Book logo" width={32} height={32} />
          <h2 className="text-xl font-bold">Book vibe</h2>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal items-center gap-4 px-1">
          <li>
            <Link href="/" className="rounded-lg border border-green-500 px-5 py-2 font-semibold text-green-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/books">Listed Books</Link>
          </li>
          <li>
            <Link href="/listed-books">Pages in Read</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-3">
        <button className="btn btn-success">Sign in</button>
        <button className="btn btn-accent">Sign up</button>
      </div>
    </div>
  );
};

export default Navber;