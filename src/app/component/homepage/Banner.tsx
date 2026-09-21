import Image from "next/image";
import { Playfair_Display } from "next/font/google";

// Playfair Display is an elegant high-contrast serif, which is what makes the heading
// look premium. The default font-serif is a generic system font and looks plain by comparison.
// next/font self-hosts it, so there's no extra network request or flash of unstyled text.
const playfair = Playfair_Display({ subsets: ["latin"], weight: "800" });

export default function BooksBanner() {
  return (
    <div className="mx-6 my-4 grid grid-cols-1 items-center gap-4 rounded-3xl bg-gray-100 p-10 md:mx-20 md:grid-cols-2 md:px-20">
      <div>
        {/* tracking-tight pulls the letters closer, which suits large serif headings.
            leading-tight keeps the two lines compact so they read as one bold statement.
            md:text-6xl makes the heading the dominant element on desktop. */}
        <h2
          className={`${playfair.className} text-4xl leading-tight tracking-tight text-neutral-900 md:text-6xl`}
        >
          Books to{" "}
          {/* The gradient goes on one phrase only, so the eye is drawn there first.
              bg-clip-text with text-transparent lets the gradient show through the letters.
              The green matches the "View The List" button, tying the two together. */}
          <span className="bg-gradient-to-r from-green-500 to-emerald-700 bg-clip-text text-transparent">
            freshen up
          </span>{" "}
          your bookshelf
        </h2>

        <button className="btn btn-success mt-8 text-white">View The List</button>
      </div>

      <div className="justify-self-center">
        <Image
          src="/hero_img.jpg"
          width={450}
          height={600}
          
          alt="The Dating Playbook for Men book cover"
        />
      </div>
    </div>
  );
}




