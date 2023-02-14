import React, { Dispatch, SetStateAction, FC } from "react";
import * as S from "./styles";
import FilterList from "../../assets/FilterList.svg";
import { useState } from "react";
import { SelectArrow } from "../global/SelectArrow";
import { OptionsGender, OptionsSpecies, OptionsStatus } from "../../utils/lists";

interface IProps {
  setFiltersToURL: Dispatch<SetStateAction<any>>;
  filtersToURL: any;
  filtersList: {
    type: string;
    name: string;
    options: { label: string; value: any; }[]
  }[]
}

export const FilterWithModal: FC<IProps> = ({
  setFiltersToURL,
  filtersToURL,
  filtersList,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <S.Container onClick={() => setIsModalOpen(true)}>
        <img src={FilterList} alt="Ícone de filtro" />
        ADVANCED FILTERS
      </S.Container>
      {isModalOpen && (
        <S.DivFlex>
          <S.ContainerMasterModal onClick={() => setIsModalOpen(false)} />
          <S.ContainerModal>
            <S.HeaderModal>
              <p>Filters</p>
              <button onClick={() => setIsModalOpen(false)}>X</button>
            </S.HeaderModal>
            <S.FiltersContainer>
              {filtersList.map((element) => {
                if (element.type === "select") {
                  return (
                  <SelectArrow
                    onChange={(Event) => {
                      setFiltersToURL({
                        ...filtersToURL,
                        [element.name]: Event.target.value,
                      });
                    }}
                    defaultValue={filtersToURL[element.name]}
                    value={filtersToURL[element.name]}
                    getValue={true}
                    name={element.name}
                    options={element.options}
                  />
                );
                }
                
              })}
            </S.FiltersContainer>
            <button onClick={() => setIsModalOpen(false)}>APPLY</button>
          </S.ContainerModal>
        </S.DivFlex>
      )}
    </>
  );
};
