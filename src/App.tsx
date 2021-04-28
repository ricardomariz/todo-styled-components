import { Header } from "./components/Header";
import { TodosList } from "./components/TodosList";
import { TodosProvider } from "./hooks/useTodos";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <TodosProvider>
        <GlobalStyle />
        <Header />
        <TodosList />
      </TodosProvider>
    </>
  );
}

export default App;
