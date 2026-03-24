import React from "react";
import type { Todo, TodoListProps } from "../types/types";
const TodoList = ({ todolist }: TodoListProps) => {
  return (
    <div>
      TodoList
      <div>
        {todolist.map((todo: Todo, index) => {
          return (
            <p key={todo.id}>
              {index + 1}: {todo.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;

// [<div>todo1</div>, <div>todo1</div>, <div>todo1</div>]

// lifing state up
