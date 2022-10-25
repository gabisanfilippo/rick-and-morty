import styled from 'styled-components';

export const RickAndMorty = styled.div`
  margin-top: 1.625rem;
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    height: 12.5rem;
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