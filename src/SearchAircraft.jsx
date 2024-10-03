import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import useAircraftComparison from "./hooks/useAircraftComparison";
import ComparisonPage from "./comparisonPage";

function SearchAircraft() {
  const { data } = useAircraftComparison();
  const [selectedPlane, setSelectedPlane] = useState("");

  console.log(data);

  const handleDropdownChange = (event) => {
    setSelectedPlane(event.target.value);
    return selectedPlane;
  };

  useEffect(() => {
    data &&
      setSelectedPlane(data.filter((item) => item.FleetType === selectedPlane));
  }, [selectedPlane]);

  return (
    <Form>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Example select</label>
        <select
          onChange={(event) => {
            handleDropdownChange(event);
          }}
          class="form-control"
          id="exampleFormControlSelect1"
        >
          <option>BeechJet400 A</option>
          <option>BeechJet401 A</option>
          <option>BeechJet402 A</option>
          <option>BeechJet403 A</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Example select</label>
        <select
          onChange={(event) => {
            handleDropdownChange(event);
          }}
          class="form-control"
          id="exampleFormControlSelect1"
        >
          <option>BeechJet400 A</option>
          <option>BeechJet401 A</option>
          <option>BeechJet402 A</option>
          <option>BeechJet403 A</option>
        </select>
      </div>
      {selectedPlane && <ComparisonPage data={selectedPlane} />}
    </Form>
  );
}

export default SearchAircraft;
