import React from "react";
import * as S from "./styles";
import FilterList from "../../assets/FilterList.svg";
import { useState } from "react";
import { SelectArrow } from "../global/SelectArrow";

export const FilterWithModal = () => {
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
                name="species"
                options={[{ label: "Species", value: "" }]}
              />
              <SelectArrow
                name="species"
                options={[{ label: "Gender", value: "" }]}
              />
              <SelectArrow
                name="species"
                options={[{ label: "Status", value: "" }]}
              />
            </S.FiltersContainer>
            <button onClick={() => setIsModalOpen(false)}>APPLY</button>
          </S.ContainerModal>
        </S.DivFlex>
      )}
    </>
  );
};
