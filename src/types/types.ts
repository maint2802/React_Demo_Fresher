export type Todo = {
  name: string;
  id: string;
  completed: boolean;
};

export type TodoAddProps = {
  todolist: Todo[];
  setTodolist: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export type TodoListProps = {
  todolist: Todo[];
};

export type CountDownProps = {
  callback: (value: number) => void;
};

// type User = {
//     name: string,
//     age: number
// }

// type Admin = User & {
//     role: string
// }

export type Company = {
  name: string;
};

export type User = {
  id: number;
  username: string;
  company: Company;
};
