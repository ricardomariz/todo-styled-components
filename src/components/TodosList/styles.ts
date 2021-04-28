import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 0px auto;

  h1 {
    text-align: center;
    padding: 2rem 0;
  }

  ul {
    list-style: none;
    padding: 1rem;

    li {
      padding: 1rem;
      border: 1px solid var(--text-body);
      word-break: break-all;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      & + li {
        margin-top: 10px;
      }

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
  }
`;
