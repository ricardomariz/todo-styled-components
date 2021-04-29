import { MdDelete } from "react-icons/md";

import { useTodos } from "../../hooks/useTodos";
import { Container, UserInputs } from "./styles";

interface TodosProps {
  todo: {
    id: number;
    date: string;
    text: string;
    isActive: boolean;
  };
}

export function Todos({ todo }: TodosProps) {
  const { deleteTodo, toggleCheckActive } = useTodos();
  return (
    <Container>
      <li>
        <div>
          <span>{todo.date}</span>
          <p>{todo.text}</p>
        </div>
        <UserInputs>
          <input
            type="checkbox"
            name="active"
            id="active"
            checked={todo.isActive}
            onChange={() => toggleCheckActive(todo.id)}
          />
          <button onClick={() => deleteTodo(todo.id)}>
            <MdDelete size={"1.5rem"} />
          </button>
        </UserInputs>
      </li>
    </Container>
  );
}
