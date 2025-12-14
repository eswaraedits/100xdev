import React from 'react';

export function Todos({ todos }) {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button onClick={() => {
            fetch("http://localhost:3000/completed", {
              method: "PUT",
              body: JSON.stringify({
                id: todo._id,
                title: todo.title,
                description: todo.description,
              }),
              headers: {
                "Content-Type": "application/json"
              }
            })
            .then(async (res) => {
              const json = await res.json();
              alert("updated");
            })
          }}>
            {todo.completed ? "completed" : "mark as completed"}
          </button>
        </div>
      ))}
    </div>
  );
}
