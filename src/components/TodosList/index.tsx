import { useTodos } from "../../hooks/useTodos";
import { Todos } from "../Todos";
import { Container } from "./styles";

export function TodosList() {
  const { todos } = useTodos();
  return (
    <Container>
      <h1>Todos List</h1>
      <ul>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <Todos date={todo.date} isActive={todo.isActive} text={todo.text} />
          ))
        ) : (
          <>
            <h2>Todos not found :&#40; </h2>
            <h2>Go create one!</h2>
          </>
        )}
      </ul>
    </Container>
  );
}
