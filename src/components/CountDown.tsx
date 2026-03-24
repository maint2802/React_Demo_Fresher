import React, { useEffect, useState, memo } from "react";
import type { CountDownProps } from "../types/types";
const CountDown = ({ callback }: CountDownProps) => {
  console.log("render CountDown");

  const [countDown, setCountDown] = useState<number>(3);

  useEffect(() => {
    if (countDown == 0) return;
    setTimeout(() => {
      setCountDown((preState) => preState - 1);
    }, 1000);
  });

  callback(10);

  return <div>{countDown}</div>;
};

export default React.memo(CountDown);

// closure

// React.memo : HOC higher order component
