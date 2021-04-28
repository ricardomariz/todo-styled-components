import Modal from "react-modal";
import { Container } from "./styles";

interface NewTodoModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTodoModal({ isOpen, onRequestClose }: NewTodoModalProps) {
  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
        <Container>
          <h2>Hello</h2>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Container>
      </Modal>
    </>
  );
}
