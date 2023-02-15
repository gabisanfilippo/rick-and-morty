import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  width: 100%;
`;

export const GoBack = styled.div`
  display: flex;
  gap: 0.5rem;
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  position: absolute;
  left: 2rem;
  top: 6rem;
  cursor: pointer;
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    height: 8rem;
  }
`;

export const Header = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  width: 100%;
  max-width: 500px;
  margin: auto;
  gap: 1rem;
  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 2.25rem;
    display: flex;
    align-items: center;
    text-align: center;
    color: #081f32;
  }
  .flex {
    display: flex;
    justify-content: space-between;
    width: 100%;
    span {
      font-style: normal;
      font-weight: 700;
      font-size: 1rem;
      letter-spacing: 0.15px;
      color: var(--black);
    }
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      letter-spacing: 0.25px;
      color: var(--color-six);
      margin-top: 0.5rem;
    }
  }
  @media (max-width: 515px) {
    padding: 4rem 1rem 2rem 1rem;
  }
`;

export const CardsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  margin: auto;
  margin-bottom: 4rem;
  .p-title {
    font-style: normal;
    font-weight: 500;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    letter-spacing: 0.15px;
    color: var(--color-four);
    text-align: center;
    margin: auto;
  }
`;

export const FlexContainer = styled.article`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`; 