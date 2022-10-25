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
      </S.FiltersContainer>
    </>
  );
}