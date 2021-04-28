import styled from "styled-components";

export const Container = styled.div`
  background: var(--blue);
  padding: 2rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1120px;
  margin: 0 auto;

  h1 {
    color: var(--red);
  }

  button {
    padding: 8px;
    border-radius: 0.3rem;
    border: 0;
    background: var(--blue-light);
    font-size: 1rem;
    color: var(--text-body);

    transition: filter 0.2;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
