import React, { useEffect, useState }  from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Stack, Typography, Grid2, Box, Card, CardContent } from "@mui/material";
import Button from "../components/Button";
import api from "../services/auth";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

export default function SyllabusTemplate({
    color={light:"#aaa", main:'#555', dark:'#000'},
    title="Course Title",
    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin placerat elementum.",
    unit=0,
    subunit=0,
    important_unit=[],
    quiz=0,
    first_url='/comingsoon',
    level="Beginner",
    time=0,
    prereq="",
    skills=[],
    syllabus=[],
    prolog="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin placerat elementum. Sed euismod, nunc ut.",
    published,
}) {
    const {course_name} = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        if (published) {
            api.get(`/course/href/?href=/course/${course_name}`)
            .then(res => setCourse(res.data))
            .catch(err => console.log(err));
        }
    }, [published, courseName]);

    if (!course && published) return <p>Loading...</p>;

    const {
        color: c = color,
        title: t = title,
        desc: d = desc,
        unit: u = unit,
        subunit: su = subunit,
        important_unit: iu = important_unit,
        quiz: q = quiz,
        first_url: f = first_url,
        level: l = level,
        time: ti = time,
        prereq: p = prereq,
        skills: sk = skills,
        syllabus: sy = syllabus,
        prolog: pr = prolog,
    } = course || {};
    return (
        <>
            <Stack sx={{ backgroundImage:`radial-gradient(${c.light} 1.5px, transparent 0)`, backgroundSize:"6px 6px" }}>
                <Stack
                    px={{ xs: 4, sm: 6, md: 8 }}
                    py={5}
                    direction={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexWrap={{ xs: "wrap", sm: "nowrap" }}
                >
                    <Stack
                        alignItems={"flex-start"}
                        gap={3}
                        px={4}
                        py={3}
                        sx={{
                            backgroundColor: "#f7f7ff",
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
                                maxWidth={{ xs: "100%", md: "42vw" }}
                            >
                                <Typography
                                    fontFamily={"monospace"}
                                    fontSize={{ xs: "1.2em", md: "1.5em" }}
                                >
                                    Course
                                </Typography>
                                <Typography
                                    fontSize={{ xs: "2em", md: "2.4em" }}
                                    fontWeight={700}
                                >
                                    {t}
                                </Typography>
                                <Typography
                                    fontSize={{ xs: "1em", md: "1.2em" }}
                                >
                                    {d}
                                </Typography>
                                <Typography
                                    fontSize={{ xs: "1em", md: "1.2em" }}
                                >
                                    Termasuk {""} 
                                    <Typography
                                        component={"span"}
                                        fontSize={"inherit"}
                                        fontWeight={600}
                                    >
                                        {published?JSON.parse(iu).join(", "):iu.join(", ")}
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
                                                color: `${c.main}`,
                                                fontSize: "1.2em",
                                            }}
                                        />
                                        <Typography
                                            variant="body1"
                                            fontSize={{ xs: ".8em", sm: "1em" }}
                                            color={`${c.dark}`}
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
                                                color: `${c.main}`,
                                                fontSize: "1.2em",
                                            }}
                                        />
                                        <Typography
                                            variant="body1"
                                            fontSize={{ xs: ".8em", sm: "1em" }}
                                            color={`${c.dark}`}
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
                                                color: `${c.main}`,
                                                fontSize: "1.2em",
                                            }}
                                        />
                                        <Typography
                                            variant="body1"
                                            fontSize={{ xs: ".8em", sm: "1em" }}
                                            color={`${c.dark}`}
                                        >
                                            Kuis untuk menguji pengetahuan Anda
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Stack>
                            <Link to={f}>
                                <Button bdcolor={"#000"} sx={{ width: "5em" }} bgcolor={c.main}>
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
                            columns={{ xs: 1, sm: 1, md: 2, lg: 4 }}
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
                                            color: `${c.main}`,
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
                                        <Typography
                                            fontSize={"1.5em"}
                                            letterSpacing={-1}
                                            fontWeight={600}
                                        >
                                            {l}
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
                                            color: `${c.main}`,
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
                                        <Typography
                                            fontSize={"1.5em"}
                                            letterSpacing={-1}
                                            fontWeight={600}
                                        >
                                            {/* TODO: Make it flexible later not only hour */}
                                            {ti} hour(s)
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
                                            color: `${c.main}`,
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
                                        <Typography
                                            fontSize={"1.5em"}
                                            letterSpacing={-1}
                                            fontWeight={600}
                                        >
                                            {su}
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
                                            color: `${c.main}`,
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
                                        <Typography
                                            fontSize={"1.5em"}
                                            letterSpacing={-1}
                                            fontWeight={600}
                                        >
                                            {p}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Grid2>
                        </Grid2>
                    </Stack>
                </Stack>
            </Stack>
            <Grid2
                container
                justifyContent={"center"}
                alignItems={"center"}
                columns={{xs: 1, sm: 4}}
                px={{xs:5, sm: 0}}
                py={3}
                gap={6}
            >
                {prolog && (
                    <Grid2
                        gap={1}
                        size={2}
                    >
                        <Typography fontSize={"1.5em"} fontWeight={600}>
                            Deskripsi Kursus
                        </Typography>
                        <Typography textAlign={"justify"}>
                            {pr}
                        </Typography>
                    </Grid2>
                )}
                <Grid2 size={1} gap={1}>
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
                    >
                        {published?JSON.parse(sk).map((item, index) => (
                            <Grid2 key={index}>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    gap={1}
                                >
                                    <CheckCircleIcon
                                        sx={{
                                            color: `${c.main}`,
                                            fontSize: "1.2em",
                                        }}
                                    />
                                    <Typography
                                        variant="body1"
                                        fontSize={{ xs: ".8em", sm: "1em" }}
                                        color={`${c.dark}`}
                                    >
                                        {item}
                                    </Typography>
                                </Stack>
                            </Grid2>
                        )):
                        sk?.map((item, index) => (
                            <Grid2 key={index}>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    gap={1}
                                >
                                    <CheckCircleIcon
                                        sx={{
                                            color: `${c.main}`,
                                            fontSize: "1.2em",
                                        }}
                                    />
                                    <Typography
                                        variant="body1"
                                        fontSize={{ xs: ".8em", sm: "1em" }}
                                        color={`${c.dark}`}
                                    >
                                        {item}
                                    </Typography>
                                </Stack>
                            </Grid2>
                        ))}
                    </Grid2>
                </Grid2>
            </Grid2>
            <Stack>
                <Stack alignItems={"center"} justifyContent={"center"} my={5}>
                <Box
                    sx={{ backgroundColor: "#fff", border: "1px solid #000" }}
                    width={"80vw"}
                >
                    <Stack borderBottom={"1px solid #000"} px={5} py={2}>
                        <Typography
                            variant="h5"
                            sx={{ fontWeight: "bold" }}
                            textAlign={{
                                xs: "left",
                                sm: "left",
                                md: "left",
                            }}
                        >
                            Silabus: {t}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            {u} units • {su}{" "}
                            lessons • {q} quizzes
                        </Typography>
                    </Stack>
                    <Grid2 container>
                        {sy.map((item, index) => (
                            <Grid2 key={index} width={"100%"}>
                                <Card
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        px: { xs: 2, sm: 3, md: 5 },
                                        py: 2,
                                        borderBottom:
                                            index !==
                                            syllabus.length - 1
                                                ? "1px solid #000"
                                                : "none",
                                    }}
                                >
                                    <Stack
                                        mr={2}
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Typography
                                            backgroundColor={`${c.dark}`}
                                            color="#fff"
                                            sx={{
                                                width: "2.5em",
                                                aspectRatio: "1/1",
                                                borderRadius: "50%",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                fontWeight: "bold",
                                            }}
                                            fontSize={"1em"}
                                        >
                                            {index + 1}
                                        </Typography>
                                    </Stack>
                                    <CardContent>
                                        <Typography
                                            variant="h6"
                                            sx={{ fontWeight: "bold" }}
                                            textAlign={{
                                                xs: "left",
                                                sm: "left",
                                                md: "left",
                                            }}
                                        >
                                            {item.point}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            {item.desc}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid2>
                        ))}
                    </Grid2>
                </Box>
            </Stack>
            </Stack>
        </>
    );
}