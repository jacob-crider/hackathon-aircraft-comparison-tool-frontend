import { useState } from "react";
import "./App.css";
import ComparisonPage from "./comparisonPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ComparisonPage />
    </>
  );
}

export default App;
