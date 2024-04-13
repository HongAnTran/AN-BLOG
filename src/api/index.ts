import ErrorRespone, { ConfigAPi, Interceptor } from "@/types/api";

export default class FetchApi {
  init: ConfigAPi = {
    baseURL: "",
    method: "GET",
  };

  interceptors: Interceptor[] = [];

  constructor(init: ConfigAPi) {
    this.init = { ...this.init, ...init };
  }

  use(interceptor: Interceptor) {
    this.interceptors.push(interceptor);
  }

  async request<TResponse>(
    urlReq: string,
    method: string,
    data?: any,
    init: ConfigAPi = {}
  ): Promise<TResponse> {
    try {
      const { timeout, params, baseURL, url, ...restInit } = {
        ...this.init,
        ...init,
      };

      const URL = baseURL ? baseURL : this.init.baseURL;
      const path = url ? url : urlReq;
      // Convert params to query string
      const queryString = new URLSearchParams(params).toString();
      const apiUrl = queryString
        ? `${URL}${path}?${queryString}`
        : `${URL}${path}`;

      // Fetch with timeout
      const controller = new AbortController();

      const timeoutId = setTimeout(() => controller.abort(), timeout || 0);
      // Apply request interceptors
      let updatedInit: ConfigAPi = {
        ...restInit,
        baseURL: URL,
        url: path,
        method: method,
        body: data ? JSON.stringify(data) : undefined,
      };

      for (const interceptor of this.interceptors) {
        if (interceptor.request) {
          updatedInit = await interceptor.request(updatedInit);
        }
      }

      const response = await fetch(apiUrl, {
        ...updatedInit,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const dataResponse = await response.json();

      // Check response status
      if (!response.ok) {
        if (dataResponse && dataResponse.errors) {
          throw new ErrorRespone({
            status: response.status,
            errors: dataResponse.errors,
            data: dataResponse.dataResponse,
          });
        } else {
          throw new ErrorRespone({
            status: response.status,
            errors: [response.statusText],
            data: undefined,
          });
        }
      }

      for (const interceptor of this.interceptors) {
        if (interceptor.response) {
          await interceptor.response(response, dataResponse, updatedInit);
        }
      }

      return dataResponse as TResponse;
    } catch (error) {
      if (error instanceof ErrorRespone) {
        throw error;
      } else if (error instanceof Error) {
        throw new ErrorRespone({
          status: 0,
          errors: [error.message],
          data: undefined,
        });
      }else{
        throw new ErrorRespone({
          status: 0,
          errors: ["error exception"],
          data: undefined,
        });
      }
    }
  }

  async get<TResponse>(url: string, init: ConfigAPi = {}): Promise<TResponse> {
    return this.request(url, "GET", undefined, init);
  }

  async post<TResponse>(url: string, data: any, init: ConfigAPi = {}) {
    return this.request<TResponse>(url, "POST", data, init);
  }

  async put<TResponse>(url: string, data: any, init: ConfigAPi = {}) {
    return this.request<TResponse>(url, "PUT", data, init);
  }

  async delete<TResponse>(url: string, init: ConfigAPi = {}) {
    return this.request<TResponse>(url, "DELETE", undefined, init);
  }
}
