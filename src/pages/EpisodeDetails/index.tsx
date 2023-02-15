import { FaArrowLeft } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import { useNavigate, useParams } from 'react-router-dom';
import { CardCharacterRequest } from '../../components/CardCharacterRequest';
import { Footer } from '../../components/global/Footer';
import { HeaderDesktop } from '../../components/global/HeaderDesktop';
import { HeaderMobile } from '../../components/global/HeaderMobile';
import { useGetEpisodeById } from '../../services/GET/useGetEpisodeById';
import * as S from './styles'
import RickLoading from "../../assets/RickLoading.gif";
import RickAndMortyError from "../../assets/RickAndMortyError.png";

export const EpisodeDetails = () => {
  const params = useParams<{ id: any }>();
  const navigate = useNavigate();
  const { episodeInfo, isErrorEpisode, isLoadingEpisode } = useGetEpisodeById(params.id)
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
      {isLoadingEpisode ? (
        <S.LoadingContainer>
          <img src={RickLoading} alt="Gif do Rick" />
          Loading...
        </S.LoadingContainer>
      ) : isErrorEpisode ? (
        <S.LoadingContainer>
          <img src={RickAndMortyError} alt="Rick and Morty no Portal" />
          Oops! It seems that we are in a dimension that we cannot see the
          others! But don't worry, we'll fix it soon.
        </S.LoadingContainer>
      ) : (
        episodeInfo && (
          <>
            <S.Header>
              <h1>{episodeInfo.name}</h1>
              <div className="flex">
                <aside>
                  <span>Episode</span>
                  <p>{episodeInfo.episode}</p>
                </aside>
                <aside>
                  <span>Date</span>
                  <p>{episodeInfo.air_date}</p>
                </aside>
              </div>
            </S.Header>
            <S.CardsContainer>
              <p className="p-title">Residents</p>
              <S.FlexContainer>
                {episodeInfo.characters.map((element: string) => {
                  let arraySplit = element.split("/");
                  let id = arraySplit[5];
                  return <CardCharacterRequest id={id} />;
                })}
              </S.FlexContainer>
            </S.CardsContainer>
          </>
        )
      )}
      <Footer />
    </S.Container>
  );
}