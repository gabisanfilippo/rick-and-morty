import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.5);
  width: 100%;
  border-radius: 8px;
  height: 3.5rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  position: relative;
  select {
    width: 100%;
    border: none;
    padding: 0.5rem 2rem;
    padding-left: 0;
    border-radius: 8px;
    color: var(--grey-placeholder);
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
  }
  img {
    position: absolute;
    right: 0;
    margin-right: 1rem;
  }
`;