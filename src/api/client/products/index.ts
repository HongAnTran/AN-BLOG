import { Product } from "@/types/product";
import fetchApi from "@/api/fetchInstance";

class ProductsService {
  url: string = "/products";
  constructor() {}

  async getList(params?: { limit: number }) {
    return fetchApi.get<Product[]>(this.url, {
      params: params,
      
    });
  }

  async getDetail(id: number) {
    return await fetchApi.get<Product>(`${this.url}/${id}`, {});
  }
}

const ProductsServiceApi = new ProductsService();
export default ProductsServiceApi;
