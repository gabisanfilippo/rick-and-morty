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

async function getTypes() {
  try {
    const { data } = await API.get(`https://rickandmortyapi.com/api/location`);
    const dataOnlyTypes = data.results.map((element: any) => {
      return element.type
    })
    let uniqueArr = _.uniq(dataOnlyTypes, (element: string) => element);
    let dataList = uniqueArr.map((element: string) => {
      return { label: element, value: element };
    });
    return [{ label: "Type", value: "" }, ...dataList];
  } catch (error) {
    console.log("Erro ao fazer a lista de tipos: ", error);
    return [{ label: "Type", value: "" }];
  }
}

async function getDimension() {
  try {
    const { data } = await API.get(`https://rickandmortyapi.com/api/location`);
    const dataOnlyTypes = data.results.map((element: any) => {
      return element.dimension;
    });
    let uniqueArr = _.uniq(dataOnlyTypes, (element: string) => element);
    let dataList = uniqueArr.map((element: string) => {
      return { label: element, value: element };
    });
    return [{ label: "Dimension", value: "" }, ...dataList];
  } catch (error) {
    console.log("Erro ao fazer a lista de dimensões: ", error);
    return [{ label: "Dimension", value: "" }];
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

export const filtersCharactersList = [
  {
    type: "select",
    name: "species",
    options: OptionsSpecies,
  },
  {
    type: "select",
    name: "gender",
    options: OptionsGender,
  },
  {
    type: "select",
    name: "status",
    options: OptionsStatus,
  },
];

export let OptionsType = [{ label: "Type", value: "" }];
getTypes().then(function (results: any) {
  OptionsType = results;
});

export let OptionsDimension = [{ label: "Dimension", value: "" }];
getDimension().then(function (results: any) {
  OptionsDimension = results;
});

export const filtersLocationsList = [
  {
    type: "select",
    name: "type",
    options: OptionsType,
  },
  {
    type: "select",
    name: "dimension",
    options: OptionsDimension,
  },
];

