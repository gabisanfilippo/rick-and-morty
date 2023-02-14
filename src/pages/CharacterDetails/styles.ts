import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
`

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

export const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`

export const DetailsContainer = styled.section`
  margin: auto;
  margin-top: 2.625rem;
  width: max-content;
  margin-bottom: 1rem;
  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    letter-spacing: 0.15px;
    color: var(--color-four);
    margin-bottom: 2rem;
  }
  .details {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 10px;
    width: 50rem;
  }
  @media (max-width: 855px) {
    width: 100%;
    padding: 1rem;
    .details{
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
`;