import React from "react";
import useAircraftComparison from "./hooks/useAircraftComparison.js";
import Grid from "@mui/joy/Grid";
import {Box, Sheet, styled, Typography} from "@mui/joy";
import BeechJet from "./assets/beechjet_400a.jpg";
import Challenger604 from "./assets/Challenger 604 9 pax - INT.png";
import Challenger650 from "./assets/NetJets Challenger 650 - Int (Standard Lav).png";
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

function ComparisonPage({plane}) {
    const { data } = useAircraftComparison();

    const metadata = {
        size: "15.6 m",
        baggageVolume: "56 cu ft",
        cabinHeight: "4.8 ft",
        cabinWidth: "4.9 ft",
        interiorSeatingLength: "13.6 ft",
    };

    const metadata2 = {
        name: "BeechJet 400A",
        longRange: { 2: "1,312 sm", 4: "1,242 sm", 7: "934 sm" },
        highSpeed: { 2: "1,128 sm", 4: "1,079 sm", 7: "821 sm" },
    };

    const images = {"Challenger 350": Challenger604, "Challenger 650":Challenger650 }

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6}>
                    <Item>
                        <img
                            src={images[plane.FleetType]}
                            style={{
                                maxWidth: plane.FleetType === "Challenger 650" ? '100%' : '80%',
                                display: 'block'
                            }}
                            alt="BeechJet"
                        />
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Item>
                        <Typography variant="h5" fontWeight="bold" gutterBottom>
                            {plane.FleetType}
                        </Typography>

                        <Box sx={{ textAlign: "left", marginTop: 2 }}>
                            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                <thead>
                                <tr>
                                    <th></th>
                                    <th style={{ textAlign: "center" }}>2 Passengers</th>
                                    <th style={{ textAlign: "center" }}>4 Passengers</th>
                                    <th style={{ textAlign: "center" }}>7 Passengers</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><strong>Long Range</strong></td>
                                    <td style={{ textAlign: "center" }}>
                                        {plane.Min}
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        {plane.Med}
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        {plane.Max}
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>High Speed</strong></td>
                                    <td style={{ textAlign: "center" }}>
                                        {metadata2.highSpeed[2]}
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        {metadata2.highSpeed[4]}
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        {metadata2.highSpeed[7]}
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </Box>
                    </Item>
                </Grid>
            </Grid>
        </div>
    );
}

export default ComparisonPage;
