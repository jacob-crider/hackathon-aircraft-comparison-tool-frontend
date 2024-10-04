import React from "react";
import useAircraftComparison from "./hooks/useAircraftComparison.js";
import Grid from "@mui/joy/Grid";
import {Box, Sheet, styled, Typography} from "@mui/joy";
import CL350 from "./assets/CL350_EXT.png";
import CL604 from "./assets/CL604 - EXT.png";
import CL650 from "./assets/CL650 - EXT.png";
import Citattion from "./assets/Citation Latitude - EXT.png";
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

function ExteriorAircraftPage({plane, widthProp}) {
    const images = {1: CL604, 2:Citattion, 3: CL350, 4:CL650}
    const width = {1: "90%", 2:"70%", 3: "80%", 4:"100%"}
    const metadata2 = {
        name: "BeechJet 400A",
        longRange: { 2: "1,312 sm", 4: "1,242 sm", 7: "934 sm" },
        highSpeed: { 2: "1,128 sm", 4: "1,079 sm", 7: "821 sm" },
    };
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

export default ExteriorAircraftPage;
