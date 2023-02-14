import * as S from './styles'
import LogoRickAndMorty from "../../../assets/LogoRickAndMorty.svg";
import { useNavigate } from "react-router-dom";

export const HeaderDesktop = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <img src={LogoRickAndMorty} alt="Logo Rick and Morty" />
      <S.MenuContainer>
        <p
          onClick={() => {
            navigate("/");
          }}
        >
          Characters
        </p>
        <p
          onClick={() => {
            navigate("/locations");
          }}
        >
          Locations
        </p>
        <p
          onClick={() => {
            navigate("/episodes");
          }}
        >
          Episodes
        </p>
      </S.MenuContainer>
    </S.Container>
  );
}