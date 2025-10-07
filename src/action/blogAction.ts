"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export interface TBlog {
  _id: string
  thumbnail?: string
  title: string
  categories: string[]
  description: string
  isPublished: boolean
}




interface CreateDataProps {
  data: any;
  image: any;
}

interface GatDataProps {
  page: number;
  limit: number;
  term: string;
}

export interface TMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface ApiResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: {
    meta: TMeta;
    data: TBlog[];
  };
}

interface FetchOptions {
  page?: number;
  limit?: number;
  term?: string;
}

export const getBlogData = async ({page = 1,limit = 5,term = "",}: FetchOptions): Promise<ApiResponse> => {

  console.log(page, limit)
  
  // console.log("action", limit)
  const queryParams = new URLSearchParams();
  queryParams.append("page", page.toString());
  queryParams.append("limit", limit.toString());
  if ( term != "undefined") {
    queryParams.append("term", term);
  }


  console.log(`ddd`,queryParams)

  const url = `${process.env.NEXT_PUBLIC_API_URL}/blog/all-blogs?${queryParams.toString()}`;
  console.log(`url`, url)

  try {
    const res = await fetch(url, {
      next: {
        tags: ["blogs"],
      },
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to fetch data");
    }

    const data = await res.json();
    console.log(data)

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};














export const createBlogData = async ({ data, image }: CreateDataProps) => {
  const formData = new FormData();
  formData.append("data", JSON.stringify(data));
  if (image) {
    formData.append("thumbnail", image);
  }

  const url = `${process.env.NEXT_PUBLIC_API_URL}/blog/create`;

  try {
    const res = await fetch(url, {
      method: "POST",
      body: formData,
      credentials: "include",
    });

    const result = await res.json();
    revalidateTag("blogs");
    return result;
  } catch (error: any) {
    console.log("Error creating blog:", error);
  }
};













export const editBlogData = async ({data,image,}: {data: any;image: any;}) => {


    const cookieStore = await cookies()
    const cookiesOptions= {
    access_token: cookieStore.get('access_token')?.value,
    refresh_token: cookieStore.get('refresh_token')?.value,
  }

  const formData = new FormData();
  formData.append("data", JSON.stringify(data));
  if(image) {
    formData.append("thumbnail", image);
  }

  const id = data._id;
  const url = `${process.env.NEXT_PUBLIC_API_URL}/blog/${id}`;

  try {
    const res = await fetch(url, {
      method: "PATCH",
      body: formData,
      credentials: "include",
      headers: {
        Cookie: `access_token=${cookiesOptions.access_token}; refresh_token=${cookiesOptions.refresh_token}`
      },
    });

    const result =  res.json();
    console.log(result)
    revalidateTag("blogs");
    return result;
  } catch (error: any) {
    console.error("Error blog project:", error);
    return { message: error.message, success: false };
  }
};

export const deleteBlogData = async (id: string) => {
  const cookieStore = await cookies()
  const cookiesOptions= {
    access_token: cookieStore.get('access_token')?.value,
    refresh_token: cookieStore.get('refresh_token')?.value,
  }

  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/blog/${id}`;
    const res = await fetch(url, {
      method: "DELETE",
      credentials: "include",
      headers: {
        // "Content-Type": "application/json",
        Cookie: `access_token=${cookiesOptions.access_token}; refresh_token=${cookiesOptions.refresh_token}`
      },
    });

    const result: ApiResponse = await res.json();

    if (!result.success) {
      throw new Error(result.message);
    }

    revalidateTag("blogs");
    return result;
  } catch (error: any) {
    return { message: error.message, success: false };
  }
};
