import { API } from "../services/api";
import * as _ from "underscore";

async function getSpecies() {
  try {
    const { data } = await API.get(`https://rickandmortyapi.com/api/character`);
    const dataOnlySpecies = data.results.map((element: any) => {
      return element.species;
    });
    let uniqueArr = _.uniq(dataOnlySpecies, (element: string) => element);
    let dataList = uniqueArr.map((element: string) => {
      return { label: element, value: element };
    });
    return [{ label: "Species", value: "" }, ...dataList];
  } catch (error) {
    console.log("Erro ao fazer a lista de espécies: ", error);
    return [{ label: "Species", value: "" }];
  }
}

export const OptionsStatus = [
  { label: "Status", value: "" },
  { label: "Alive", value: "alive" },
  { label: "Dead", value: "dead" },
  { label: "Unknown", value: "unknown" },
];

export const OptionsGender = [
  { label: "Gender", value: "" },
  { label: "Female", value: "female" },
  { label: "Male", value: "male" },
  { label: "Genderless ", value: "genderless" },
  { label: "Unknown ", value: "unknown" },
];

export let OptionsSpecies = [{ label: "Species", value: "" }];
getSpecies().then(function (results: any) {
  OptionsSpecies = results;
});
