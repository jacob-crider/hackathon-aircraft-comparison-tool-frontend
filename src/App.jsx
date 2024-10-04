import { useState } from "react";
import "./App.css";
import InteriorAircraftPage from "./InteriorAircraftPage.jsx";
import logo from "./images/NetJetslogo_2022_smaller.png";
import SearchPage from "./SearchAircraft.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
      <div>
          {/* Header Section */}
          <header style={{ display: "flex", alignItems: "left", padding: "10px", backgroundColor: "#f5f5f5", borderBottom: "2px solid #ccc" }}>
              <img src={logo} alt="Company Logo" style={{ height: "50px"}} />
          </header>
        <div>
           <SearchPage/>
        </div>
      </div>
  );
}

export default App;
