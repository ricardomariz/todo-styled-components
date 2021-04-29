import { useTodos } from "../../hooks/useTodos";
import { Todos } from "../Todos";
import { Container } from "./styles";

export function TodosList() {
  const { todos } = useTodos();
  return (
    <Container>
      <h1>My Todos</h1>
      <ul>
        {todos.length > 0 ? (
          todos.map((todo) => <Todos key={todo.id} todo={todo} />)
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
