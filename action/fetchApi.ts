export interface TMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}





interface ApiResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: {
    meta: TMeta;
    data: T;
  };
}

interface FetchOptions {
  path: string;
  page?: number;
  limit?: number;
  term?: string;
  tag: string;
}








export default async function fetchApi<T>({ path, page = 1, limit = 5, term = "", tag }: FetchOptions): Promise<ApiResponse<T>> {
  const queryParams = new URLSearchParams();
  queryParams.append("page", page.toString());
  queryParams.append("limit", limit.toString());
  if (term) {
    queryParams.append("term", term);
  }

  const url = `${process.env.NEXT_PUBLIC_API_URL}${path}?${queryParams.toString()}`;

  try {
    const res = await fetch(url, {
      next:{
        tags: [tag]
      }
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to fetch data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}