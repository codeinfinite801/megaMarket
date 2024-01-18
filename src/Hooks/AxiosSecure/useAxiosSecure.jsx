import axios from "axios";
import { Navigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
    // baseURL: "https://parcel-pulse-server.vercel.app"
});

const useAxiosSecure = () => {
    // Request interceptor for adding the Authorization header
    axiosSecure.interceptors.request.use(
        function (config) {
            const token = localStorage.getItem("access-token");
            config.headers.authorization = `Bearer ${token}`;
            return config;
        },
        function (error) {
            return Promise.reject(error);
        }
    );

    // Response interceptor for handling errors
    axiosSecure.interceptors.response.use(
        function (response) {
            return response;
        },
        function (error) {
            console.error("Interceptor error hit:", error);
            const status = error.response?.status;

            if (status === 400 || status === 403) {
                // Redirect to login page if unauthorized or forbidden
                return Promise.reject(new Error("Unauthorized"));
            }

            return Promise.reject(error);
        }
    );

    return axiosSecure;
};

export default useAxiosSecure;
