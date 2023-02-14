import { useMediaQuery } from "react-responsive";
import { HeaderDesktop } from "../../components/global/HeaderDesktop";
import { HeaderMobile } from "../../components/global/HeaderMobile";
import { FaArrowLeft } from "react-icons/fa";
import * as S from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import RickLoading from "../../assets/RickLoading.gif";
import RickAndMortyError from "../../assets/RickAndMortyError.png";
import { useGetCharacterById } from "../../services/GET/useGetCharacterById";
import { PhotoCharacter } from "../../components/PhotoCharacter";
import { CardDetails } from "../../components/CardDetails";

export const CharacterDetails = () => {
  const params = useParams<{ id: any }>();

  const navigate = useNavigate();
  const { characterInfo, isErrorCharacter, isLoadingCharacter } =
    useGetCharacterById(params.id);

  return (
    <S.Container>
      {useMediaQuery({ minWidth: 450 }) ? <HeaderDesktop /> : <HeaderMobile />}
      <S.GoBack
        onClick={() => {
          navigate(-1);
        }}
      >
        <FaArrowLeft />
        GO BACK
      </S.GoBack>
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
            <S.PhotoContainer>
              <PhotoCharacter info={characterInfo} />
            </S.PhotoContainer>
            <S.DetailsContainer>
              <h2>Informations</h2>
              <div className="details">
                <CardDetails title={"Gender"} text={characterInfo.gender} />
                <CardDetails title={"Status"} text={characterInfo.status} />
                <CardDetails title={"Specie"} text={characterInfo.species} />
                <CardDetails
                  title={"Origin"}
                  text={characterInfo.origin.name}
                />
                <CardDetails title={"Type"} text={characterInfo.type} />
                <CardDetails
                  title={"Location"}
                  text={characterInfo.location.name}
                />
              </div>
            </S.DetailsContainer>
          </>
        )
      )}
    </S.Container>
  );
};
