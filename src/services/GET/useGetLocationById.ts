import { API } from "../api";
import { useQuery } from "react-query";

const getLocationById = async (id: number | string) => {
  const { data } = await API.get(`/location/${id}`);
  return data;
};

export const useGetLocationById = (id: number | string) => {
  const { data, isLoading, isError } = useQuery(
    [`location with id ${id}`, id],
    async () => {
      return await getLocationById(id);
    }
  );
  return {
    locationInfo: data as any,
    isLoadingLocation: isLoading as boolean,
    isErrorLocation: isError as boolean,
  };
};