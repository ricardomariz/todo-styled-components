import { useState } from "react";
import Modal from "react-modal";

import { Header } from "./components/Header";
import { NewTodoModal } from "./components/NewTodoModal";
import { TodosList } from "./components/TodosList";
import { TodosProvider } from "./hooks/useTodos";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

function App() {
  const [isNewTodoModalOpen, setIsNewTodoModalOpen] = useState(false);

  function handleOpenNewTodosModal() {
    setIsNewTodoModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTodoModalOpen(false);
  }

  return (
    <>
      <TodosProvider>
        <GlobalStyle />
        <Header onOpenTodosModal={handleOpenNewTodosModal} />
        <TodosList />
        <NewTodoModal
          isOpen={isNewTodoModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />
      </TodosProvider>
    </>
  );
}

export default App;
