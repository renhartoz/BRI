import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Stack, Typography, Grid2 } from "@mui/material";

import Button from "../components/Button";
import Syllabus from "../components/Syllabus";
import RenderContent from "../editor/RenderContent";
import Template from "./Template";
import blogData from "../data/blogs.json";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

// Architecture of the LimitIntro component
// export function LimitIntro() {
//     return (
//         <Stack px={{xs:5, sm:8, md:10}} py={4} gap={3} sx={{ backgroundColor: '#fff' }}>
//             <Stack gap={1} direction={'column'}>
//                 <Typography textTransform={'uppercase'} variant="body2" letterSpacing={-.5} color="#555">Konsep Limit Fungsi</Typography>
//                 <Typography textTransform={'capitalize'} fontWeight={700} variant="h5">Introduksi Limit</Typography>
//             </Stack>
//             <Typography color="#555">5 min</Typography>
//             <Typography>Bayangkan seorang pembalap Formula 1 melaju di lintasan. Jika kita menghitung kecepatannya setiap detik, semakin kecil interval waktunya, semakin akurat hasilnya. Tapi bagaimana kalau kita ingin tahu kecepatannya <Typography component={'span'} fontSize={'inherit'} fontWeight={600} className="highlight">tepat pada satu momen</Typography>? Seolah-olah waktu berhenti sesaat, bagaimana caranya?</Typography>
//             <Typography>Itulah pertanyaan yang juga dipikirkan Isaac Newton saat ia mengembangkan kalkulus. Dia ingin memahami bagaimana sesuatu berubah <Typography component={'span'} fontSize={'inherit'} fontWeight={600} className="highlight">pada satu titik tertentu</Typography>, bukan hanya dalam selang waktu. Dan di sinilah konsep <Typography component={'span'} fontSize={'inherit'} fontWeight={600} className="highlight">limit</Typography> lahir sebagai kunci untuk memahami perubahan yang sangat kecil tetapi sangat berarti!</Typography>
//             <Stack>
//                 <Typography>Dalam konsep Matematika, limit digunakan untuk mengukur nilai suatu fungsi ketika mendekati suatu domain tertentu. Limit dapat didefinisikan secara notasi sebagai:</Typography>
//                 <Stack gap={3} px={2} py={1} sx={{ backgroundColor: '#e0f0ff', border: '1px solid #000' }}>
//                     <Typography>
//                         <MathJax>{"Ketika \\( x \\) mendekati \\( a \\), nilai \\( f(x) \\) mendekati \\( L \\)"}</MathJax>
//                     </Typography>
//                     <Typography fontSize={'1.2em'} textAlign={'center'}>
//                         <MathJax>{"\\[ \\lim_{x \\to a} f(x) = L \\]"}</MathJax>
//                     </Typography>
//                     <Typography>
//                         <MathJax>{"dengan syarat \\(f(x)\\) sedekat mungkin dengan \\(L\\) untuk semua \\(x\\) yang cukup dekat dengan \\(a\\) dari sisi kiri dan kanan"}</MathJax>
//                     </Typography>
//                 </Stack>
//             </Stack>
//             <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} my={3}>
//                 <img src="/course/limit/limit.png" alt="limit_graph" style={{maxWidth:'80vw'}} />
//             </Stack>
//             <Typography>
//                 Jadi, apa sebenarnya arti definisi ini?
//                 Baiklah, mari kita asumsikan bahwa kita tahu bahwa batas "dekat" itu memang ada.
//                 <MathJax>
//                     {"Untuk penyederhanaan, mari kita asumsikan bahwa kita ingin membuat \\(f(x)\\) tidak lebih dari \\(0,001\\) dari \\(L\\)."}
//                 </MathJax>
//                 <MathJax>
//                     {"\\[ \\bigg|f(x) - L \\bigg| \\leq 0,001 \\]"}
//                 </MathJax>
//             </Typography>
//             <Stack>
//                 <Typography fontWeight={700} fontSize={'1.2em'} mt={2}>Contoh</Typography>
//                 <Stack gap={3} px={3} py={2} sx={{ backgroundColor: '#fafaff', border: '1px solid #000' }}>
//                     <Typography>Perkirakan nilai limit berikut</Typography>
//                     <Typography fontSize={'1.2em'} textAlign={'center'}>
//                         <MathJax>{"\\[ \\lim_{x \\to 1} \\frac{x^{2}-1}{x-1} \\]"}</MathJax>
//                     </Typography>
//                     <Stack direction={'row'} gap={3} flexWrap={'wrap'} justifyContent={'space-around'} alignItems={'center'}>
//                         <Stack>
//                             <Typography>Pendekatan dari kiri:</Typography>
//                             <Typography>
//                                 <MathJax>{"\\( f(0,9) = 1,9 \\)"}</MathJax>
//                             </Typography>
//                             <Typography>
//                                 <MathJax>{"\\( f(0,99) = 1,99 \\)"}</MathJax>
//                             </Typography>
//                             <Typography>
//                                 <MathJax>{"\\( f(0,999) = 1,999 \\)"}</MathJax>
//                             </Typography>
//                         </Stack>
//                         <Stack>
//                             <Typography>Pendekatan dari kanan:</Typography>
//                             <Typography>
//                                 <MathJax>{"\\( f(1,1) = 2,1 \\)"}</MathJax>
//                             </Typography>
//                             <Typography>
//                                 <MathJax>{"\\( f(1,01) = 2,01 \\)"}</MathJax>
//                             </Typography>
//                             <Typography>
//                                 <MathJax>{"\\( f(1,001) = 2,001 \\)"}</MathJax>
//                             </Typography>
//                         </Stack>
//                     </Stack>
//                     <Stack>
//                         <Typography>
//                             <MathJax>{"Dapat disimpulkan bahwa nilai \\(x\\) mendekati nilai \\(2\\) dari sisi kiri maupun sisi kanan. Maka dari itu:"}</MathJax>
//                         </Typography>
//                         <Typography fontSize={'1.2em'} textAlign={'center'} color="kurai_ao.main">
//                             <MathJax>{"\\[ \\lim_{x \\to 1} \\frac{x^{2}-1}{x-1} = 2 \\]"}</MathJax>
//                         </Typography>
//                     </Stack>
//                 </Stack>
//             </Stack>
//         </Stack>
//     )
// }

