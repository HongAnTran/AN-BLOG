import axios from "axios";
// import {HandlerToken} from "src/utils";
const axiosClient = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});
axios.interceptors.request.use(
    function (config) {
        // const ACCESS_TOKEN = HandlerToken.getAccessToken();
        // if (ACCESS_TOKEN) {
        //   config.headers.Authorization = `Bearer ${ACCESS_TOKEN}`;
        // }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);
axios.interceptors.response.use(
    function (response) {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    async function (error) {
        const originalRequest = error.config;

        // If the error status is 401 and there is no originalRequest._retry flag,
        // it means the token has expired and we need to refresh it
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                // const refreshToken = HandlerToken.getRefreshToken();
                // const response = await axiosClient.post("/api/refresh-token", {
                //   refreshToken,
                // });
                // const { token } = response.data;

                // HandlerToken.setToken("ACCESS_TOKEN", token);

                // Retry the original request with the new token
                // originalRequest.headers.Authorization = `Bearer ${token}`;
                return axios(originalRequest);
            } catch (error) {
                // Handle refresh token error or redirect to login
            }
        }

        return Promise.reject(error);
    }
);

export default axiosClient;
