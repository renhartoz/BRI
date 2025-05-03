import React from "react";
import { Stack, Typography, Grid2 } from "@mui/material";
import { MathJax } from "better-react-mathjax";
import Problem from "../maths/Problem";
import ExerciseHeader from "./ExerciseHeader";

export function Trigono1() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Trigonometri"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 1"}
                equation={
                    "\\[\\text{Nilai } \\frac{\\sin 150^\\circ + \\sin 120^\\circ}{\\cos 210^\\circ - \\cos 300^\\circ} = \\cdots \\]"
                }
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography variant="h6" color="#555">
                        Untuk menyelesaikan soal ini, kita akan menggunakan
                        konsep sudut berelasi.
                    </Typography>
                    <Typography>
                        <MathJax>
                            {`
                            \\[
                                \\begin{align}
                                    \\frac{\\sin 150^\\circ + \\sin 120^\\circ}{\\cos 210^\\circ - \\cos 300^\\circ} 
                                    &= \\frac{\\sin(180^\\circ - 30^\\circ) + \\sin(180^\\circ - 60^\\circ)}{\\cos(180^\\circ + 30^\\circ) - \\cos(360^\\circ - 60^\\circ)} \\\\
                                    &= \\frac{\\sin 30^\\circ + \\sin 60^\\circ}{-\\cos 30^\\circ - \\cos 60^\\circ} \\\\
                                    &= \\frac{\\frac{1}{2} + \\frac{1}{2}\\sqrt{3}}{-\\frac{1}{2}\\sqrt{3} - \\frac{1}{2}} \\\\
                                    &= \\frac{\\frac{1}{2}(1 + \\sqrt{3})}{-\\frac{1}{2}(\\sqrt{3} + 1)} \\\\
                                    &= -1
                                \\end{align}
                            \\]
                        `}
                        </MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Trigono2() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Trigonometri"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 2"}
                equation={
                    "\\[ \\text{Nilai } \\cos (330^\\circ) \\tan(-315^\\circ) - \\sin(-210^\\circ) \\cot (330^\\circ) \\text{ adalah } \\cdots \\]"
                }
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>
                            {`
                        \\begin{align}
                            \\cos 330^\\circ \\tan(-315^\\circ) - \\sin(-210^\\circ) \\cot 330^\\circ 
                            &= \\cos(360^\\circ - 30^\\circ)(-\\tan(360^\\circ - 45^\\circ)) - (-\\sin(180^\\circ + 30^\\circ)) \\cot(360^\\circ - 30^\\circ) \\\\
                            &= \\cos 30^\\circ (-(-\\tan 45^\\circ)) - (-(-\\sin 30^\\circ))(-\\cot 30^\\circ) \\\\
                            &= \\cos 30^\\circ \\tan 45^\\circ - \\sin 30^\\circ \\cot 30^\\circ \\\\
                            &= \\frac{1}{2}\\sqrt{3} \\times 1 - \\frac{1}{2} \\times \\sqrt{3} \\\\
                            &= \\frac{1}{2}\\sqrt{3} - \\frac{1}{2}\\sqrt{3} \\\\
                            &= 0
                        \\end{align}
                        `}
                        </MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Trigono3() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Trigonometri"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 3"}
                equation={
                    "\\[\\text{Jika }\\tan\\alpha=\\frac{3}{4}\\text{ dengan }180^\\circ\\le\\alpha\\le270^\\circ, \\;\\text{maka nilai }\\sin\\alpha=\\dots \\]"
                }
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>
                            {`
                                \\(
                                    \\text{Perhatikan bahwa } \\alpha 
                                    \\text{ berada di kuadran III sehingga tangen sudutnya bernilai positif, sedangkan sinus sudutnya bernilai negatif.}
                                \\)
                                
                                \\(
                                    \\text{Karena } \\sin \\theta = \\frac{5}{6}, \\text{ maka bisa dianggap bahwa panjang sisi depan sudutnya } 5, \\text{ sedangkan panjang sisi miring/hipotenusanya } 6 \\text{ (} \\sin = \\frac{de}{mi} \\text{) seperti gambar berikut.}
                                \\)
                                
                                \\(
                                    \\text{Dengan demikian, } sa = \\sqrt{6^2 - 5^2} = \\sqrt{36 - 25} = \\sqrt{11}.
                                \\)
                                
                                \\(
                                    \\text{Untuk itu,}
                                \\)
                                
                                \\(
                                    \\cos \\theta = \\frac{sa}{mi} = -\\frac{\\sqrt{11}}{6} = -\\frac{1}{6}\\sqrt{11}
                                \\)
                            `}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {`
                                \\(
                                    \\text{(cosinus sudut bernilai negatif ketika berada di kuadran II)}
                                \\)
                                
                                \\(
                                    \\text{Jadi, nilai dari } \\cos \\theta = -\\frac{1}{6}\\sqrt{11}.
                                \\)
                            `}
                        </MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Trigono4() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Trigonometri"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 4"}
                equation={
                    "\\[ \\text{Diketahui segitiga } ABC \\text{ siku-siku di } B. \\text{ Jika } \\angle A = 30^\\circ \\text{ dan } BC = 6 \\text{ cm, panjang } AC = \\cdots \\text{ cm.} \\]"
                }
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>{`pending`}</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Trigono5() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Trigonometri"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 5"}
                equation={
                    <MathJax>{`\\[\\text{Bentuk sederhana } \\sin \\left( \\frac{\\pi}{2} + 2x \\right) + \\sin \\left( \\frac{\\pi}{2} - 2x \\right) \\text{ adalah } \\cdots \\]`}</MathJax>
                }
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>{`pending`}</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Trigono6() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Trigonometri"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 6"}
                equation={
                    <MathJax>{`\\[ \\text{Buktikan } (\\sin A + \\cos A)^2 - 2 \\cdot \\sin A \\cos A = 1 \\]`}</MathJax>
                }
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>{`pending`}</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Trigono7() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Trigonometri"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 7"}
                equation={
                    <MathJax>{`\\[ \\text{Bentuk sederhana dari } \\frac{\\sin x \\tan x}{\\sec x} \\text{ adalah...} \\]`}</MathJax>
                }
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>{`pending`}</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Trigono8() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Trigonometri"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 8"}
                equation={
                    <MathJax>{`\\[ \\text{Bentuk sederhana dari } \\frac{\\sin^2 x + \\cos^2 x}{\\tan^2 x - \\sec^2 x} \\text{ adalah...} \\]`}</MathJax>
                }
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>{`pending`}</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Trigono9() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Trigonometri"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 9"}
                equation={
                    <MathJax>{`\\[ \\text{Bentuk } \\cos x (\\csc x + \\tan x) \\text{ dapat disederhanakan menjadi...} \\]`}</MathJax>
                }
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>{`pending`}</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Trigono10() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Trigonometri"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 10"}
                equation={
                    <MathJax>{`\\[ \\text{Bentuk } (\\sec x + \\tan x) (1 - \\sin x) \\text{ dapat disederhanakan menjadi...} \\]`}</MathJax>
                }
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>{`pending`}</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}
