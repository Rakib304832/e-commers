import Image from "next/image";




export default function Banner() {
  return (
   <div className="px-20  py-4"> 
   <div className="grid grid-cols-2 items-center gap-4 rounded-3xl bg-gray-300 p-10 md:px-20">
      <div >
        {/* font-serif gives the bold serif heading without importing a custom font.
            The text wraps onto two lines by itself because the column is only half the width. */}
        <h2 className="font-serif text-4xl font-bold leading-snug text-neutral-900 md:text-5xl">
          Books to freshen up your bookshelf
        </h2>

        {/* btn-success is DaisyUI's ready-made green button, so there is no custom color to maintain. */}
        <button className="btn btn-success mt-8 text-white">View The List</button>
      </div>

      {/* justify-self-center centers the image in its column,
          like the book sitting in the right half of the screenshot. */}
      <div className="justify-self-center">
        <Image
          src="/hero_img.jpg"
          width={300}
          height={400}
          alt="The Dating Playbook for Men book cover"
        />
      </div>
    </div>
    </div>
  );
}

