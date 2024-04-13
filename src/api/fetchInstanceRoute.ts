import FetchApi from "@/api";
const fetchApiRoute = new FetchApi({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_ROUTE,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5 * 1000,
});

fetchApiRoute.use({
  request: async (config) => {
    if (config.isLogger) {
      console.log(config);
    }
    return config;
  },
  response: async (response, data, req) => {
    if (req.isLogger) {
      console.log({ response, data });
    }
    return response;
  },
});
export default fetchApiRoute;
