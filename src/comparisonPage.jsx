import React from "react";
import useAircraftComparison from "./hooks/useAircraftComparison.js";
import Grid from "@mui/joy/Grid";
import { Sheet, styled } from "@mui/joy";
import BeechJet from "./assets/beechjet_400a.jpg";
import './ComparisonPage.css'; // Ensure to import your CSS

const Item = styled(Sheet)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography['body-sm'],
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: 4,
    color: theme.vars.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: theme.palette.background.level1,
    }),
}));

function ComparisonPage() {
    const { data } = useAircraftComparison();

    const metadata = {
        size: "15.6 m",
        baggageVolume: "56 cu ft",
        cabinHeight: "4.8 ft",
        cabinWidth: "4.9 ft",
        interiorSeatingLength: "13.6 ft",
    };

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6}>
                    <Item>
                        <img src={BeechJet} style={{ maxWidth: '100%' }} alt="BeechJet" />
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Item>
                        <h3>Flight Metadata</h3>
                        <p><strong>Size:</strong> {metadata.size}</p>
                        <p><strong>Baggage Volume:</strong> {metadata.baggageVolume}</p>
                        <p><strong>Cabin Height:</strong> {metadata.cabinHeight}</p>
                        <p><strong>Cabin Width:</strong> {metadata.cabinWidth}</p>
                        <p><strong>Interior Seating Length:</strong> {metadata.interiorSeatingLength}</p>
                    </Item>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6}>
                    <Item>
                        <img
                            src={BeechJet}
                            style={{
                                maxWidth: '80%',
                                display: 'block'
                            }}
                            alt="BeechJet"
                        />
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Item>
                        <h3>Flight Metadata</h3>
                        <p><strong>Size:</strong> {metadata.size}</p>
                        <p><strong>Baggage Volume:</strong> {metadata.baggageVolume}</p>
                        <p><strong>Cabin Height:</strong> {metadata.cabinHeight}</p>
                        <p><strong>Cabin Width:</strong> {metadata.cabinWidth}</p>
                        <p><strong>Interior Seating Length:</strong> {metadata.interiorSeatingLength}</p>
                    </Item>
                </Grid>
            </Grid>
        </div>
    );
}

export default ComparisonPage;
