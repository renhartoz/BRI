import React from "react";
import { Stack, Typography, Grid2 } from "@mui/material";

export default function ExerciseHeader({ material, title, time }) {
    return (
        <>
            <Stack gap={1} direction={"column"}>
                <Typography
                    textTransform={"uppercase"}
                    variant="body2"
                    letterSpacing={-0.5}
                    color="#555"
                >
                    {material}
                </Typography>
                <Typography
                    textTransform={"capitalize"}
                    fontWeight={700}
                    variant="h5"
                >
                    {title}
                </Typography>
            </Stack>
            <Typography color="#555">{time}</Typography>
        </>
    );
}
