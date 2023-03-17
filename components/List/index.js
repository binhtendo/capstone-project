import {
  listItemStyles,
  checkboxStyles,
  textStyles,
  cardStyles,
  buttonStyles,
} from "@/styles";

export default function List({ todos, onToggleCheckTodo, onDeleteTodo }) {
  return (
    <>
      {todos.length > 0 && (
        <div style={cardStyles}>
          <ul>
            {todos
              .slice()
              .reverse()
              .map((todo) => {
                return (
                  <li key={todo.id} style={listItemStyles}>
                    <input
                      type="checkbox"
                      checked={todo.isChecked}
                      onChange={() => {
                        onToggleCheckTodo(todo.id);
                      }}
                      style={checkboxStyles}
                    />
                    <span style={textStyles(todo.isChecked)}>{todo.title}</span>
                    <div>
                      <button
                        onClick={() => onDeleteTodo(todo.id)}
                        style={buttonStyles}
                      >
                        <span role="img" aria-label="delete">
                          🗑️
                        </span>
                      </button>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </>
  );
}
