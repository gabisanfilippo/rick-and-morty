import { useMediaQuery } from "react-responsive";
import { Footer } from "../../components/global/Footer";
import { HeaderDesktop } from "../../components/global/HeaderDesktop";
import { HeaderMobile } from "../../components/global/HeaderMobile";
import PortalRickAndMorty from "../../assets/PortalRickAndMorty.svg";
import * as S from "./styles";
import { InputSearch } from "../../components/global/InputSearch";
import { SelectArrow } from "../../components/global/SelectArrow";
import { FilterWithModal } from "../../components/FilterWidthModal";
import { useState, useEffect } from "react";
import { filtersLocationsList, OptionsDimension, OptionsType } from "../../utils/lists";
import { transformObjectToParams } from "../../utils/transformObjectToParams";
import { useGetLocations } from "../../services/GET/useGetLocations";

export const Locations = () => {
  const [filtersToURL, setFiltersToURL] = useState({
    type: '',
    dimension: '',
    name: ''
  })

  let url = transformObjectToParams(filtersToURL)

  const { locationsInfo } = useGetLocations(url)

  useEffect(() => {console.log(locationsInfo);}, [locationsInfo]);
  return (
    <>
      {useMediaQuery({ minWidth: 450 }) ? <HeaderDesktop /> : <HeaderMobile />}
      <S.FlexColumn>
        <img
          src={PortalRickAndMorty}
          alt="Rick and Morty being pulled through a green portal to another dimension"
        />
        {useMediaQuery({ minWidth: 850 }) ? (
          <S.FiltersContainer>
            <div className="input-search">
              <InputSearch
                placeholder="Filter by name..."
                onChange={(Event) => {
                  setFiltersToURL({
                    ...filtersToURL,
                    name: Event.target.value,
                  });
                }}
              />
            </div>
            <div className="select">
              <SelectArrow
                onChange={(Event) => {
                  setFiltersToURL({
                    ...filtersToURL,
                    type: Event.target.value,
                  });
                }}
                defaultValue={filtersToURL.type}
                value={filtersToURL.type}
                getValue={true}
                name="type"
                options={OptionsType}
              />
            </div>
            <div className="select">
              <SelectArrow
                onChange={(Event) => {
                  setFiltersToURL({
                    ...filtersToURL,
                    dimension: Event.target.value,
                  });
                }}
                defaultValue={filtersToURL.dimension}
                value={filtersToURL.dimension}
                getValue={true}
                name="dimension"
                options={OptionsDimension}
              />
            </div>
          </S.FiltersContainer>
        ) : (
          <S.FiltersMobile>
            <div className="input-search">
              <InputSearch
                placeholder="Filter by name..."
                onChange={(Event) => {
                  setFiltersToURL({
                    ...filtersToURL,
                    name: Event.target.value,
                  });
                }}
              />
            </div>
            <FilterWithModal
              filtersToURL={filtersToURL}
              setFiltersToURL={setFiltersToURL}
              filtersList={filtersLocationsList}
            />
          </S.FiltersMobile>
        )}
      </S.FlexColumn>
      <Footer />
    </>
  );
};
