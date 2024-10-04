import BeechJet from "./assets/beechjet_400a.jpg";
import Table from "react-bootstrap/Table";
import SearchAircraft from "./SearchAircraft.jsx";

function ComparisonPage(data) {
  return (
    <>
      <SearchAircraft />
      <Table responsive>
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
          {data &&
            data.map((plane) => (
              <tr>
                <td key={0}>
                  <img
                    src={BeechJet}
                    style={{ width: "100px", height: "100px" }}
                  />
                </td>
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
    </>
  );
}

export default ComparisonPage;

