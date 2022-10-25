import styled from "styled-components";

interface IProps {
  border?: string;
}

export const Container = styled.div<IProps>`
  display: flex;
  border: ${({ border }) => (border ? border : "1px solid rgba(0, 0, 0, 0.5)")};
  width: 100%;
  border-radius: 8px;
  height: 3.5rem;
  button {
    background-color: transparent;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
  }
  input {
    border: none;
    padding: 0.5rem 1rem;
    padding-left: 0;
    border-radius: 8px;
    color: var(--grey-placeholder);
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
  }
`;