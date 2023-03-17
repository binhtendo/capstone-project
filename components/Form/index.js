export default function Form({ onAddTodo }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formElements = event.target.elements;
    onAddTodo(formElements.todo.value);

    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo"></label>
      <input
        id="todo"
        name="todo"
        type="text"
        placeholder="Element hinzufügen"
      />
      <button>➕</button>
    </form>
  );
}
