import { API } from "../api";
import { useQuery } from "react-query";

const getLocations = async (url: string) => {
  const { data } = await API.get(`/location/?${url}`);
  return data;
};

export const useGetLocations = (url: string) => {
  const { data, isLoading, isError } = useQuery(["locations", url], async () => {
    return await getLocations(url);
  });
  return {
    locationsInfo: data as any,
    isLoadingLocations: isLoading as boolean,
    isErrorLocations: isError as boolean,
  };
};
