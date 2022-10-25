import React from "react"
import { useMediaQuery } from "react-responsive";
import { HeaderDesktop } from "../../components/global/HeaderDesktop";
import { HeaderMobile } from "../../components/global/HeaderMobile";
import RickAndMorty from '../../assets/RickAndMorty.svg'
import * as S from './styles'
import { InputSearch } from "../../components/global/InputSearch";

export const Characters = () => {
  return (
    <>
      {useMediaQuery({ minWidth: 450 }) ? <HeaderDesktop /> : <HeaderMobile />}
      <S.RickAndMorty>
        <img src={RickAndMorty} alt="Escrita 'Rick and Morty'" />
      </S.RickAndMorty>
      <>
        <InputSearch placeholder="Filter by name..." />
      </>
    </>
  );
}