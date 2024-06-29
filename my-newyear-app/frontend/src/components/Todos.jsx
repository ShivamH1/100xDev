export function Todos({ todos }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button onClick={() => {}}>
              {todo.completed === true ? "Completed" : "Mark as Completed"}
            </button>{" "}
          </div>
        );
      })}
    </div>
  );
}
