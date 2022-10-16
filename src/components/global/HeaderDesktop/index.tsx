import React from "react";
import * as S from './styles'
import LogoRickAndMorty from "../../../assets/LogoRickAndMorty.svg";
import { Link } from "react-router-dom";

export const HeaderDesktop = () => {
  return (
    <S.Container>
      <img src={LogoRickAndMorty} alt="Logo Rick and Morty" />
      <S.MenuContainer>
        <Link to={"/"}>
          <p>Characters</p>
        </Link>
        <Link to={"/"}>
          <p>Locations</p>
        </Link>
        <Link to={"/"}>
          <p>Episodes</p>
        </Link>
      </S.MenuContainer>
    </S.Container>
  );
}