import { v4 as uuidv4 } from "uuid";

const todos = [
  { task: "Practise CSS", id: uuidv4() },
  { task: "Work on Odin Projects", id: uuidv4() },
  { task: "feed the cat", id: uuidv4() },
];

function TodoList() {
  return (
    <>
      <h3>To do list </h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
