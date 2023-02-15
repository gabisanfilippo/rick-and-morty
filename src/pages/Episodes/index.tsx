import { useMediaQuery } from "react-responsive";
import { Footer } from "../../components/global/Footer";
import { HeaderDesktop } from "../../components/global/HeaderDesktop";
import { HeaderMobile } from "../../components/global/HeaderMobile";
import RickWideningMortysEyes from '../../assets/RickWideningMortysEyes.svg'
import * as S from "./styles"
import { InputSearch } from "../../components/global/InputSearch";
import { Pagination } from "../../components/Pagination";
import { useEffect, useState } from "react";
import { transformObjectToParams } from "../../utils/transformObjectToParams";
import { useGetEpisodes } from "../../services/GET/useGetEpisodes";
import RickLoading from "../../assets/RickLoading.gif";
import RickAndMortyError from "../../assets/RickAndMortyError.png";
import { Link } from "react-router-dom";
import { CardEpisodes } from "../../components/CardEpisodes";

export const Episodes = () => {
  const [pagination, setPagination] = useState(1);
  const [filtersToURL, setFiltersToURL] = useState({ name: '' })
  
  let url = transformObjectToParams(filtersToURL)

  const { episodesInfo, isErrorEpisodes, isLoadingEpisodes } = useGetEpisodes(url, pagination)

  return (
    <S.Container>
      {useMediaQuery({ minWidth: 450 }) ? <HeaderDesktop /> : <HeaderMobile />}
      <img
        className="img"
        src={RickWideningMortysEyes}
        alt="Rick widening Morty's eyes"
      />
      <section className="input-container">
        <InputSearch
          onChange={(Event) => {
            setFiltersToURL({ ...filtersToURL, name: Event.target.value });
          }}
          placeholder={"Filter by name or episode (ex. S01 or S01E02)"}
        />
      </section>
      <section className="pagination">
        <Pagination
          currentPage={pagination}
          setCurrentPage={setPagination}
          totalPage={episodesInfo && episodesInfo.info.pages}
        />
      </section>
      <S.CardsContainer>
        {isLoadingEpisodes ? (
          <S.LoadingContainer>
            <img src={RickLoading} alt="Rick's Gif" />
            Loading...
          </S.LoadingContainer>
        ) : isErrorEpisodes ? (
          <S.LoadingContainer>
            <img src={RickAndMortyError} alt="Rick and Morty no Portal" />
            Oops! The episodes seem to have disappeared! But don't worry, let's
            search all galaxies.
          </S.LoadingContainer>
        ) : (
          <S.CardsContainer>
            {episodesInfo &&
              episodesInfo.results.map((element: any) => {
                return (
                  <Link to={`/episodes/${element.id}`}>
                    <CardEpisodes info={element} />
                  </Link>
                );
              })}
          </S.CardsContainer>
        )}
      </S.CardsContainer>
      <Footer />
    </S.Container>
  );
}