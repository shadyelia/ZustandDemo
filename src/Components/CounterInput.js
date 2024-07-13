import React, { useState } from "react";
import { useCounterStore } from "../appStore";

const CounterInput = () => {
  const [counter, setCounter] = useState(0);

  const storedCounter = useCounterStore((state) => state.counter);
  const updateCounterHandler = useCounterStore((state) => state.updateCounter);

  const setHandler = () => {
    updateCounterHandler(counter);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        paddingTop: "1rem",
      }}
    >
      <input
        type="number"
        value={counter}
        onChange={(e) => setCounter(parseInt(e.target.value))}
      />
      <button onClick={setHandler}>set</button>

      <input
        placeholder="live update"
        type="number"
        value={storedCounter}
        onChange={(e) => updateCounterHandler(parseInt(e.target.value))}
      />
    </div>
  );
};

export default CounterInput;