export function LimitSyllabus() {
    const syllabusData = {
        title: "Silabus: Limit Fungsi",
        unit: 6,
        subunit: 15,
        quiz: 8,
        content: [
            {
                point: "Konsep Dasar Limit",
                desc: "Memahami pengertian limit fungsi dan bagaimana konsep ini digunakan dalam kalkulus.",
            },
            {
                point: "Teknik Evaluasi Limit",
                desc: "Menggunakan metode matematis untuk mencari nilai limit suatu fungsi.",
            },
            {
                point: "Limit Tak Hingga",
                desc: "Menghitung limit fungsi ketika x mendekati nilai tak hingga.",
            },
            {
                point: "Limit Logaritma dan Eksponensial",
                desc: "Memahami bagaimana cara menyelesaikan limit fungsi yang mengandung logaritma dan eksponensial.",
            },
            {
                point: "Limit Fungsi Trigonometri",
                desc: "Menghitung limit fungsi trigonometri dengan berbagai teknik.",
            },
            {
                point: "Limit Menggunakan Kaidah L'Hôpital",
                desc: "Mengenal dan menggunakan aturan L'Hôpital untuk menyelesaikan limit dengan bentuk tak tentu.",
            },
        ],
    };

    return (
        <>
            <Stack
                sx={{
                    width: "100%",
                    height: "100%",
                }}
                px={{ xs: 4, sm: 6, md: 10 }}
                py={5}
                pb={12}
                className="radialbg2"
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
                            <Typography
                                fontSize={{ xs: "2em", md: "2.4em" }}
                                fontWeight={700}
                            >
                                Limit Fungsi
                            </Typography>
                            <Typography fontSize={{ xs: "1em", md: "1.2em" }}>
                                Konsep dasar dalam kalkulus dan analisis
                                mengenai hasil fungsi tersebut di dekat input
                                tertentu
                            </Typography>
                            <Typography fontSize={{ xs: "1em", md: "1.2em" }}>
                                Termasuk{" "}
                                <Typography
                                    component={"b"}
                                    fontSize={"inherit"}
                                    fontWeight={600}
                                >
                                    Teorema Limit, Limit Tentu, Limit Tak Hingga
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
                                        Konsep dasar untuk menambah pengetahuan
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
                                        Ringkasan padat mengenai topik kursus
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
                        <Link to={"/course/limit/intro"}>
                            <Button bdcolor={"#000"} sx={{ width: "5em" }}>
                                {" "}
                                Mulai
                            </Button>
                        </Link>
                    </Stack>
                </Stack>
            </Stack>
            <Stack
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                    width: "100%",
                    mt: "-8vh",
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
                                sx={{ color: "primary.main", fontSize: "4em" }}
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
                                    Intermediate
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
                                sx={{ color: "primary.main", fontSize: "4em" }}
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
                                    15 jam
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
                                sx={{ color: "primary.main", fontSize: "4em" }}
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
                                    15
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
                                sx={{ color: "primary.main", fontSize: "4em" }}
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
                                    Aljabar Lanjut
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid2>
                </Grid2>
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
                    <Typography textAlign={"justify"}>
                        Dalam matematika, limit adalah nilai yang didekati suatu
                        fungsi saat mendekati nilai tertentu. Limit sangat
                        penting dalam kalkulus dan analisis matematika. Dalam
                        kursus ini, Anda akan mempelajari dasar-dasar limit
                        fungsi dan mengeksplorasi berbagai teori mengenai limit
                        fungsi.
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
                        {[
                            "Konsep Fundamental Limit Fungsi",
                            "Penerapan Limit Fungsi",
                            "Persiapan untuk konsep derivatif",
                        ].map((item, index) => (
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
    return (
        <Template url={"/course/limit/intro"} />
    );
}

export function LimitApproach() {
    return (
        <Template url={"/course/limit/approach"} />
    );
}

export function LimitProperty() {
    return (
        <Template url={"/course/limit/property"} />
    );
}

export function LimitEvaluation() {
    return (
        <Template url={"/course/limit/evaluation"} />
    );
}

export function LimitInf() {
    return (
        <Template url={"/course/limit/infinity"} />
    );
}

export function LimitAtInf() {
    return (
        <Template url={"/course/limit/atinfinity"} />
    );
}

export function LimitAtInf2() {
    return (
        <Template url={"/course/limit/atinfinity2"} />
    );
}
