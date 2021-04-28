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
`;
