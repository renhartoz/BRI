import React from "react";
import { Box, Stack, Typography, Grid2 } from "@mui/material";
import Accordion from "../components/Accordion";
import { MathJax } from "better-react-mathjax";

export default function Problem({
    title,
    equation,
    children,
    instruction,
    note,
    accordion_text = "Solution",
    option,
    sx,
}) {
    return (
        <>
            <Stack sx={{ ...sx }}>
                <Typography fontWeight={600} fontSize={"1.2em"} mt={1}>
                    {title}
                </Typography>
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
                        <Typography
                            fontSize={"1.2em"}
                            sx={{ overflowX: "auto", overflowY: "hidden" }}
                        >
                            <MathJax>{equation}</MathJax>
                        </Typography>
                    )}
                    {option && option.items.length>0 && (
                        <Stack
                            gap={option.gap || 0}
                            direction={option.direction || "column"}
                            justifyContent={option.justify || "normal"}
                            {...(option.props || {})}
                        >
                            <Grid2 container spacing={0.5} direction={"column"}>
                                {option.items.map((listItem, listIndex) => (
                                    <Grid2 key={listIndex}>
                                        <Stack
                                            direction="row"
                                            alignItems="center"
                                            gap={1}
                                        >
                                            {option.bullet === "1" ? (
                                                <Typography
                                                    sx={{
                                                        color:
                                                            option.color ||
                                                            "primary.main",
                                                        fontSize: "1.2em",
                                                    }}
                                                >
                                                    {listIndex + 1}.&nbsp;
                                                </Typography>
                                            ) : option.bullet === "a" ? (
                                                <Typography
                                                    color={
                                                        option.color ||
                                                        "primary.main"
                                                    }
                                                    fontWeight={600}
                                                >
                                                    {String.fromCharCode(
                                                        97 + listIndex
                                                    )}
                                                    .&nbsp;
                                                </Typography>
                                            ) : option.bullet === "bullet" ? (
                                                <CircleIcon
                                                    sx={{
                                                        color:
                                                            option.color ||
                                                            "primary.main",
                                                        fontSize: "0.8em",
                                                    }}
                                                />
                                            ) : (
                                                <CheckCircleIcon
                                                    sx={{
                                                        color:
                                                            option.color ||
                                                            "primary.main",
                                                        fontSize: "1.2em",
                                                    }}
                                                />
                                            )}
                                            <Typography
                                                variant="body1"
                                                fontSize={{
                                                    xs: ".8em",
                                                    sm: "1em",
                                                }}
                                                color="black_blue"
                                            >
                                                <MathJax>{listItem}</MathJax>
                                            </Typography>
                                        </Stack>
                                    </Grid2>
                                ))}
                            </Grid2>
                        </Stack>
                    )}
                    {note && (
                        <Typography fontSize={"1em"} fontWeight={600}>
                            <MathJax>{note}</MathJax>
                        </Typography>
                    )}
                    <Stack>
                        <Accordion
                            question={
                                <Typography fontWeight={750}>
                                    {accordion_text}
                                </Typography>
                            }
                            answer={<Box mt={2}>{children}</Box>}
                            bgcolor_title="inherit"
                            color_title="kurai_ao"
                            bgcolor_text="inherit"
                            color_text="#000"
                            nopadding
                            nohover
                            rawinput
                            sx={{
                                boxShadow: 0,
                                maxWidth: "100%",
                                border: "none",
                                title: {
                                    padding: 0,
                                },
                            }}
                        />
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}
