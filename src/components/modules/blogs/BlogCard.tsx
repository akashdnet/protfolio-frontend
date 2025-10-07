
import { TBlog } from '@/action/blogAction'
import Image from 'next/image'
import Link from 'next/link'


export default function BlogCard({blogs}:{blogs:TBlog[]}) {
  return (
    <div className="mt-12 grid gap-10 md:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className=" border-slate-900 bg-gradient-to-br from-white via-amber-50 to-pink-50 shadow-[6px_6px_0px_#000] hover:-translate-y-1 rounded-2xl overflow-hidden border-4 transition-transform flex flex-col justify-between pb-5"
            >
              <div className="relative h-48 w-full border-b-4 border-slate-900">
                <Image
                  src={blog?.thumbnail!}
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
                  {blog.categories.map((d, _) => (
                    <span
                      key={_}
                      className="rounded-full border-2 border-slate-900 bg-yellow-200 px-3 py-1 text-sm font-bold text-slate-900 shadow-[2px_2px_0px_#000] rotate-[-2deg]"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              <div className=" flex justify-center">
                <Link
                  href={`/blogs/${blog._id}`}
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
  )
}
