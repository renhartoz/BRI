import React from "react";
import { Stack, Typography, Grid2 } from "@mui/material";
import { MathJax } from "better-react-mathjax";
import Problem from "../maths/Problem";
import ExerciseHeader from "./ExerciseHeader";
import exerciseData from "../data/exercise/Vektor(1).json";

let material_name = "Vektor";
let time = "5 min";

export function Vektor1() {
    const index = 0;
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material={material_name}
                title="Latihan Soal"
                time={time}
            />
            <Problem
                title={exerciseData[index].content[0].title}
                equation={exerciseData[index].content[0].equation[0].text}
                accordion_text={exerciseData[index].content[0].accordion_text}
            >
                <Stack>
                    <Typography>
                        <MathJax>{exerciseData[index].content[0].children[0].text}</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Vektor2() {
    const index = 1;
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material={material_name}
                title="Latihan Soal"
                time={time}
            />
            <Problem
                title={exerciseData[index].content[0].title}
                equation={exerciseData[index].content[0].equation[0].text}
                accordion_text={exerciseData[index].content[0].accordion_text}
            >
                <Stack>
                    <Typography>
                        <MathJax>{exerciseData[index].content[0].equation[0].text}</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}