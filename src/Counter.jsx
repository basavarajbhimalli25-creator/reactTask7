import { useContext } from "react";
import { CounterContext } from "./CounterContext";

function Counter() {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div className="counter-card">
      <h2>Counter</h2>

      <div className="count">
        {state.count}
      </div>

      <div className="button-group">
        <button
          className="increment"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increment
        </button>

        <button
          className="decrement"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrement
        </button>

        <button
          className="reset"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;