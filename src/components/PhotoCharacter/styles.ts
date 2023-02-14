import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    border-radius: 50%;
    border: 5px solid var(--color-three);
  }
  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 3rem;
    display: flex;
    align-items: center;
    text-align: center;
    color: var(--black);
    margin-top: 1rem;
  }
`;