import Image from "next/image";
import Link from "next/link";


type Blog = {
  id: number;
  title: string;
  image: string;
  categories: string[];
};

const blogs: Blog[] = [
  {
    id: 1,
    title: "Building Scalable Backends with Node.js",
    image: "/blog.jpg",
    categories: ["Backend", "Node.js", "Architecture"],
  },
  {
    id: 2,
    title: "Mastering Animations with GSAP & ScrollTrigger",
    image: "/blog.jpg",
    categories: ["Frontend", "GSAP", "UI/UX"],
  },
  {
    id: 3,
    title: "Designing Calm Retro Interfaces with TailwindCSS",
    image: "/blog.jpg",
    categories: ["Design", "TailwindCSS", "Retro"],
  },
];

const BlogSection = () => {
  return (
    <section
      id="blog"
      className="relative bg-gradient-to-br from-sky-50 via-emerald-50 to-indigo-50 py-20"
    >
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className=" text-4xl md:text-5xl  text-slate-900 drop-shadow-[3px_3px_0px_#a5b4fc] font-extrabold text-center">
          ✨ My Blogs
        </h2>
        <p className="mt-4 text-center text-lg text-slate-700 font-medium">
          Tips, strategy and opinion oriented talks on web development.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className=" border-slate-900 bg-gradient-to-br from-white via-amber-50 to-pink-50 shadow-[6px_6px_0px_#000] hover:-translate-y-1 rounded-2xl overflow-hidden border-4 transition-transform flex flex-col justify-between pb-5"
            >
              <div className="relative h-48 w-full border-b-4 border-slate-900">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-extrabold text-slate-900 drop-shadow-[2px_2px_0px_#f472b6]">
                  {blog.title}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {blog.categories.map((cat, _) => (
                    <span
                      key={_}
                      className="rounded-full border-2 border-slate-900 bg-yellow-200 px-3 py-1 text-sm font-bold text-slate-900 shadow-[2px_2px_0px_#000] rotate-[-2deg]"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              <div className=" flex justify-center">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border-4 border-slate-900 bg-white text-lg font-extrabold text-slate-900 shadow-[6px_6px_0px_#000]  transition hover:bg-slate-100"
                >
                  <span
                    className={`inline-block  rounded-full bg-gradient-to-br`}
                  />
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      
        <div className="mt-14 flex justify-center">
          <Link
            href={"#"}
            className="relative inline-flex items-center gap-3 rounded-full border-4 border-slate-900 
               bg-gradient-to-r from-amber-200 via-pink-200 to-sky-200 text-slate-900 
               shadow-[6px_6px_0px_#000] px-9 py-3 text-lg font-extrabold 
               transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000]"
          >
            <span
              className="inline-flex h-6 w-6 items-center justify-center rounded-full 
                     border-2 border-slate-900 bg-white text-slate-900 
                     shadow-[2px_2px_0px_#000]"
            >
              ⚡
            </span>
            See My All Blogs
            <span
              className="pointer-events-none absolute right-3 top-1/2 h-1 w-10 
                     -translate-y-1/2 rounded-full bg-white/40"
            ></span>
          </Link>
        </div>
      
    </section>
  );
};

export default BlogSection;
