import { FC } from 'react';
import React from 'react'
import { v4 as uuid } from 'uuid';
import * as S from './styles'
import ArrowDownSelect from "../../../assets/ArrowDownSelect.svg";

interface IProps {
  name: string;
  options: { label: string; value: any; }[];
}

export const SelectArrow: FC<IProps> = ({ name, options }) => {
  return (
    <S.Container>
      <select name={name}>
        {options.map((element: { label: string; value: any }) => {
          return (
            <option
              value={element.value}
              key={`Option com nome ${element.label}, valor ${
                element.value
              } e id ${uuid()}`}
            >
              {element.label}
            </option>
          );
        })}
      </select>
      <img src={ArrowDownSelect} alt="Seta para baixo"></img>
    </S.Container>
  );
};