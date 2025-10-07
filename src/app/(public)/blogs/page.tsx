import type { Metadata } from "next";
import BlogCard from "@/components/modules/blogs/BlogCard";
import { getBlogData } from "@/action/blogAction";



export const metadata: Metadata = {
  title: "My Blogs | Md Imtiaz Khondoker Akash",
  description: "Tips, strategy and opinion oriented talks on web development.",
};



const page = async () => {
  const blogs = await getBlogData({limit:3,page:1}).then((res)=>res.data.data);
  // console.log(`blog page`,data)
  return (
    <section
      className="relative bg-gradient-to-br from-sky-50 via-emerald-50 to-indigo-50 pt-5 pb-10 "
    >
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className=" text-4xl md:text-5xl  text-slate-900 drop-shadow-[3px_3px_0px_#a5b4fc] font-extrabold text-center">
          ✨Welcome to my Blogs
        </h2>
        <p className="mt-4 text-center text-lg text-slate-700 font-medium">
          Tips, strategy and opinion oriented talks on web development.
        </p>

        <BlogCard blogs={blogs} />
      </div>
    </section>
  );
};

export default page;
