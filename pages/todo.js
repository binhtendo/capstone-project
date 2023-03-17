import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import List from "@/components/List";
import Form from "@/components/Form";
import Layout from "@/components/Layout";

export default function Todo() {
  const [todos, setTodos] = useLocalStorageState("todos", {
    defaultValue: [],
  });

  function handleAddTodo(title) {
    setTodos([
      {
        id: uid(),
        title,
        isChecked: false,
      },
      ...todos,
    ]);
  }

  function handleToggleCheckTodo(idToToggle) {
    setTodos(
      todos.map((todo) =>
        todo.id === idToToggle ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  }

  function handleDeleteTodo(idToDelete) {
    setTodos(todos.filter((todo) => todo.id !== idToDelete));
  }

  return (
    <Layout>
      <main>
        <h2>Packliste</h2>
        <Form onAddTodo={handleAddTodo} />
        <List
          todos={todos}
          onToggleCheckTodo={handleToggleCheckTodo}
          onDeleteTodo={handleDeleteTodo}
        />
      </main>
    </Layout>
  );
}