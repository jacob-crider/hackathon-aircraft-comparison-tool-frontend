import "./App.css";
import logo from "./images/NetJetslogo_2022_smaller.png";
import SearchPage from "./SearchAircraft.jsx";

function App() {
  return (
    <>
      <header
        style={{
          display: "flex",
          padding: "10px",
          backgroundColor: "#f5f5f5",
          borderBottom: "2px solid #ccc",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1,
        }}
      >
        <img src={logo} alt="Company Logo" style={{ height: "50px" }} />
      </header>
      <div
        style={{
          marginTop: "70px",
        }}
      >
        <SearchPage />
      </div>
    </>
  );
}

export default App;
