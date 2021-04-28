import { createContext, ReactNode, useContext, useState } from "react";

interface TodosProps {
  date: string;
  text: string;
  isActive: boolean;
}

interface ProviderProps {
  children: ReactNode;
}

interface TodosContextData {
  todos: TodosProps[];
  createTodos: (todo: TodosProps) => Promise<void>;
}

const TodosContext = createContext<TodosContextData>({} as TodosContextData);

export function TodosProvider({ children }: ProviderProps) {
  const [todos, setTodos] = useState<TodosProps[]>(() => {
    const todosStorage = localStorage.getItem("@todos");

    if (todosStorage) {
      return JSON.parse(todosStorage);
    }

    return [];
  });

  async function createTodos({ date, text, isActive }: TodosProps) {
    setTodos([...todos, { date, text, isActive }]);

    localStorage.setItem(
      "@todos",
      JSON.stringify([...todos, { date, text, isActive }])
    );
  }

  return (
    <TodosContext.Provider value={{ todos, createTodos }}>
      {children}
    </TodosContext.Provider>
  );
}

export function useTodos() {
  const context = useContext(TodosContext);

  return context;
}
