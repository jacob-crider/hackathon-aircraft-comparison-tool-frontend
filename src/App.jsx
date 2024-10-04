import "./App.css";
import { Row } from "react-bootstrap";
import InteriorAircraftPage from "./InteriorAircraftPage.jsx";
import logo from "./images/NetJetslogo_2022_smaller.png";
import SearchPage from "./SearchAircraft.jsx";

function App() {
  return (
    <>
      <Row>
        <header
          style={{
            background: "#11275D",
            display: "flex",
            justifyContent: "space-between", // Keeps logo on the left and h1 on the right
            alignItems: "center", // Vertically centers content
            padding: "10px 20px", // Padding around the content
            backgroundColor: "#f5f5f5",
            borderBottom: "2px solid #ccc",
            width: "100%", // Ensures the header takes up the full width
            boxSizing: "border-box", // Ensures padding is included in the width
            position: "relative", // No absolute positioning
            overflow: "hidden", // Prevents any overflow content
          }}
        >
          <img src={logo} alt="Company Logo" style={{ height: "50px" }} />

          <h1
            style={{
              fontSize: "1.5rem", // Modern font size
              fontWeight: "bold", // Bold for emphasis
              color: "#333", // Subtle modern text color
              margin: 0, // Removes default margin
              whiteSpace: "nowrap", // Prevents text from wrapping to a new line
              overflow: "hidden", // Prevents the text from spilling out
              textOverflow: "ellipsis", // Adds ellipsis if text overflows
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
