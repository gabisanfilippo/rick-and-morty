import * as S from "./styles";
import { FC } from "react";
import { useGetCharacterById } from "../../services/GET/useGetCharacterById";
import RickLoading from "../../assets/RickLoading.gif";
import RickAndMortyError from "../../assets/RickAndMortyError.png";
import { useNavigate } from "react-router-dom";

interface IProps {
  id: string;
}

export const CardCharacterRequest: FC<IProps> = ({ id }) => {
  const { characterInfo, isErrorCharacter, isLoadingCharacter } =
    useGetCharacterById(id);
  const navigate = useNavigate()
  return (
    <S.Container onClick={() => navigate(`/character/${id}`)}>
      {isLoadingCharacter ? (
        <S.LoadingContainer>
          <img src={RickLoading} alt="Gif do Rick" />
          Loading...
        </S.LoadingContainer>
      ) : isErrorCharacter ? (
        <S.LoadingContainer>
          <img src={RickAndMortyError} alt="Rick and Morty no Portal" />
          Oops! It looks like the character have been abducted. Don't worry,
          we'll rescue them soon!
        </S.LoadingContainer>
      ) : (
        characterInfo && (
          <>
            <div className="img-container">
              <img src={characterInfo.image} alt="Personagem" />
            </div>
            <S.DescriptionContainer>
              <h2>{characterInfo.name}</h2>
              <p>{characterInfo.species}</p>
            </S.DescriptionContainer>
          </>
        )
      )}
    </S.Container>
  );
};
