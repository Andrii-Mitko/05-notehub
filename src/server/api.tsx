import type { UserCardProps } from "../types/note";
import axios from "axios";
import { useEffect, useState } from "react";

export default function UserCard() {
  const [data, setData] = useState<UserCardProps | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<UserCardProps>(
          "https://notehub-public.goit.study/api/docs"
        );

        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return <div>{JSON.stringify(data)}</div>;
}

