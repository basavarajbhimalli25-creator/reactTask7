import Counter from "./Counter";
import { CounterProvider } from "./CounterContext";
import "./App.css";

function App() {
  return (
    <CounterProvider>
      <div className="app">
        <h1>useContext & useReducer</h1>
        <p className="subtitle">
          React State Management
        </p>

        <Counter />
      </div>
    </CounterProvider>
  );
}

export default App;