import React from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Box,
    Divider,
    Chip,
    useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function CourseCard({
    image,
    title,
    desc,
    level,
    duration,
    Free,
    subject,
    bgColor = "primary",
    href,
}) {
    const theme = useTheme();

    return (
        <Link to={href ? href : "/comingsoon"}>
            <Card
                sx={{
                    width: "100%",
                    border: "4px solid black",
                    boxShadow: "none",
                    position: "relative",
                    transition:
                        "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                    "&:hover": {
                        transform: "translate(-4px, -4px)",
                        boxShadow: "8px 8px 0px black",
                    },
                }}
            >
                {/* Course Image with Subject Chip */}
                <Box sx={{ position: "relative" }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        alt={title}
                        sx={{ borderBottom: "4px solid black" }}
                    />

                    {/* Subject Chip */}
                    {subject && (
                        <Chip
                            label={
                                <Typography
                                    color="#fff"
                                    fontWeight="bold"
                                    fontSize={"1em"}
                                >
                                    {subject}
                                </Typography>
                            }
                            size="small"
                            sx={{
                                position: "absolute",
                                top: 8,
                                right: 8,
                                backgroundColor: "#000",
                            }}
                        />
                    )}
                </Box>

                {/* Free Course Label */}
                <Box
                    sx={{
                        backgroundColor: Free
                            ? "secondary.main"
                            : "tertiary.main",
                        px: 1,
                        py: 0.5,
                    }}
                >
                    <Typography variant="body2" fontWeight="bold" color="#fff">
                        {Free ? "Free course" : "Paid course"}
                    </Typography>
                </Box>

                {/* Course Details */}
                <CardContent>
                    <Typography
                        variant="h6"
                        fontWeight="bold"
                        color={theme.palette[bgColor]?.main || bgColor}
                    >
                        {title}
                    </Typography>
                    {desc && (
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            mt={1}
                            sx={{
                                fontSize: "0.9em",
                                textAlign: {
                                    xs: "justify",
                                    sm: "justify",
                                    md: "justify",
                                    lg: "left",
                                },
                            }}
                        >
                            {desc}
                        </Typography>
                    )}

                    {/* Footer: Level & Duration */}
                    {duration && level && (
                        <>
                            <Divider sx={{ my: 2, borderStyle: "dotted" }} />
                            <Box display="flex" justifyContent="space-between">
                                <Typography variant="body2" fontWeight="bold">
                                    📈 {level}
                                </Typography>
                                <Typography variant="body2" fontWeight="bold">
                                    {duration}
                                </Typography>
                            </Box>
                        </>
                    )}
                </CardContent>
            </Card>
        </Link>
    );
}
