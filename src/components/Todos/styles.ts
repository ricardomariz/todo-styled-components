import styled from "styled-components";

export const Container = styled.div`
  li {
    padding: 1rem;
    border: 1px solid var(--text-body);
    word-break: break-all;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 10px;

    span {
      font-size: 0.75rem;
      color: var(--text-body);
    }

    p {
      margin-top: 0.5rem;
      color: var(--text-title);
    }
    input {
      margin-left: 1rem;
      min-height: 20px;
      min-width: 20px;
      align-self: center;
      cursor: pointer;

      @media (max-width: 720px) {
        align-self: unset;
      }
    }
  }
`;

export const UserInputs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-self: center;
  @media (max-width: 720px) {
    flex-direction: column;
  }
  input {
    margin: 10px;
  }

  button {
    border: 0;
    background: transparent;
    align-self: center;
    svg {
      margin-top: 5px;
    }
  }
`;
