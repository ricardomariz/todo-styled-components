import { Todos } from "../Todos";
import { Container } from "./styles";

export function TodosList() {
  return (
    <Container>
      <h1>Todos List</h1>
      <ul>
        <li>
          <Todos date={"2021/01/01"} isActive={true} text={"e aí amigos"} />
        </li>
      </ul>
    </Container>
  );
}
