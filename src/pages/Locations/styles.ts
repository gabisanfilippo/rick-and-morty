import styled from "styled-components";

export const FlexColumn = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
`

export const FiltersContainer = styled.section`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  .input-search{
    width: 20rem;
  }
  .select{
    width: 15rem;
  }
`;

export const FiltersMobile = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 2rem 1rem;
`