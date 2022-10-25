import styled from "styled-components";

export const Container = styled.article`
  width: 16rem;
  height: 17rem;
  background-color: var(--white);
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  img {
    height: 100%;
  }
  .img-container{
    width: 100%;
    height: 70%;
    overflow: hidden;
  }
  @media (max-width: 590px) {
    width: 100%;
    height: 20rem;
    img{
      height: auto;
      width: 100%;
    }
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 1.2rem;
    letter-spacing: 0.15px;
    color: var(--black);
    mix-blend-mode: normal;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    letter-spacing: 0.25px;
    color: var(--grey-placeholder);
    mix-blend-mode: normal;
  }
`;