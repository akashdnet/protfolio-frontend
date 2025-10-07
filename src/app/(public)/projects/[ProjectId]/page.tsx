
import {  TProject } from "@/constant/types";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: { ProjectId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ProjectId } = await params;

  // console.log(`data id:`, ProjectId);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/${ProjectId}`);
  const { data } = await res.json();

  // const data = result.data;
  // console.log(data);

  return {
    title: `${data?.title} | Project Showcase by Md Imtiaz Khondoker Akash`,
    description: data?.description.replace(/<[^>]+>/g, ""),
  };
}

const page = async ({ params }: { params: { ProjectId: string } }) => {
  const { ProjectId } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/${ProjectId}`);
  const { data: data }: { data: TProject } = await res.json();

  // console.log("single page data:",data)
  return (
    <main className="container w-5xl mx-auto space-y-7  ">
      <div className="w-full h-80 relative rounded-xl overflow-hidden">
        <Image
          src={data.thumbnail}
          alt={data.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-5" >
        <h1 className="text-4xl font-bold ">{data.title}</h1>
        <ul className="flex gap-2 flex-wrap  text-sm ">
          <i className="p-1 uppercase ">Features: </i>
          {data.features.map((d, i) => (
            <i
              key={i}
              className="bg-gray-300 italic rounded-2xl px-2 pt-1 text-center"
            >
              {d}
            </i>
          ))}
        </ul>
        <div
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      </div>
    </main>
  );
};

export default page;
