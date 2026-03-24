import React, { useRef } from "react";
import type { Todo, TodoAddProps } from "../types/types";
const TodoAdd = ({ todolist, setTodolist }: TodoAddProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleAddTodo = () => {
    if (!inputRef.current) return;
    const newTodo: Todo = {
      name: inputRef?.current?.value,
      completed: false,
      id: Date.now().toString(),
    };

    setTodolist([...todolist, newTodo]);
    inputRef.current.value = "";
    // setTodolist(todolist);
    // setState
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div>
      TodoAdd
      <input type="text" ref={inputRef} onKeyDown={handleKeyDown} />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default TodoAdd;

// onChange
// useRef
