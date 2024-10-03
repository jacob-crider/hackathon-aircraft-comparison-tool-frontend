import { useState } from "react";
import "./App.css";
import SearchAircraft from "./SearchAircraft";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SearchAircraft />
    </>
  );
}

export default App;
