import { FC } from 'react';
import React from 'react'
import { v4 as uuid } from 'uuid';
import * as S from './styles'
import ArrowDownSelect from "../../../assets/ArrowDownSelect.svg";
import { ChangeEvent } from 'react';

interface IProps {
  name: string;
  options: { label: string; value: any }[];
  onChange: (Event: ChangeEvent<HTMLSelectElement>) => void;
  defaultValue?: any;
  value?: any;
  getValue?: boolean;
}

export const SelectArrow: FC<IProps> = ({
  name,
  options,
  onChange,
  defaultValue,
  value,
  getValue,
}) => {
  const verifyOptionSelected = (
    item: { label: string; value: any },
    getValue: boolean | undefined
  ) => {
    if (getValue) return item.value === value ? true : false;
    return item.label === defaultValue ? true : false;
  };

  return (
    <S.Container>
      <select name={name} onChange={onChange}>
        {options.map((element: { label: string; value: any }) => {
            return (
              <option
                value={element.value}
                selected={verifyOptionSelected(element, getValue)}
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