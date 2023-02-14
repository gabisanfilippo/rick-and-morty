import { API } from "../api";
import { useQuery } from "react-query";

const getCharacterById = async (id: number | string) => {
  const { data } = await API.get(`/character/${id}`);
  return data;
};

export const useGetCharacterById = (id: number | string) => {
  const { data, isLoading, isError } = useQuery(
    [`character with id ${id}`, id],
    async () => {
      return await getCharacterById(id);
    }
  );
  return {
    characterInfo: data as any,
    isLoadingCharacter: isLoading as boolean,
    isErrorCharacter: isError as boolean,
  };
};
