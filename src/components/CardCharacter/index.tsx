import React from 'react'
import * as S from './styles'
import RickImage from "../../assets/RickImage.png";

export const CardCharacter = () => {
  return (
    <S.Container>
      <div className='img-container'>
        <img src={RickImage} alt="Personagem" />
      </div>
      <S.DescriptionContainer>
        <h2>Rick Sanchez</h2>
        <p>Human</p>
      </S.DescriptionContainer>
    </S.Container>
  );
}