import { FaArrowLeft } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { useNavigate, useParams } from "react-router-dom";
import { HeaderDesktop } from "../../components/global/HeaderDesktop";
import { HeaderMobile } from "../../components/global/HeaderMobile";
import { useGetLocationById } from "../../services/GET/useGetLocationById";
import RickLoading from "../../assets/RickLoading.gif";
import RickAndMortyError from "../../assets/RickAndMortyError.png";
import * as S from './styles'
import { useEffect } from "react";
import { CardCharacterRequest } from "../../components/CardCharacterRequest";
import { Footer } from "../../components/global/Footer";

export const LocationDetails = () => {
  const params = useParams<{ id: any }>();

  const navigate = useNavigate();
  const { locationInfo, isErrorLocation, isLoadingLocation } = useGetLocationById(params.id);

  useEffect(() => {console.log(locationInfo);}, [locationInfo]);
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
      {isLoadingLocation ? (
        <S.LoadingContainer>
          <img src={RickLoading} alt="Gif do Rick" />
          Loading...
        </S.LoadingContainer>
      ) : isErrorLocation ? (
        <S.LoadingContainer>
          <img src={RickAndMortyError} alt="Rick and Morty no Portal" />
          Oops! It looks like the character have been abducted. Don't worry,
          we'll rescue them soon!
        </S.LoadingContainer>
      ) : (
        locationInfo && (
          <>
            <S.Header>
              <h1>{locationInfo.name}</h1>
              <div className="flex">
                <aside>
                  <span>Type</span>
                  <p>{locationInfo.type}</p>
                </aside>
                <aside>
                  <span>Dimension</span>
                  <p>{locationInfo.dimension}</p>
                </aside>
              </div>
            </S.Header>
            <S.CardsContainer>
              <p className="p-title">Residents</p>
                  <S.FlexContainer>{locationInfo.residents.map((element: string) => {
                    let arraySplit = element.split("/")
                    let id = arraySplit[5]
                    return <CardCharacterRequest id={id} />;
              })}</S.FlexContainer>
            </S.CardsContainer>
          </>
        )
      )}
      <Footer />
    </S.Container>
  );
}