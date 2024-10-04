import { Row } from "react-bootstrap";
import InteriorAircraftPage from "./InteriorAircraftPage.jsx";
import useAircraftComparison from "./hooks/useAircraftComparison.js";
import { useState } from "react";
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import { InputLabel } from "@mui/material";
import Grid from "@mui/joy/Grid";
import ExteriorAircraftPage from "./ExteriorAircraftPage.jsx";

function SearchPage() {
  const { data } = useAircraftComparison();
  const [selectedPlane1, setSelectedPlane1] = useState("");
  const [selectedPlane2, setSelectedPlane2] = useState("");
  const [selectedPlane3, setSelectedPlane3] = useState("");
  const [filteredData1, setFilteredData1] = useState(null);
  const [filteredData2, setFilteredData2] = useState(null);
  const [filteredData3, setFilteredData3] = useState(null);

  const handleDropdownChange1 = (event) => {
    const selectedPlane = event.target.value;
    setSelectedPlane1(selectedPlane);
    const filtered = data.filter((plane) => plane.FleetType === selectedPlane);
    setFilteredData1(filtered.length > 0 ? filtered[0] : null);
  };

  const handleDropdownChange2 = (event) => {
    const selectedPlane = event.target.value;
    console.log(`Selected plane ${selectedPlane}`);
    setSelectedPlane2(selectedPlane);
    const filtered = data.filter((plane) => plane.FleetType === selectedPlane);
    setFilteredData2(filtered.length > 0 ? filtered[0] : null);
  };

  const handleDropdownChange3 = (event) => {
    const selectedPlane = event.target.value;
    console.log(`Selected plane ${selectedPlane}`);
    setSelectedPlane3(selectedPlane);
    const filtered = data.filter((plane) => plane.FleetType === selectedPlane);
    setFilteredData3(filtered.length > 0 ? filtered[0] : null);
  };

  return (
    <>
      <Box sx={{ p: 2 }} style={{ display: "flex", width: "100%" }}>
        <Row>
          <Grid container spacing={2}>
            {/* First Dropdown */}

            <Grid item xs={12} class="col-md-3" style={{ marginRight: "5px" }}>
              <FormControl style={{ minWidth: 400 }}>
                <InputLabel id="dropdown1-label">
                  Select First Aircraft
                </InputLabel>
                <Select
                  labelId="dropdown1-label"
                  id="dropdown1"
                  value={selectedPlane1}
                  onChange={handleDropdownChange1}
                  placeholder="Select an Aircraft"
                >
                  <MenuItem value="">
                    <em>Select an Aircraft</em>
                  </MenuItem>
                  {data &&
                    data.map((plane, index) => (
                      <MenuItem key={index} value={plane.FleetType}>
                        {plane.FleetType}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Second Dropdown */}
            <Grid item xs={12} class="col-md-3" style={{ marginRight: "5px" }}>
              <FormControl style={{ minWidth: 400 }}>
                <InputLabel id="dropdown1-label">
                  Select Second Aircraft
                </InputLabel>
                <Select
                  labelId="dropdown1-label"
                  id="dropdown1"
                  value={selectedPlane2}
                  onChange={handleDropdownChange2}
                  placeholder="Select an Aircraft"
                >
                  <MenuItem value="">
                    <em>Select an Aircraft</em>
                  </MenuItem>
                  {data &&
                    data.map((plane, index) => (
                      <MenuItem key={index} value={plane.FleetType}>
                        {plane.FleetType}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Third Dropdown */}
            <Grid item xs={12} class="col-md-3">
              <FormControl style={{ minWidth: 400 }}>
                <InputLabel id="dropdown2-label">
                  Select Third Aircraft
                </InputLabel>
                <Select
                  labelId="dropdown3-label"
                  id="dropdown3"
                  value={selectedPlane3}
                  onChange={handleDropdownChange3}
                  placeholder="Select an Aircraft"
                >
                  <MenuItem value="">
                    <em>Select an Aircraft</em>
                  </MenuItem>
                  {data &&
                    data.map((plane, index) => (
                      <MenuItem key={index} value={plane.FleetType}>
                        {plane.FleetType}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Row>
      </Box>
      {/* Render ComparisonPage if both aircraft are selected */}
      {filteredData1 && filteredData2 && filteredData3 && (
        <Row>
          <ExteriorAircraftPage plane={filteredData1} />
          <ExteriorAircraftPage plane={filteredData2} />
          <ExteriorAircraftPage plane={filteredData3} />
          <InteriorAircraftPage plane={filteredData1} />
          <InteriorAircraftPage plane={filteredData2} />
          <InteriorAircraftPage plane={filteredData3} />
        </Row>
      )}
    </>
  );
}
export default SearchPage;
