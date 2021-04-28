import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { useTodos } from "../../hooks/useTodos";
import { Container } from "./styles";

interface NewTodoModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTodoModal({ isOpen, onRequestClose }: NewTodoModalProps) {
  const { createTodos } = useTodos();
  const [todoText, setTodoText] = useState("");

  async function handleNewTodoCreation(event: FormEvent) {
    event.preventDefault();

    const newTodo = {
      text: todoText,
      date: new Date().toString(),
      isActive: false,
    };

    await createTodos(newTodo);

    setTodoText("");

    onRequestClose();
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <h3>X</h3>
        </button>
        <Container>
          <h2>Create New Todo</h2>
          <form onSubmit={handleNewTodoCreation}>
            <input
              type="text"
              value={todoText}
              onChange={(event) => setTodoText(event.target.value)}
            />
            <button type="submit">Create</button>
          </form>
        </Container>
      </Modal>
    </>
  );
}
