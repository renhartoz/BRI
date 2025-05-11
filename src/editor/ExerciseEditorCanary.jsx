import React, { useState } from "react";
import {
    Stack,
    TextField,
    Typography,
    IconButton,
    Button,
} from "@mui/material";
import { MathJaxContext } from "better-react-mathjax";
import Problem from "../maths/Problem";
import Theme from "../components/Theme";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ExerciseEditorCanary() {
    const [pembahasanContent, setPembahasanContent] = useState([
        {
            type: "paragraph",
            text: "Untuk menyelesaikan soal ini, kita akan menggunakan konsep sudut berelasi.",
        },
    ]);

    const addPembahasanBlock = (type) => {
        const newBlock = {
            type,
            ...(type === "paragraph" ? { text: "" } : {}),
        };
        setPembahasanContent([...pembahasanContent, newBlock]);
    };

    const updatePembahasanBlock = (index, field, value) => {
        const updated = [...pembahasanContent];
        updated[index][field] = value;
        setPembahasanContent(updated);
    };

    const removePembahasanBlock = (index) => {
        const updated = [...pembahasanContent];
        updated.splice(index, 1);
        setPembahasanContent(updated);
    };

    return (
        <Theme>
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
                            <Typography
                                variant="h6"
                                sx={{ color: "kurai_ao.dark" }}
                            >
                                Pembahasan
                            </Typography>
                        }
                    >
                        <Stack
                            gap={2}
                        >
                            {pembahasanContent.map((block, index) => (
                                <Stack
                                    key={index}
                                    direction="row"
                                    alignItems="center"
                                    spacing={2}
                                >
                                    <TextField
                                        label="Explanation"
                                        value={block.text}
                                        onChange={(e) =>
                                            updatePembahasanBlock(
                                                index,
                                                "text",
                                                e.target.value
                                            )
                                        }
                                        variant="outlined"
                                        multiline
                                        rows={4}
                                        fullWidth
                                    />
                                    <IconButton
                                        color="error"
                                        onClick={() =>
                                            removePembahasanBlock(index)
                                        }
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </Stack>
                            ))}
                            <Button
                                variant="outlined"
                                onClick={() => addPembahasanBlock("paragraph")}
                            >
                                + Add Pembahasan
                            </Button>
                        </Stack>
                    </Problem>
                </Stack>
            </MathJaxContext>
        </Theme>
    );
}
