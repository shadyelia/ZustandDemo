import { useCounterStore } from "../appStore";
import CounterInput from "./CounterInput";
import CounterOperations from "./CounterOperations";

const Counter = () => {
  const counter = useCounterStore((state) => state.counter);

  return (
    <div className="App">
      <h1> Counter: {counter}</h1>
      <CounterOperations />
      <CounterInput />
    </div>
  );
};

export default Counter;
