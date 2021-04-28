import { Header } from "./components/Header";
import { TodosList } from "./components/TodosList";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <TodosList />
    </>
  );
}

export default App;
