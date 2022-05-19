import "./styles.css";
import React from "react";
import Counter from "./components/Counter";
function App() {
  const [count, setCount] = React.useState(100);
  return (
    <div className="App">
      <Counter value={count} setCount={setCount} />
    </div>
  );
}
export default App;
