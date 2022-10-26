import * as S from './styles'
import Search from '../../../assets/Search.svg'
import React, { FC, ChangeEvent } from "react";

interface IProps {
  border?: string;
  placeholder?: string;
  onChange: (Event: ChangeEvent<HTMLInputElement>) => void;
}

export const InputSearch: FC<IProps> = ({ border, placeholder, onChange }) => {
  return (
    <S.Container border={border}>
      <button>
        <img src={Search} alt="Lupa" />
      </button>
      <input type="text" placeholder={placeholder} onChange={onChange} />
    </S.Container>
  );
};