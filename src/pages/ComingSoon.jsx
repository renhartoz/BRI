import React, { useEffect } from "react";
import { Stack, Typography, useTheme } from "@mui/material";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import "../css/comingsoon.css";

export default function ComingSoon() {
    const navigate = useNavigate();
    useEffect(() => {
        const handleMouseMove = (e) => {
            // Normalize cursor position (-0.5 to 0.5)
            const x = (e.clientX / window.innerWidth - 0.5).toFixed(2);
            const y = (e.clientY / window.innerHeight - 0.5).toFixed(2);

            document.documentElement.style.setProperty("--parallax_bg-x", x);
            document.documentElement.style.setProperty("--parallax_bg-y", y);
            document.documentElement.style.setProperty(
                "--parallax_clouds-x",
                x * 2
            );
            document.documentElement.style.setProperty(
                "--parallax_clouds-y",
                y * 2
            );
            document.documentElement.style.setProperty(
                "--parallax_mist-x",
                x * 3
            );
            document.documentElement.style.setProperty(
                "--parallax_mist-y",
                y * -3
            );
            document.documentElement.style.setProperty(
                "--parallax_mountain-x",
                x * 0.5
            );
            document.documentElement.style.setProperty(
                "--parallax_mountain-y",
                y * -1.5
            );
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <>
            <Stack sx={{
                    height: "100vh",
                    display: { xs: "flex", sm: "none" },
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    backdropFilter: "blur(2px)",
                    color: "#fef0da",
                    px: 5,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: 1,
                }}
                justifyContent="center"
                alignItems="start">
                <Typography
                    variant="h1"
                    sx={{
                        fontFamily: "monospace",
                    }}
                >
                    Coming Soon.
                </Typography>
                <Typography
                    sx={{
                        fontFamily: "monospace",
                    }}
                >
                    This page is under development. Please check back later!
                </Typography>
                <Button
                    onClick={() => navigate("/")}
                    sx={{
                        bgcolor: "#fef0da",
                        width: "fit-content",
                        textDecoration: "none",
                        height: "1.5rem",
                        color: "#b60801",
                        fontWeight: "900",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                    }}
                >
                    Go Home &rArr;
                </Button>
            </Stack>
            <Stack
                sx={{
                    width: "100vw",
                    height: "100vh",
                    display: { xs: "flex", sm: "none" },
                    background:
                        "radial-gradient(50px at top,#749bc2 99%,#0000), radial-gradient(50px at bottom,#749bc2 99%,#0000) 50px 0",
                    backgroundSize: "100px 100px",
                    backgroundColor: "#f6f4eb",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: 0,
                }}
                justifyContent="center"
                alignItems="start"
            >
            </Stack>

            <Stack
                sx={{
                    height: "100vh",
                    display: { xs: "none", sm: "flex" },
                }}
                justifyContent="center"
                alignItems="start"
            >
                <Stack className="parallax__bg"></Stack>
                <Stack className="parallax__mountain"></Stack>
                <Stack className="parallax__mist"></Stack>
                <Stack className="parallax__cloud"></Stack>
                <Stack
                    className="parallax__button"
                    sx={{
                        width: "100vw",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh",
                    }}
                >
                    <Stack
                        sx={{
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            borderRadius: "1rem",
                            padding: "2rem",
                        }}
                    >
                        <Typography variant="h2" color="white">
                            Coming Soon.
                        </Typography>
                        <Typography variant="h6" color="white">
                            This page is under development. Please check back
                            later!
                        </Typography>
                        <Stack sx={{ alignItems: "end" }}>
                            <Button
                                onClick={() => navigate("/")}
                                sx={{
                                    bgcolor: "#fef0da",
                                    width: "fit-content",
                                    color: "#b60801",
                                    textDecoration: "none",
                                    height: "1.5rem",
                                    fontWeight: "900",
                                }}
                            >
                                Go Home &rArr;
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}
