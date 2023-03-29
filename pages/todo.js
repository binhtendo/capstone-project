import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import List from "@/components/List";
import Form from "@/components/Form";
import Layout from "@/components/Layout";
import styled from "styled-components";

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

  function handleEditTodo(idToEdit, newTitle) {
    setTodos(
      todos.map((todo) =>
        todo.id === idToEdit ? { ...todo, title: newTitle } : todo
      )
    );
  }

  return (
    <Layout>
      <main>
        <Title>Packing List</Title>
        <Form onAddTodo={handleAddTodo} />
        <List
          todos={todos}
          onToggleCheckTodo={handleToggleCheckTodo}
          onDeleteTodo={handleDeleteTodo}
          onEditTodo={handleEditTodo}
        />
      </main>
    </Layout>
  );
}

const Title = styled.h2`
  text-align: center;
  position: relative;
  font-size: 18px;
  color: #2a9d8f;
  text-shadow: 0.5px 0.5px 0.5px #264653;
  padding: 10px 20px;
`;
