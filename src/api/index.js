import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: `https://article-publishing-website-server.vercel.app`,
  baseURL: `http://localhost:5000`,
  withCredentials: true,
});

export default axiosInstance;
