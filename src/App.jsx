import "./App.css";
import { Row } from "react-bootstrap";
import njLogo from "./images/njLogo.svg";
import SearchPage from "./SearchAircraft.jsx";

function App() {
  return (
    <>
      <Row>
        <header
          style={{
            color: "white",
            background: "#11275D",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 20px",
            borderBottom: "2px solid #ccc",
            width: "100%",
            boxSizing: "border-box",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <img src={njLogo} alt="Company Logo" style={{ height: "50px" }} />

          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "white",
              margin: 0,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            Aircraft Comparison Tool
          </h1>
        </header>
      </Row>

      <div
        style={{
          marginTop: "10vh",
        }}
      >
        <SearchPage />
      </div>
    </>
  );
}

export default App;
