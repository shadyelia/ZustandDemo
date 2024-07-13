import "./App.css";
import { useCounterStore } from "./appStore";
import CounterInput from "./Components/CounterInput";
import CounterOperations from "./Components/CounterOperations";

function App() {
  const counter = useCounterStore((state) => state.counter);

  return (
    <div className="App">
      <h1> Counter : {counter}</h1>
      <CounterOperations />
      <CounterInput />
    </div>
  );
}

export default App;
