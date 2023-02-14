import { API } from "../api";
import { useQuery } from "react-query";

const getEpisodes = async (url: string) => {
  const { data } = await API.get(`/episode/?${url}`);
  return data;
};

export const useGetEpisodes = (url: string) => {
  const { data, isLoading, isError } = useQuery(
    ["episodes", url],
    async () => {
      return await getEpisodes(url);
    }
  );
  return {
    episodesInfo: data as any,
    isLoadingEpisodes: isLoading as boolean,
    isErrorEpisodes: isError as boolean,
  };
};
