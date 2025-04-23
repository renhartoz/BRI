import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Stack, Typography, Grid2 } from "@mui/material";

import Button from "../components/Button";
import Syllabus from "../components/Syllabus";
import Template from "./Template";
import blogData from "../data/blogs/limit.json";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { DescriptionRounded } from "@mui/icons-material";

export default function SyllabusTemplate({
    color,
    title,
    desc,
    subUnits,
    firstPageURL,
    level,
    time,
    subUnit,
    preReq,
    descSyllabus,
    skills,
    syllabusData,
}) {
    return (
        <>
            <Stack className="radialbg2">
                {/* add color for each subject */}
                <Stack
                    sx={{
                        width: "100%",
                        height: "100%",
                    }}
                    px={{ xs: 4, sm: 6, md: 10 }}
                    py={5}
                    pb={5}
                    direction={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexWrap={{ xs: "wrap", md: "nowrap" }}
                    gap={6}
                >
                    <Stack
                        alignItems={"flex-start"}
                        gap={3}
                        px={4}
                        py={3}
                        sx={{
                            backgroundColor: "#f5f5f5",
                            borderRadius: "8px",
                        }}
                    >
                        <Stack
                            direction={"row"}
                            flexWrap={"wrap"}
                            alignItems={"flex-start"}
                            gap={3}
                        >
                            <Stack
                                direction={"column"}
                                gap={2}
                                flexGrow={1}
                                maxWidth={{ xs: "100%", md: "40vw" }}
                            >
                                <Typography
                                    fontFamily={"monospace"}
                                    fontSize={{ xs: "1.2em", md: "1.5em" }}
                                >
                                    Course
                                </Typography>
                                {/* title */}
                                <Typography
                                    fontSize={{ xs: "2em", md: "2.4em" }}
                                    fontWeight={700}
                                >
                                    {title}
                                </Typography>
                                {/* desc */}
                                <Typography
                                    fontSize={{ xs: "1em", md: "1.2em" }}
                                >
                                    {desc}
                                </Typography>
                                <Typography
                                    fontSize={{ xs: "1em", md: "1.2em" }}
                                >
                                    Termasuk {/* subunits(make it in array) */}
                                    {/* change b to span */}
                                    <Typography
                                        component={"span"}
                                        fontSize={"inherit"}
                                        fontWeight={600}
                                    >
                                        {subUnits.join(", ")}
                                    </Typography>
                                    , dan lain-lain
                                </Typography>
                            </Stack>
                            <Stack
                                direction={"column"}
                                gap={3.5}
                                flexGrow={1}
                                width={"30vw"}
                                px={3}
                                py={2}
                                sx={{
                                    border: `2px solid #000`,
                                    overflow: "hidden",
                                    boxShadow: `5px 5px 0px #000`,
                                    backgroundColor: "#ffffff",
                                }}
                            >
                                <Typography
                                    fontSize={{ xs: "1em", md: "1.2em" }}
                                    fontWeight={600}
                                >
                                    Kursus ini termasuk
                                </Typography>
                                <Stack direction={"column"} gap={2}>
                                    <Stack
                                        direction="row"
                                        alignItems="center"
                                        gap={1.5}
                                        borderBottom={"1px solid #000"}
                                        pb={2}
                                    >
                                        <AutoAwesomeOutlinedIcon
                                            sx={{
                                                color: "primary.main",
                                                fontSize: "1.2em",
                                            }}
                                        />
                                        <Typography
                                            variant="body1"
                                            fontSize={{ xs: ".8em", sm: "1em" }}
                                            color="black_blue"
                                        >
                                            Konsep dasar untuk menambah
                                            pengetahuan
                                        </Typography>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        alignItems="center"
                                        gap={1.5}
                                        borderBottom={"1px solid #000"}
                                        pb={2}
                                    >
                                        <ArticleOutlinedIcon
                                            sx={{
                                                color: "primary.main",
                                                fontSize: "1.2em",
                                            }}
                                        />
                                        <Typography
                                            variant="body1"
                                            fontSize={{ xs: ".8em", sm: "1em" }}
                                            color="black_blue"
                                        >
                                            Ringkasan padat mengenai topik
                                            kursus
                                        </Typography>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        alignItems="center"
                                        gap={1.5}
                                        pb={1}
                                    >
                                        <QuizOutlinedIcon
                                            sx={{
                                                color: "primary.main",
                                                fontSize: "1.2em",
                                            }}
                                        />
                                        <Typography
                                            variant="body1"
                                            fontSize={{ xs: ".8em", sm: "1em" }}
                                            color="black_blue"
                                        >
                                            Kuis untuk menguji pengetahuan Anda
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Stack>
                            {/* url that send to first page */}
                            <Link to={firstPageURL}>
                                <Button bdcolor={"#000"} sx={{ width: "5em" }}>
                                    {" "}
                                    Mulai
                                </Button>
                            </Link>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack
                    sx={{
                        position: "relative",
                        width: "100%",
                        // mt: "-8vh",
                        "&:before": {
                            content: '""',
                            position: "absolute",
                            left: 0,
                            right: 0,
                            bottom: 0,
                            height: "50%",
                            backgroundColor: "#fff",
                            backgroundSize: "4px 4px",
                            zIndex: 0,
                        },
                    }}
                >
                    <Stack
                        justifyContent={"center"}
                        alignItems={"center"}
                        // css here
                        sx={{
                            position: "relative",
                            zIndex: 1,
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        <Grid2
                            container
                            sx={{
                                width: { xs: "88vw", sm: "80vw", md: "90vw" },
                                height: "100%",
                                backgroundColor: "#fff",
                                border: "1px solid #000",
                            }}
                            px={{ xs: 6, sm: 8, md: 4 }}
                            py={4}
                            columns={{ xs: 1, sm: 2, md: 2, lg: 4 }}
                            direction={"row"}
                            justifyContent={"space-around"}
                            alignItems={"center"}
                            spacing={6}
                        >
                            <Grid2 size={1}>
                                <Stack
                                    direction={"row"}
                                    gap={{ xs: 4, sm: 2, md: 1 }}
                                    alignItems={"center"}
                                >
                                    <LeaderboardOutlinedIcon
                                        sx={{
                                            color: "primary.main",
                                            fontSize: "4em",
                                        }}
                                    />
                                    <Stack direction={"column"}>
                                        <Typography
                                            fontFamily={"monospace"}
                                            fontSize={"1.5em"}
                                            letterSpacing={2.5}
                                        >
                                            Skill Level
                                        </Typography>
                                        {/* level */}

                                        <Typography
                                            fontSize={"1.5em"}
                                            letterSpacing={-1}
                                            fontWeight={600}
                                        >
                                            {level}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Grid2>
                            <Grid2 size={1}>
                                <Stack
                                    direction={"row"}
                                    gap={{ xs: 4, sm: 2, md: 1 }}
                                    alignItems={"center"}
                                >
                                    <AccessTimeOutlinedIcon
                                        sx={{
                                            color: "primary.main",
                                            fontSize: "4em",
                                        }}
                                    />
                                    <Stack direction={"column"}>
                                        <Typography
                                            fontFamily={"monospace"}
                                            fontSize={"1.5em"}
                                            letterSpacing={2.5}
                                        >
                                            Estimasi Waktu
                                        </Typography>
                                        {/* time */}
                                        <Typography
                                            fontSize={"1.5em"}
                                            letterSpacing={-1}
                                            fontWeight={600}
                                        >
                                            {time}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Grid2>
                            <Grid2 size={1}>
                                <Stack
                                    direction={"row"}
                                    gap={{ xs: 4, sm: 2, md: 1 }}
                                    alignItems={"center"}
                                >
                                    <ExtensionOutlinedIcon
                                        sx={{
                                            color: "primary.main",
                                            fontSize: "4em",
                                        }}
                                    />
                                    <Stack direction={"column"}>
                                        <Typography
                                            fontFamily={"monospace"}
                                            fontSize={"1.5em"}
                                            letterSpacing={2.5}
                                        >
                                            Subtopik
                                        </Typography>
                                        {/* subunit */}
                                        <Typography
                                            fontSize={"1.5em"}
                                            letterSpacing={-1}
                                            fontWeight={600}
                                        >
                                            {subUnit}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Grid2>
                            <Grid2 size={1}>
                                <Stack
                                    direction={"row"}
                                    gap={{ xs: 4, sm: 2, md: 1 }}
                                    alignItems={"center"}
                                >
                                    <FormatListBulletedIcon
                                        sx={{
                                            color: "primary.main",
                                            fontSize: "4em",
                                        }}
                                    />
                                    <Stack direction={"column"}>
                                        <Typography
                                            fontFamily={"monospace"}
                                            fontSize={"1.5em"}
                                            letterSpacing={2.5}
                                        >
                                            Prasyarat
                                        </Typography>
                                        {/* pre-requisite */}
                                        <Typography
                                            fontSize={"1.5em"}
                                            letterSpacing={-1}
                                            fontWeight={600}
                                        >
                                            {preReq}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Grid2>
                        </Grid2>
                    </Stack>
                </Stack>
            </Stack>
            <Stack
                px={{ xs: 5, sm: 7, md: 10 }}
                py={4}
                direction={"row"}
                flexWrap={{ xs: "wrap", md: "no-wrap" }}
                gap={{ xs: 5, sm: 7, md: 10 }}
                justifyContent={"center"}
            >
                <Stack
                    direction={"column"}
                    gap={1}
                    maxWidth={{ xs: "100vw", md: "50vw" }}
                >
                    <Typography fontSize={"1.5em"} fontWeight={600}>
                        Deskripsi Kursus
                    </Typography>
                    {/* desc_syllabus */}
                    <Typography textAlign={"justify"}>
                        {descSyllabus}
                    </Typography>
                </Stack>
                <Stack gap={1}>
                    <Typography
                        fontWeight={600}
                        borderBottom={"1px solid #000"}
                        pb={0.5}
                    >
                        Skill yang Anda dapatkan
                    </Typography>
                    <Grid2
                        container
                        spacing={1.6}
                        direction={"column"}
                        sx={{ width: { xs: "80vw", sm: "25vw", lg: "30vw" } }}
                    >
                        {/* skills (make it to an array) */}
                        {skills.map((item, index) => (
                            <Grid2 xs={3} sm={3} key={index}>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    gap={1}
                                >
                                    <CheckCircleIcon
                                        sx={{
                                            color: "primary.main",
                                            fontSize: "1.2em",
                                        }}
                                    />
                                    <Typography
                                        variant="body1"
                                        fontSize={{ xs: ".8em", sm: "1em" }}
                                        color="black_blue"
                                    >
                                        {item}
                                    </Typography>
                                </Stack>
                            </Grid2>
                        ))}
                    </Grid2>
                </Stack>
            </Stack>
            <Stack>
                <Syllabus syllabusData={syllabusData} />
            </Stack>
        </>
    );
}

export function LimitIntro() {
    return <Template blogData={blogData} url={"/course/limit/intro"} />;
}

export function LimitApproach() {
    return <Template blogData={blogData} url={"/course/limit/approach"} />;
}

export function LimitProperty() {
    return <Template blogData={blogData} url={"/course/limit/property"} />;
}

export function LimitEvaluation() {
    return <Template blogData={blogData} url={"/course/limit/evaluation"} />;
}

export function LimitInf() {
    return <Template blogData={blogData} url={"/course/limit/infinity"} />;
}

export function LimitAtInf() {
    return <Template blogData={blogData} url={"/course/limit/atinfinity"} />;
}

export function LimitAtInf2() {
    return <Template blogData={blogData} url={"/course/limit/atinfinity2"} />;
}
