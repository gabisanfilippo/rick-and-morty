import * as S from './styles'
import Search from '../../../assets/Search.svg'
import React, { FC } from 'react';

interface IProps {
  border?: string;
  placeholder?: string
}

export const InputSearch: FC<IProps> = ({ border, placeholder }) => {
  return (
    <S.Container border={border}>
      <button>
        <img src={Search} alt="Lupa" />
      </button>
      <input type="text" placeholder={placeholder} />
    </S.Container>
  );
};