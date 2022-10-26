import { Dispatch, FC, SetStateAction } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import * as S from './styles'

interface IProps {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalPage: number | undefined;
}

export const Pagination: FC<IProps> = ({ currentPage, setCurrentPage, totalPage }) => {
  return (
    <S.Container>
      <IoIosArrowDropleftCircle onClick={() => {
        if (totalPage) {
          if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
          }
        }
      }} />
      <p>
        {currentPage} de {totalPage}
      </p>
      <IoIosArrowDroprightCircle onClick={() => {
        if (totalPage) {
          if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1);
          }
        }
      }} />
    </S.Container>
  );
};