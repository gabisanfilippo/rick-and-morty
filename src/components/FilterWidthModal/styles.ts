import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-one);
  width: 100%;
  height: 3.5rem;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  border-radius: 4px;
  color: var(--color-two);
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  gap: 1rem;
  cursor: pointer;
`;

export const DivFlex = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContainerMasterModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
`;

export const ContainerModal = styled.div`
  position: fixed;
  background-color: var(--white);
  height: 21.875rem;
  width: 90%;
  z-index: 4;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  button {
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    color: var(--color-two);
    background-color: var(--color-one);
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
    border-radius: 4px;
    height: 2.25rem;
  }
`;

export const HeaderModal = styled.div`
  display: flex;
  button {
    padding: 0 0.5rem;
    background-color: transparent;
    box-shadow: none;
    font-style: normal;
    font-weight: 500;
    font-size: 1.25rem;
    letter-spacing: 0.15px;
    color: var(--black);
    mix-blend-mode: normal;
  }
  justify-content: space-between;
  * {
    font-style: normal;
    font-weight: 500;
    font-size: 1.25rem;
    letter-spacing: 0.15px;
    color: var(--black);
    mix-blend-mode: normal;
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  justify-content: center;
`;