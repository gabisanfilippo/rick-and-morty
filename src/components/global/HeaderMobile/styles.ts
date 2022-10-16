import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  background: var(--white);
  box-shadow: 2px 0px 8px 2px rgba(0, 0, 0, 0.1);
  height: 3.75rem;
  img {
    height: 1.5rem;
    cursor: pointer;
  }
`;

export const MenuContainer = styled.div`
  height: calc(100vh - 3rem);
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 0.75rem;
  gap: 2rem;
  z-index: 50;
  p {
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    text-align: center;
    color: var(--black);
    padding: 0.5rem;
    cursor: pointer;
  }
`;