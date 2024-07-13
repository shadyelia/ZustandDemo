import React from "react";
import { useCounterStore } from "../appStore";

const CounterOperations = () => {
  const increaseCounterHandler = useCounterStore((state) => state.increase);
  const resetCounterHandler = useCounterStore((state) => state.reset);

  return (
    <div style={{ display: "flex", gap: "1rem", justifyContent:'center' }}>
      <button onClick={increaseCounterHandler}>increase</button>
      <button onClick={resetCounterHandler}>reset</button>
    </div>
  );
};

export default CounterOperations;
