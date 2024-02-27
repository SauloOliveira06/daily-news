import { create } from "zustand";
import { IDailyNews } from "./types";
import api from "../service/api";

export const useDailyNews = create<IDailyNews>((set) => ({
  news: [],

  getDailyNews: async () => {
    try {
      const response = await api.get("/news/sport");
      set({ news: response.data.news });
    } catch (error) {
      console.error(error);
    }
  },
}));
