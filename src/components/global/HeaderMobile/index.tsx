import React from "react";
import LogoRickAndMorty from "../../../assets/LogoRickAndMorty.svg";
import Hamburguer from "../../../assets/Hamburguer.svg";
import Close from "../../../assets/Close.svg";
import { menuIsOpenJotai } from "../../../contexts/menu";
import * as S from './styles'
import { useAtom } from 'jotai'
import { Link } from 'react-router-dom';

export const HeaderMobile = () => {

  const [menuIsOpen, setMenuIsOpen] = useAtom(menuIsOpenJotai);

  return (
    <>
      <S.Container>
        <img src={LogoRickAndMorty} alt="Logo Rick and Morty" />
        {menuIsOpen ? (
          <img
            src={Close}
            alt="Fechar menu"
            onClick={() => {
              setMenuIsOpen(false);
            }}
          />
        ) : (
          <img
            src={Hamburguer}
            alt="Menu"
            onClick={() => {
              setMenuIsOpen(true);
            }}
          />
        )}
      </S.Container>
      {menuIsOpen && (
        <S.MenuContainer>
          <Link
            to={"/"}
            onClick={() => {
              setMenuIsOpen(false);
            }}
          >
            <p>Characters</p>
          </Link>
          <Link
            to={"/"}
            onClick={() => {
              setMenuIsOpen(false);
            }}
          >
            <p>Locations</p>
          </Link>
          <Link
            to={"/"}
            onClick={() => {
              setMenuIsOpen(false);
            }}
          >
            <p>Episodes</p>
          </Link>
        </S.MenuContainer>
      )}
    </>
  );
}