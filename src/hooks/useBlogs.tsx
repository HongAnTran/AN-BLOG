
import BlogsServiceApi from "@/api/client/blogs"
import useSWR from "swr"




export default function useBlogs() {
  return useSWR(`/api/blogs`, () => BlogsServiceApi.getList)
}
