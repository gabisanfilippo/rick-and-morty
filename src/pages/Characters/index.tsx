import React from "react";
import { useMediaQuery } from "react-responsive";
import { HeaderDesktop } from "../../components/global/HeaderDesktop";
import { HeaderMobile } from "../../components/global/HeaderMobile";
import RickAndMorty from "../../assets/RickAndMorty.svg";
import * as S from "./styles";
import { InputSearch } from "../../components/global/InputSearch";
import { SelectArrow } from "../../components/global/SelectArrow";
import { FilterWithModal } from "../../components/FilterWidthModal";
import { CardCharacter } from "../../components/CardCharacter";
import { Footer } from "../../components/global/Footer";
import { useGetCharacters } from "../../services/GET/useGetCharacters";
import { useState, useEffect } from "react";
import { transformObjectToParams } from "../../utils/transformObjectToParams";
import { v4 as uuid } from "uuid";
import RickLoading from "../../assets/RickLoading.gif";
import RickAndMortyError from "../../assets/RickAndMortyError.png";

export const Characters = () => {
  const [filtersToURL, setFiltersToURL] = useState({
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
  });

  let url = transformObjectToParams(filtersToURL);

  const { charactersInfo, isErrorCharacters, isLoadingCharacters } =
    useGetCharacters(url);

  useEffect(() => {
    charactersInfo && console.log(charactersInfo);
  }, [charactersInfo]);
  return (
    <>
      {useMediaQuery({ minWidth: 450 }) ? <HeaderDesktop /> : <HeaderMobile />}
      <S.RickAndMorty>
        <img src={RickAndMorty} alt="Escrita 'Rick and Morty'" />
      </S.RickAndMorty>
      {useMediaQuery({ minWidth: 1115 }) ? (
        <S.FiltersContainer>
          <div className="filter-width">
            <InputSearch
              placeholder="Filter by name..."
              onChange={(Event) => {
                setFiltersToURL({ ...filtersToURL, name: Event.target.value });
              }}
            />
          </div>
          <div className="filter-width">
            <SelectArrow
              name="species"
              options={[{ label: "Species", value: "" }]}
            />
          </div>
          <div className="filter-width">
            <SelectArrow
              name="species"
              options={[{ label: "Gender", value: "" }]}
            />
          </div>
          <div className="filter-width">
            <SelectArrow
              name="species"
              options={[{ label: "Status", value: "" }]}
            />
          </div>
        </S.FiltersContainer>
      ) : (
        <S.FiltersMobile>
          <div className="filter-width">
            <InputSearch
              placeholder="Filter by name..."
              onChange={(Event) => {
                setFiltersToURL({ ...filtersToURL, name: Event.target.value });
              }}
            />
          </div>
          <div className="filter-width">
            <FilterWithModal />
          </div>
        </S.FiltersMobile>
      )}
      <S.CardsContainer>
        {isLoadingCharacters ? (
          <S.LoadingContainer>
            <img src={RickLoading} alt="Gif do Rick" />
            Loading...
          </S.LoadingContainer>
        ) : isErrorCharacters ? (
          <S.LoadingContainer>
            <img src={RickAndMortyError} alt="Rick and Morty no Portal" />
            Oops! It looks like the characters have been abducted. Don't worry,
            we'll rescue them soon!
          </S.LoadingContainer>
        ) : (
          charactersInfo &&
          charactersInfo.results.map((element: any) => {
            return (
              <CardCharacter
                key={`Personagem ${element.name}, id da api ${
                  element.id
                } com id ${uuid()}`}
                element={element}
              />
            );
          })
        )}
      </S.CardsContainer>
      <Footer />
    </>
  );
};
