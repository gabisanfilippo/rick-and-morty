import * as S from './styles'
import { FC } from 'react'
import { IoIosArrowForward } from 'react-icons/io';

interface IProps {
  title: string;
  text: string;
}

export const CardDetails: FC<IProps> = ({ title, text }) => {
  return (
    <S.Container cursor={title === "Location" ? 'pointer' : 'default'}>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      {title === "Location" && <IoIosArrowForward />}
    </S.Container>
  );
};