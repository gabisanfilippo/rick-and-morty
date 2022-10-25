import React from "react"
import { useMediaQuery } from "react-responsive";
import { HeaderDesktop } from "../../components/global/HeaderDesktop";
import { HeaderMobile } from "../../components/global/HeaderMobile";
import RickAndMorty from '../../assets/RickAndMorty.svg'
import * as S from './styles'
import { InputSearch } from "../../components/global/InputSearch";
import { SelectArrow } from "../../components/global/SelectArrow";

export const Characters = () => {
  return (
    <>
      {useMediaQuery({ minWidth: 450 }) ? <HeaderDesktop /> : <HeaderMobile />}
      <S.RickAndMorty>
        <img src={RickAndMorty} alt="Escrita 'Rick and Morty'" />
      </S.RickAndMorty>
      {useMediaQuery({ minWidth: 1115 }) ? (
        <S.FiltersContainer>
          <div className="filter-width">
            <InputSearch placeholder="Filter by name..." />
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
            <InputSearch placeholder="Filter by name..." />
          </div>
          <div className="filter-width">
            <InputSearch placeholder="Filter by name..." />
          </div>
        </S.FiltersMobile>
      )}
    </>
  );
}