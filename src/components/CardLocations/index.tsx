import { FC } from "react"
import { useNavigate } from "react-router-dom";
import * as S from './styles'

interface IProps {
  info: {
    created: string;
    dimension: string;
    id: number;
    name: string;
    residents: string[];
    type: string;
    url: string;
  }
}

export const CardLocations: FC<IProps> = ({ info }) => {
  const navigate = useNavigate()
  return (
    <S.Container onClick={() => navigate(`/locations/${info.id}`)}>
      <h3>{info.name}</h3>
      <p>{info.dimension}</p>
    </S.Container>
  );
}