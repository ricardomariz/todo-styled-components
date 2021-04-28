import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenTodosModal: () => void;
}

export function Header({ onOpenTodosModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <h1>Todo List</h1>
        <button onClick={onOpenTodosModal}>Create Todo</button>
      </Content>
    </Container>
  );
}
