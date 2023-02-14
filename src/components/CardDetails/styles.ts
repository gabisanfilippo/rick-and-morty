import styled from "styled-components";

interface IProps {
  cursor: string;
}

export const Container = styled.div<IProps>`
  margin-left: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid var(--color-four);
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: ${({ cursor }) => cursor};
  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: 0.15px;
    color: var(--black);
    margin-bottom: 0.5rem;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    letter-spacing: 0.25px;
    color: var(--color-four);
  }
`;