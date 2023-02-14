import { FC } from "react"
import * as S from './styles'

interface IProps {
  info: any;
}

export const PhotoCharacter : FC<IProps> = ({ info }) => {
  return (
    <S.Container>
      <img src={info.image} alt={info.name} />
      <h1>{info.name}</h1>
    </S.Container>
  )
}