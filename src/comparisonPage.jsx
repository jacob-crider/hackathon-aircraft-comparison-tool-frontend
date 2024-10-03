import React, { useEffect } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Typography from "@mui/joy/Typography";
import Table from "@mui/joy/Table";
import useAircraftComparison from "./hooks/useAircraftComparison.js";
import BeechJet from "./assets/beechjet_400a.jpg";

function ComparisonPage() {
  const { data } = useAircraftComparison();

  console.log(data);

  return (
    // <AspectRatio sx={{ width: 1000, bgcolor: "white" }}>
    <Table aria-label="basic table">
      <thead>
        <tr>
          <th>Model</th>
          <th>Fleet Type</th>
          <th>Baggage Volume</th>
          <th>Cabin Height</th>
          <th>Cabin Width</th>
          <th>Company</th>
          <th>Cruise Type</th>
          <th>Fleet Id</th>
          <th>Interior Seating Length</th>
          <th>Max</th>
          <th>Med</th>
          <th>Min</th>
          <th>Overall Cabin Length</th>
          <th>PXMax</th>
          <th>PXMed</th>
          <th>PXMin</th>
          <th>Speed</th>
        </tr>
      </thead>
      <tbody style={{ color: "white" }}>
        {data.map((plane) => (
          <tr>
            <td key={0}>{BeechJet}</td>
            <td key={1}>{plane.FleetType}</td>
            <td key={2}>{plane.BaggageVolume}</td>
            <td key={3}>{plane.CabinHeight}</td>
            <td key={4}>{plane.CabinWidth}</td>
            <td key={5}>{plane.Company}</td>
            <td key={6}>{plane.CruiseType}</td>
            <td key={7}>{plane.FleetId}</td>
            <td key={9}>{plane.InteriorSeatingLength}</td>
            <td key={10}>{plane.Max}</td>
            <td key={11}>{plane.Med}</td>
            <td key={12}>{plane.Min}</td>
            <td key={13}>{plane.OverallCabinLength}</td>
            <td key={14}>{plane.PXMax}</td>
            <td key={15}>{plane.PXMed}</td>
            <td key={16}>{plane.PXMin}</td>
            <td key={17}>{plane.Speed}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    // </AspectRatio>
  );
}

export default ComparisonPage;
