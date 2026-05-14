import type { UserCardProps } from "../types/note";
import axios from "axios";

export async function NoteService(query: string, page: number) {
  const { data } = await axios.get<UserCardProps>(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        query,
        page,
        include_adult: false,
        language: "en-US",
      },
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
      },
    },
  );
  return data;
}
