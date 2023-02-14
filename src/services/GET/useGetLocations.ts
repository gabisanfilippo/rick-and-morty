import { API } from "../api";
import { useQuery } from "react-query";

const getLocations = async (url: string, page: number) => {
  const { data } = await API.get(`/location/?${url}&page=${page}`);
  return data;
};

export const useGetLocations = (url: string, page: number) => {
  const { data, isLoading, isError } = useQuery(
    ["locations", url, page],
    async () => {
      return await getLocations(url, page);
    }
  );
  return {
    locationsInfo: data as any,
    isLoadingLocations: isLoading as boolean,
    isErrorLocations: isError as boolean,
  };
};
