import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .img{
    margin: auto;
    padding: 1rem;
  }
  .input-container{
    max-width: 500px;
    width: 100%;
    padding: 1rem;
    margin: auto;
    input{
      width: 100%;
    }
  }
  .pagination{
    margin: auto;
  }
`;

export const CardsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
  justify-content: center;
`

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    height: 8rem;
  }
`;