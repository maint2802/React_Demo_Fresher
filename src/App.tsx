import "./App.css";
import { useCallback, useEffect, useMemo, useState } from "react";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
import type { Todo } from "./types/types";
import CountDown from "./components/CountDown";
function App() {
  const [todolist, setTodolist] = useState<Todo[]>([]);
  // counter

  useEffect(() => {
    console.log("useEffect"); //update
    return () => {
      //
    };
  });

  useEffect(() => {
    console.log("useEffect"); //mount
  }, []);

  useEffect(() => {
    console.log("useEffect"); //each todolist updated
  }, [todolist]);

  // mount -> update -> unmount

  // ComponentDidMount()
  // ComponentDiUpdate()
  // ComponentWillUnmount()

  // const callback = () => {
  // };

  const callback = useCallback((value: number) => {
    console.log(value);
  }, []);

  // const total = useMemo(()=>{
  //     return
  // }, [products])

  // function object array: ref

  return (
    <>
      <TodoAdd todolist={todolist} setTodolist={setTodolist} />
      {(() => {
        console.log("render");
        return <div>hi</div>;
      })()}
      <TodoList todolist={todolist} />
      <CountDown callback={callback} />
    </>
  );
}

export default App;

// class component vs function component
// state vs life circle
// hooks
// jsx tsx => javascript xml

// falsy: false, NaN, 0, null, undefined, "

// const result = false && 'da login'

// state: counter
// useEffect: sideEffect (call API, timer(setTimeout, setInterval), DOM Event(scroll))

// memo: props
// useCallback vs memo
// useMemo:hooks  vs memo : HOC

// router, api, contextAPI
