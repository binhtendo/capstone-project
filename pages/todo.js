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
        <Heading>TRIP-MAPPA</Heading>
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
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
  margin-top: 80px;
  color: #2a9d8f;
  text-shadow: 0.5px 0.5px 0.5px #264653;
  padding: 10px 20px;
`;

const Heading = styled.h1`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #264653;
  justify-content: space-around;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  height: 60px;
  font-size: 20px 0px;
  z-index: 1;
  color: #e9c46a;
  margin: auto;
  text-shadow: 4px 4px 8px #2a9d8f;
  border-bottom: 1px solid #354f52;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
`;
