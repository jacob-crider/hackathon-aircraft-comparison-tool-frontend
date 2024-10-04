import React from "react";
import useAircraftComparison from "./hooks/useAircraftComparison.js";
import Grid from "@mui/joy/Grid";
import {Box, Sheet, styled, Typography} from "@mui/joy";
import './ComparisonPage.css';
import CL604 from "./assets/CL604_INT.png";
import Citattion from "./assets/Citation_INT.png";
import CL350 from "./assets/CL350_INT.png";
import CL650 from "./assets/CL650_INT.png"; // Ensure to import your CSS

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

function InteriorAircraftPage({plane,widthProp}) {

    const images = {1: CL604, 2:Citattion, 3: CL350, 4:CL650}
    const width = {1: "90%", 2:"70%", 3: "80%", 4:"100%"}

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6}>
                    <Item>
                        <img
                            src={images[plane.FleetId]}
                            style={{
                                maxWidth: widthProp,
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
                                <Grid item xs={6}>
                                    <Typography variant="subtitle1" fontWeight="medium" color="text.secondary">
                                        Interior Seating Length:
                                    </Typography>
                                </Grid>

                                <Grid item xs={6}>
                                    <Typography variant="body1">
                                        {plane.InteriorSeatingLength} feet
                                    </Typography>
                                </Grid>
                                {/* Cabin Height */}
                                <Grid item xs={6}>
                                    <Typography variant="subtitle1" fontWeight="medium" color="text.secondary">
                                        Overall Cabin Length:
                                    </Typography>
                                </Grid>

                                <Grid item xs={6}>
                                    <Typography variant="body1">
                                        {plane.OverallCabinLength} feet
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
