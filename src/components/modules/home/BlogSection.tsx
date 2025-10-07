import { TBlog } from "@/action/blogAction";
import BlogCard from "@/components/modules/blogs/BlogCard";
import Link from "next/link";


const BlogSection = ({blogs}:{blogs:TBlog[]}) => {

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
      
      <BlogCard blogs={blogs} />

        
      </div>

      
        <div className="mt-14 flex justify-center">
          <Link
            href={"/blogs"}
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
