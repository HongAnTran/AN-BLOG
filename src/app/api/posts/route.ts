
import fetchApi from "@/api/fetchInstanceRoute";
import { Blog } from "@/types/blog";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  console.log(searchParams)
  const res = await fetchApi.get<Blog[]>("/posts");

  return Response.json(res);
}
