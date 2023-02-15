import styled from "styled-components";

export const Container = styled.article`
  background-color: var(--color-five);
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  min-width: 15rem;
  max-width: 15rem;
  min-height: 8rem;
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.15px;
    color: var(--black);
    mix-blend-mode: normal;
  }
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    text-align: center;
    letter-spacing: 0.25px;
    color: var(--black);
    mix-blend-mode: normal;
  }
  p {
    font-style: normal;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.25px;
    color: var(--black);
    mix-blend-mode: normal;
  }
`;