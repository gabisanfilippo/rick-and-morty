import { FC } from "react"
import * as S from './styles'

interface IProps {
  info: {
    air_date: string;
    characters: string[]
    created: string;
    episode: string;
    id: number;
    name: string;
    url: string;
  }
}

export const CardEpisodes: FC<IProps> = ({info}) => {
  return <S.Container>
    <h2>{info.name}</h2>
    <span>{info.air_date}</span>
    <p>{info.episode}</p>
  </S.Container>;
};