import styled from "styled-components";

export const Container = styled.footer`
  position: fixed;
  background-color: var(--white);
  bottom: 0;
  left: 0;
  height: 3.75rem;
  box-shadow: -2px 0px 8px 2px rgba(0, 0, 0, 0.1);
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  p {
    font-style: normal;
    font-weight: 700;
    font-size: 1.1rem;
    text-align: center;
    color: var(--black);
  }
  a {
    color: var(--color-two);
  }
  div {
    width: 1rem;
  }
`;