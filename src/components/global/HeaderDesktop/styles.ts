import styled from 'styled-components'

export const Container = styled.header`
  background: var(--white);
  box-shadow: -2px 0px 8px 2px rgba(0, 0, 0, 0.1);
  height: 3.75rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  img {
    height: 3.063rem;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  p {
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    text-align: center;
    color: var(--black);
  }
`;