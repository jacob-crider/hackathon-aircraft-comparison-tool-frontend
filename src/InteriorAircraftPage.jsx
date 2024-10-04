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

function InteriorAircraftPage({plane}) {
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
                        <Grid item xs={12}> {/* Takes full width and centers the content */}
                            <Typography variant="h5" fontWeight="bold" textAlign="center" gutterBottom>
                                {plane.FleetType}
                            </Typography>
                        </Grid>

                        <Box sx={{ textAlign: "left", marginTop: 2 }}>
                            <Grid container spacing={1}>
                                {/* Baggage Volume */}
                                <Grid item xs={6}>
                                    <Typography variant="subtitle1" fontWeight="medium" color="text.secondary">
                                        Baggage Volume:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body1">
                                        {plane.BaggageVolume} cubic feet
                                    </Typography>
                                </Grid>

                                {/* Cabin Height */}
                                <Grid item xs={6}>
                                    <Typography variant="subtitle1" fontWeight="medium" color="text.secondary">
                                        Cabin Height:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body1">
                                        {plane.CabinHeight} feet
                                    </Typography>
                                </Grid>

                                {/* Cabin Height */}
                                <Grid item xs={6}>
                                    <Typography variant="subtitle1" fontWeight="medium" color="text.secondary">
                                        Cabin Width:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body1">
                                        {plane.CabinWidth} feet
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Item>
                </Grid>
            </Grid>
        </div>
    );
}

export default InteriorAircraftPage;
