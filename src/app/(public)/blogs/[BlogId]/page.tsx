
import { TBlog } from "@/action/blogAction";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: { BlogId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { BlogId } = await params;

  // console.log(`blog id:`, BlogId);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${BlogId}`);
  const { data: blog } = await res.json();

  // const blog = result.data;
  // console.log(blog);

  return {
    title: `${blog?.title} | Blog by Md Imtiaz Khondoker Akash`,
    description: blog?.description.replace(/<[^>]+>/g, ""),
  };
}

const page = async ({ params }: { params: { BlogId: string } }) => {
  const { BlogId } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${BlogId}`);
  const { data: blog }: { data: TBlog } = await res.json();

  // console.log("single page data:",blog)
  return (
    <main className="container w-5xl mx-auto space-y-7  ">
      <div className="w-full h-80 relative rounded-xl overflow-hidden">
        <Image
          src={blog.thumbnail!}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-5" >
        <h1 className="text-4xl font-bold ">{blog.title}</h1>
        <ul className="flex gap-2 flex-wrap  text-sm ">
          <i className="p-1 ">TAGS: </i>
          {blog.categories.map((d, i) => (
            <i
              key={i}
              className="bg-gray-300 italic rounded-2xl px-2 pt-1 text-center"
            >
              {d}
            </i>
          ))}
        </ul>
        <div
          dangerouslySetInnerHTML={{ __html: blog.description }}
        />
      </div>
    </main>
  );
};

export default page;
