import { createContext, ReactNode, useContext, useState } from "react";

interface TodosProps {
  id: number;
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
  deleteTodo: (id: number) => Promise<void>;
  toggleCheckActive: (id: number) => Promise<void>;
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
    setTodos([...todos, { id: Math.random(), date, text, isActive }]);

    localStorage.setItem(
      "@todos",
      JSON.stringify([...todos, { id: Math.random(), date, text, isActive }])
    );
  }

  async function deleteTodo(id: number) {
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
    localStorage.setItem("@todos", JSON.stringify(newTodos));
  }

  async function toggleCheckActive(id: number) {
    const todoToBeToggled = todos.find((todo) => todo.id === id);

    if (todoToBeToggled) {
      const newTodos = todos.map((todo) => {
        if (todo === todoToBeToggled) {
          return {
            ...todo,
            isActive: !todo.isActive,
          };
        } else {
          return todo;
        }
      });
      setTodos(newTodos);
      localStorage.setItem("@todos", JSON.stringify(newTodos));
    }
  }

  return (
    <TodosContext.Provider
      value={{ todos, createTodos, deleteTodo, toggleCheckActive }}
    >
      {children}
    </TodosContext.Provider>
  );
}

export function useTodos() {
  const context = useContext(TodosContext);

  return context;
}
