import { Stack, Typography, Button } from "@mui/material";
import Accordion from "./Accordion";
import { MathJax } from "better-react-mathjax";

export default function Problem({ title, equation, children, instruction, note, accordion_text="Solution", sx }) {
    return (
        <>
            <Stack sx={{ ...sx }}>
                <Typography fontWeight={600} fontSize={'1.2em'} mt={1}>{title}</Typography>
                <Stack
                    px={3}
                    py={2}
                    gap={3}
                    sx={{ backgroundColor: "#fff", border: "1px solid #000" }}
                >
                    {instruction && (
                        <Typography fontSize={"1em"}>
                            <MathJax>{instruction}</MathJax>
                        </Typography>
                    )}
                    {equation && (
                        <Typography fontSize={"1.2em"} sx={{overflowX:"auto", overflowY: "hidden"}}>
                            <MathJax>{equation}</MathJax>
                        </Typography>
                    )}
                    {note && (
                        <Typography fontSize={"1em"} fontWeight={600}>
                            <MathJax>{note}</MathJax>
                        </Typography>
                    )}
                    <Stack>
                        <Accordion
                            question={
                                <Typography fontWeight={750}>{accordion_text}</Typography>
                            }
                            answer={ <>{children}</> }
                            bgcolor_title="inherit"
                            color_title="kurai_ao"
                            bgcolor_text="inherit"
                            color_text="#000"
                            nopadding
                            nohover
                            rawinput
                            sx={{
                                boxShadow: 0, maxWidth: "100%", border:"none",
                                "title":{
                                    padding:0,
                                },
                                "text":{
                                    padding:0,
                                    overflowX: "auto"
                                },
                            }}
                        />
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}
