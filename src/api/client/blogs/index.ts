import { Blog } from "@/types/blog";
import fetchApi from "@/api/fetchInstance";
import { ConfigAPi } from "@/types/api";
class BlogsService {
  url: string = "/posts";
  constructor() {
    
  }

  async getList(params?: { limit: number }, config?: ConfigAPi) {
    return fetchApi.get<Blog[]>(this.url, {
      params: params,
      isLogger: true,
      ...config,
    });
  }

  async getDetail(id: number) {
    const data = await fetchApi.get<Blog>(`${this.url}/${id}`);
    return data;
  }
}

const BlogsServiceApi = new BlogsService();
export default BlogsServiceApi;
