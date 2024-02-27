import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fakenews.squirro.com",
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
