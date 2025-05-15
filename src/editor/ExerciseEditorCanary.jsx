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
                        <Stack gap={1}>
                            <TextField
                                placeholder="MATERIAL"
                                variant="outlined"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        fontSize: "0.875rem",
                                        color: "#555",
                                        fontWeight: "normal",
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "transparent",
                                        },
                                        "&.Mui-focused": {
                                            "& .MuiOutlinedInput-notchedOutline":
                                                {
                                                    borderColor: "primary.main",
                                                    borderWidth: "3px",
                                                },
                                        },
                                        "&:hover:not(.Mui-focused)": {
                                            "& .MuiOutlinedInput-notchedOutline":
                                                {
                                                    borderColor: "#000",
                                                },
                                        },
                                    },
                                    "& .MuiInputLabel-outlined": {
                                        color: "#555",
                                        fontWeight: "normal",
                                        "&.Mui-focused": {
                                            color: "primary.main",
                                            fontWeight: "normal",
                                        },
                                    },
                                    "& .MuiInputBase-input::placeholder": {
                                        opacity: 1,
                                    },
                                }}
                            />
                            <TextField
                                placeholder="Title"
                                variant="outlined"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        color: "#000",
                                        fontWeight: "700",
                                        fontSize: "1.5rem",
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "transparent",
                                        },
                                        "&.Mui-focused": {
                                            "& .MuiOutlinedInput-notchedOutline":
                                                {
                                                    borderColor: "primary.main",
                                                    borderWidth: "3px",
                                                },
                                        },
                                        "&:hover:not(.Mui-focused)": {
                                            "& .MuiOutlinedInput-notchedOutline":
                                                {
                                                    borderColor: "#000",
                                                },
                                        },
                                    },
                                    "& .MuiInputLabel-outlined": {
                                        color: "#000",
                                        fontWeight: "700",
                                        "&.Mui-focused": {
                                            color: "primary.main",
                                            fontWeight: "700",
                                        },
                                    },
                                    "& .MuiInputBase-input::placeholder": {
                                        opacity: 1,
                                    },
                                }}
                            />
                        </Stack>
                    </Stack>
                    <TextField
                        placeholder="X min"
                        variant="outlined"
                        sx={{
                            width: "150px",
                            "& .MuiOutlinedInput-root": {
                                color: "#555",
                                fontWeight: "normal",
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "transparent",
                                },
                                "&.Mui-focused": {
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "primary.main",
                                        borderWidth: "3px",
                                    },
                                },
                                "&:hover:not(.Mui-focused)": {
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#000",
                                    },
                                },
                            },
                            "& .MuiInputLabel-outlined": {
                                color: "#555",
                                fontWeight: "normal",
                                "&.Mui-focused": {
                                    color: "primary.main",
                                    fontWeight: "normal",
                                },
                            },
                            "& .MuiInputBase-input::placeholder": {
                                color:"#555",
                                opacity: 1,
                            },
                        }}
                    />
                    <hr />
                    <Problem
                        title={
                            <TextField
                                placeholder="Problem Title"
                                variant="outlined"
                                sx={{
                                    width: "100%",
                                    "& .MuiOutlinedInput-root": {
                                        fontWeight: "600",
                                        fontSize: "1.2em",
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "transparent",
                                        },
                                        "&.Mui-focused": {
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "primary.main",
                                                borderWidth: "3px",
                                            },
                                        },
                                        "&:hover:not(.Mui-focused)": {
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "#000",
                                            },
                                        },
                                    },
                                    "& .MuiInputBase-input::placeholder": {
                                        opacity: 1,
                                    },
                                }}
                            />
                        }
                        equation={
                            <TextField
                                label="Equation"
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
                                sx={{ color: "kurai_ao.dark", fontWeight: "750" }}
                            >
                                Pembahasan
                            </Typography>
                        }
                    >
                        <Stack gap={2}>
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
                <Stack direction={"row"} justifyContent={"flex-end"}
                    px={{ xs: 5, sm: 8, md: 10 }}
                    py={4}
                    gap={3}>
                    <Stack>
                        <Button variant="outlined">Preview</Button>
                    </Stack>
                    <Stack>
                        <Button variant="contained">Save</Button>
                    </Stack>
                    <Stack>
                        <Button variant="contained">Export</Button>
                    </Stack>
                </Stack>
            </MathJaxContext>
        </Theme>
    );
}
