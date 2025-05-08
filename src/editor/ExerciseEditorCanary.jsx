import React from "react";
import { Stack, TextField, Typography } from "@mui/material";
import { MathJaxContext } from "better-react-mathjax";
import Problem from "../maths/Problem";

export default function ExerciseEditorCanary() {
    return (
        <MathJaxContext>
            <Stack
                px={{ xs: 5, sm: 8, md: 10 }}
                py={4}
                gap={3}
                sx={{ backgroundColor: "#fff" }}
            >
                <Stack gap={1} direction={"column"}>
                    <TextField
                        label="Material"
                        defaultValue="Trigonometri"
                        variant="outlined"
                    />
                    <TextField
                        label="Title"
                        defaultValue="Latihan Soal"
                        variant="outlined"
                    />
                </Stack>
                <TextField
                    label="Time"
                    defaultValue="5 min"
                    variant="outlined"
                    sx={{ width: "150px" }}
                />
                <hr />
                <Problem
                    title={
                        <TextField
                            label="Problem Title"
                            defaultValue="Soal 1"
                            variant="outlined"
                        />
                    }
                    equation={
                        <TextField
                            label="Equation"
                            defaultValue="\\[\\text{Nilai } \\frac{\\sin 150^\\circ + \\sin 120^\\circ}{\\cos 210^\\circ - \\cos 300^\\circ} = \\cdots \\]"
                            variant="outlined"
                            multiline
                            rows={4}
                            sx={{ mt: 1 }}
                            fullWidth
                        />
                    }
                    accordion_text={
                        <Typography variant="h6" color="#555">
                            Pembahasan
                        </Typography>
                    }
                >
                    <Stack>
                        <Typography variant="h6" color="#555">
                            <TextField
                                label="Explanation"
                                defaultValue="Untuk menyelesaikan soal ini, kita akan menggunakan konsep sudut berelasi."
                                variant="outlined"
                                multiline
                                rows={4}
                                fullWidth
                            />
                        </Typography>
                    </Stack>
                </Problem>
            </Stack>
        </MathJaxContext>
    );
}
