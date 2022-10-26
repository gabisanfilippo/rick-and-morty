import React, { Dispatch, SetStateAction, FC } from "react";
import * as S from "./styles";
import FilterList from "../../assets/FilterList.svg";
import { useState } from "react";
import { SelectArrow } from "../global/SelectArrow";
import { OptionsGender, OptionsStatus } from "../../utils/lists";

interface IProps {
  setFiltersToURL: Dispatch<SetStateAction<any>>;
  filtersToURL: any;
}

export const FilterWithModal: FC<IProps> = ({ setFiltersToURL, filtersToURL }) => {
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
              <SelectArrow
                onChange={() => {}}
                name="species"
                options={[{ label: "Species", value: "" }]}
              />
              <SelectArrow
                onChange={(Event) => {
                  setFiltersToURL({
                    ...filtersToURL,
                    gender: Event.target.value,
                  });
                }}
                defaultValue={filtersToURL.gender}
                value={filtersToURL.gender}
                getValue={true}
                name="gender"
                options={OptionsGender}
              />
              <SelectArrow
                onChange={(Event) => {
                  setFiltersToURL({
                    ...filtersToURL,
                    status: Event.target.value,
                  });
                }}
                defaultValue={filtersToURL.status}
                value={filtersToURL.status}
                getValue={true}
                name="status"
                options={OptionsStatus}
              />
            </S.FiltersContainer>
            <button onClick={() => setIsModalOpen(false)}>APPLY</button>
          </S.ContainerModal>
        </S.DivFlex>
      )}
    </>
  );
};
