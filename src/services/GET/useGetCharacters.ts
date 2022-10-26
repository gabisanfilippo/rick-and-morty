import { API } from "../api";
import { useQuery } from "react-query";

const getCharacters = async (url: string, page: number = 1) => {
  const { data } = await API.get(`/character/?${url}&page=${page}`);
  return data;
};

export const useGetCharacters = (url: string, page: number = 1) => {
  const { data, isLoading, isError } = useQuery(
    ["characters", url, page],
    async () => {
      return await getCharacters(url, page);
    }
  );
  return {
    charactersInfo: data as any,
    isLoadingCharacters: isLoading as boolean,
    isErrorCharacters: isError as boolean,
  };
};

