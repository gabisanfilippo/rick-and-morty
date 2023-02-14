import { API } from "../api";
import { useQuery } from "react-query";

const getEpisodes = async (url: string, page: number) => {
  const { data } = await API.get(`/episode/?${url}&page=${page}`);
  return data;
};

export const useGetEpisodes = (url: string, page: number) => {
  const { data, isLoading, isError } = useQuery(["episodes", url], async () => {
    return await getEpisodes(url, page);
  });
  return {
    episodesInfo: data as any,
    isLoadingEpisodes: isLoading as boolean,
    isErrorEpisodes: isError as boolean,
  };
};
