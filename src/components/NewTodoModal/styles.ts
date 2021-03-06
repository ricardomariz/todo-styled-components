import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    input {
      width: 200px;
      padding: 5px;
    }

    button {
      margin-top: 1rem;
      padding: 0.5rem;
      border: 0;
      background-color: var(--red);
      color: #fff;
      border-radius: 0.5rem;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;
