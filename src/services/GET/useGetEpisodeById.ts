import { API } from "../api";
import { useQuery } from "react-query";

const getEpisodeById = async (id: number | string) => {
  const { data } = await API.get(`/episode/${id}`);
  return data;
};

export const useGetEpisodeById = (id: number | string) => {
  const { data, isLoading, isError } = useQuery(
    [`episode with id ${id}`, id],
    async () => {
      return await getEpisodeById(id);
    }
  );
  return {
    episodeInfo: data as any,
    isLoadingEpisode: isLoading as boolean,
    isErrorEpisode: isError as boolean,
  };
};
