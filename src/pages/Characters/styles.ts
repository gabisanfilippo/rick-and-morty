import styled from 'styled-components';

export const RickAndMorty = styled.div`
  margin-top: 1.625rem;
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  img {
    height: 12.5rem;
  }
  button {
    width: 100%;
    background-color: var(--color-one);
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
    border-radius: 4px;
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    color: #2196f3;
  }
  @media (max-width: 650px) {
    img {
      height: 6.5rem;
    }
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  justify-content: center;
  .filter-width {
    width: 16rem;
  }
`;

export const FiltersMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  .filter-width {
    width: 90%;
  }
`;