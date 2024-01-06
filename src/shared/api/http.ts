import AuthService from "@Services/AuthService";
import axios from "axios";

export const homeAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

homeAxios.interceptors.request.use((config) => {
  if (localStorage.getItem("token")) {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }

  return config;
});

homeAxios.interceptors.response.use(
  (res) => res,
  async (err) => {
    if (import.meta.env.VITE_SHOW_ERRORS === "true") {
      console.error(err);
    }
    const originalReq = err.config;
    if (err.response?.status === 401 && originalReq && !originalReq.isRetry) {
      originalReq.isRetry = true;
      try {
        const res = await AuthService.getToken();
        localStorage.setItem("token", res.data.access);
        localStorage.setItem("refresh", res.data.refresh);
        return homeAxios.request(originalReq);
      } catch (err) {
        if (import.meta.env.VITE_SHOW_ERRORS === "true") {
          console.error(err);
          localStorage.removeItem("token");
          localStorage.removeItem("refresh");
        }
      }
    }
    // return err
    throw err;
  }
);
