import React from 'react'
import * as S from './styles'
import RickImage from "../../assets/RickImage.png";
import { FC } from 'react'

interface IProps {
  element: any
}

export const CardCharacter : FC<IProps> = ({ element }) => {
  return (
    <S.Container>
      <div className="img-container">
        <img src={element.image} alt="Personagem" />
      </div>
      <S.DescriptionContainer>
        <h2>{element.name}</h2>
        <p>{element.species}</p>
      </S.DescriptionContainer>
    </S.Container>
  );
};