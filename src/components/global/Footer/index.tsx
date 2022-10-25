import React from 'react'
import * as S from './styles'

export const Footer = () => {
  return (
    <S.Container>
      <p>
        Figma:{" "}
        <a href="https://www.figma.com/file/m6h4ug3G7a3amtvuQ6cIGq/Rick-and-Morty-(web-responsive)-(Community)?node-id=0%3A3">
          click here
        </a>
      </p>
      <div></div>
      <p>
        Code by: <a href="https://github.com/gabisanfilippo">gabisanfilippo</a>
      </p>
    </S.Container>
  );
}