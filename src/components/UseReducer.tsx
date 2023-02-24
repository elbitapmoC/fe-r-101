import { useReducer } from "react";

type ToDosProp = {
  id: number;
  title: string;
  complete: boolean;
};

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: true,
  },
];

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo: ToDosProp) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

const UseReducer = () => {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo: ToDosProp) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>
      {todos.map((todo: ToDosProp) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
};

export default UseReducer;
