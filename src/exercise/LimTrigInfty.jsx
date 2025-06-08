import React from "react";
import { Stack, Typography, Grid2 } from "@mui/material";
import { MathJax } from "better-react-mathjax";
import Problem from "../maths/Problem";
import ExerciseHeader from "./ExerciseHeader";
import Template from "./Template";
import exerciseData from "../data/exercise/LimTrigAtInfty.json";



export function LimTrigInfty1() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit Trigonometri Tak Hingga"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 1"}
                equation={
                    "\\[ \\lim\\limits_{x \\to \\infty} \\left(\\frac{\\displaystyle\\frac{2}{x}\\tan\\left(\\frac{3}{\\sqrt{x}}\\right)}{\\displaystyle4\\sin\\left(\\frac{3}{2\\sqrt{x}}\\right)-2\\sin\\left(\\frac{3}{\\sqrt{x}}\\right)}\\right) \\]"
                }
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>{"\\begin{aligned} \
                            \\lim\\limits_{x \\to \\infty} \\left(\\frac{\\displaystyle\\frac{2}{x}\\tan\\left(\\frac{3}{\\sqrt{x}}\\right)}{\\displaystyle4\\sin\\left(\\frac{3}{2\\sqrt{x}}\\right)-2\\sin\\left(\\frac{3}{\\sqrt{x}}\\right)}\\right) &= \\lim\\limits_{x \\to \\infty} \\left(\\frac{\\displaystyle\\frac{1}{x}\\tan\\left(\\frac{3}{\\sqrt{x}}\\right)}{\\displaystyle2\\sin\\left(\\frac{3}{2\\sqrt{x}}\\right)-\\sin\\left(\\frac{3}{\\sqrt{x}}\\right)}\\right) \\\\[10pt] \
                            &= \\lim\\limits_{x \\to \\infty} \\left(\\frac{\\displaystyle\\frac{1}{x}\\tan\\left(\\frac{3}{\\sqrt{x}}\\right)}{\\displaystyle2\\sin\\left(\\frac{3}{2\\sqrt{x}}\\right)-2\\sin\\left(\\frac{3}{2\\sqrt{x}}\\right)\\cos\\left(\\frac{3}{2\\sqrt{x}}\\right)}\\right) \\\\[10pt] \
                            &= \\lim\\limits_{x \\to \\infty} \\left(\\frac{\\displaystyle\\frac{1}{x}\\tan\\left(\\frac{3}{\\sqrt{x}}\\right)}{\\displaystyle2\\sin\\left(\\frac{3}{2\\sqrt{x}}\\right)\\left[1-\\cos\\left(\\frac{3}{2\\sqrt{x}}\\right)\\right]}\\right) \\\\[10pt] \
                            &= \\frac{1}{2} \\lim\\limits_{x \\to \\infty}\\left(\\frac{\\displaystyle\\tan\\left(\\frac{3}{\\sqrt{x}}\\right)}{\\displaystyle\\sin\\left(\\frac{3}{2\\sqrt{x}}\\right)}\\right) \\lim\\limits_{x \\to \\infty} \\left(\\frac{\\displaystyle\\frac{1}{x}}{\\displaystyle 1-\\cos\\left(\\frac{3}{2\\sqrt{x}}\\right)}\\right) \\\\[10pt] \
                            &= \\frac{1}{2} (2) \\lim\\limits_{x \\to \\infty} \\left(\\frac{\\displaystyle\\frac{1}{x}}{\\displaystyle 1-\\left[1-2\\sin^{2}\\left(\\frac{3}{4\\sqrt{x}}\\right)\\right]}\\right) \\\\[10pt] \
                            &= \\lim\\limits_{x \\to \\infty} \\left(\\frac{\\displaystyle\\frac{1}{x}}{\\displaystyle 2\\sin^{2}\\left(\\frac{3}{4\\sqrt{x}}\\right)}\\right) \\\\[10pt] \
                            &= \\frac{1}{2} \\cdot \\frac{1}{\\frac{9}{16}} \\\\[10pt] \
                            &= \\frac{1}{2} \\cdot \\frac{16}{9} \\\\[10pt] \
                            &= \\frac{8}{9} \\\\[10pt] \
                        \\end{aligned}"}</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function LimTrigInfty2() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit Trigonometri Tak Hingga"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 2"}
                equation={
                    "\\[ \\lim\\limits_{x \\to \\infty} \\left( \\frac{ \\displaystyle \\cos\\left( \\frac{3}{x \\sqrt{2x}} \\right) \\sin\\left( \\frac{2}{\\sqrt{3x}} \\right) }{ \\displaystyle \\frac{4}{\\sqrt{2x}} \\cos\\left( \\frac{3}{\\sqrt{x}} \\right) } \\right) \\]"
                }
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>{"\\begin{aligned} \
                            \\lim\\limits_{x \\to \\infty} \\left( \\frac{ \\displaystyle \\cos\\left( \\frac{3}{x \\sqrt{2x}} \\right) \\sin\\left( \\frac{2}{\\sqrt{3x}} \\right) }{ \\displaystyle \\frac{4}{\\sqrt{2x}} \\cos\\left( \\frac{3}{\\sqrt{x}} \\right) } \\right) &= \\lim\\limits_{x \\to \\infty}\\left(\\frac{\\displaystyle\\sin\\left( \\frac{2}{\\sqrt{3x}} \\right)}{\\displaystyle\\frac{4}{\\sqrt{2x}}}\\right) \\lim\\limits_{x \\to \\infty} \\left( \\frac{ \\displaystyle \\cos\\left( \\frac{3}{x \\sqrt{2x}} \\right) }{ \\displaystyle \\cos\\left( \\frac{3}{\\sqrt{x}} \\right) } \\right) \\\\[10pt] \
                            &= \\frac{\\frac{2}{\\sqrt{3}}}{\\frac{4}{\\sqrt{2}}} \\left( \\frac{ \\displaystyle \\cos\\left( \\frac{3}{\\infty} \\right) }{ \\displaystyle \\cos\\left( \\frac{3}{\\infty} \\right) } \\right) \\\\[10pt] \
                            &= \\frac{2}{\\sqrt{3}} \\cdot \\frac{\\sqrt{2}}{4} \\left( \\frac{ \\displaystyle \\cos\\left( 0 \\right) }{ \\displaystyle \\cos\\left( 0 \\right) } \\right) \\\\[10pt] \
                            &= \\frac{\\sqrt{2}}{2\\sqrt{3}} \\\\[10pt] \
                            &= \\frac{\\sqrt{6}}{6} \\\\[10pt] \
                        \\end{aligned}"}</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function LimTrigInfty3() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit Trigonometri Tak Hingga"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 3"}
                equation={
                    "\\[ \\lim\\limits_{x \\to \\infty} \\left( \\frac{ \\displaystyle 1 - \\sin^2\\left( \\frac{4}{x} \\right) - \\cos\\left( \\frac{\\sqrt{2}}{x^2} \\right) }{ \\displaystyle \\frac{2}{x} \\tan\\left( \\frac{1}{3x} \\right) } \\right) \\]"
                }
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>{"\\begin{aligned} \
                            \\lim\\limits_{x \\to \\infty} \\left( \\frac{ \\displaystyle 1 - \\sin^2\\left( \\frac{4}{x} \\right) - \\cos\\left( \\frac{\\sqrt{2}}{x^2} \\right) }{ \\displaystyle \\frac{2}{x} \\tan\\left( \\frac{1}{3x} \\right) } \\right) &= \\lim\\limits_{x \\to \\infty} \\left( \\frac{ \\displaystyle 1 - \\sin^2\\left( \\frac{4}{x} \\right) - \\left[1-2\\sin^{2}\\left( \\frac{\\sqrt{2}}{2x^2} \\right)\\right] }{ \\displaystyle \\frac{2}{x} \\tan\\left( \\frac{1}{3x} \\right) } \\right) \\\\[10pt] \
                            &= \\lim\\limits_{x \\to \\infty} \\left( \\frac{ \\displaystyle 2\\sin^{2}\\left( \\frac{\\sqrt{2}}{2x^2} \\right) - \\sin^2\\left( \\frac{4}{x} \\right) }{ \\displaystyle \\frac{2}{x} \\tan\\left( \\frac{1}{3x} \\right) } \\right) \\\\[10pt] \
                            &= \\lim\\limits_{x \\to \\infty} \\left( \\frac{ \\displaystyle 2\\sin^{2}\\left( \\frac{\\sqrt{2}}{2x^2} \\right) }{ \\displaystyle \\frac{2}{x} \\tan\\left( \\frac{1}{3x} \\right) } \\right) - \\lim\\limits_{x \\to \\infty} \\left( \\frac{ \\displaystyle \\sin^2\\left( \\frac{4}{x} \\right) }{ \\displaystyle \\frac{2}{x} \\tan\\left( \\frac{1}{3x} \\right) } \\right) \\\\[10pt] \
                            &= \\frac{2}{2}\\lim\\limits_{x \\to \\infty}\\left( \\sin\\left( \\frac{\\sqrt{2}}{2x^2} \\right) \\right) \\lim\\limits_{x \\to \\infty} \\left( \\frac{ \\displaystyle \\sin\\left( \\frac{\\sqrt{2}}{2x^2} \\right) }{ \\displaystyle \\frac{1}{x} \\tan\\left( \\frac{1}{3x} \\right) } \\right) - \\lim\\limits_{x \\to \\infty} \\left( \\frac{ \\displaystyle \\sin^2\\left( \\frac{4}{x} \\right) }{ \\displaystyle \\frac{2}{x} \\tan\\left( \\frac{1}{3x} \\right) } \\right) \\\\[10pt] \
                            &= \\sin\\left( 0 \\right) \\left[\\frac{ \\displaystyle \\frac{\\sqrt{2}}{2} }{ \\displaystyle \\frac{1}{3} }\\right] - \\frac{16}{\\displaystyle 2\\cdot\\frac{1}{3}} \\\\[10pt] \
                            &= 0 - 24 \\\\[10pt] \
                            &= -24 \\\\[10pt] \
                        \\end{aligned}"}</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function LimTrigInfty4() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit Trigonometri Tak Hingga"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 4"}
                equation={
                    "\\[ \\lim\\limits_{x \\to \\infty} \\left( \\frac{ \\displaystyle \\sqrt{2} - \\sqrt{2 + \\frac{1}{2} \\sin\\left( \\frac{3}{x} \\right)} }{ \\displaystyle \\sin\\left( \\frac{2}{x} \\right) \\cos\\left( \\frac{3}{x^2} \\right) } \\right) \\]"
                }
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>{"\\begin{aligned} \
                            \\lim\\limits_{x \\to \\infty} \\left( \\frac{ \\displaystyle \\sqrt{2} - \\sqrt{2 + \\frac{1}{2} \\sin\\left( \\frac{3}{x} \\right)} }{ \\displaystyle \\sin\\left( \\frac{2}{x} \\right) \\cos\\left( \\frac{3}{x^2} \\right) } \\right) &= \\lim\\limits_{x \\to \\infty} \\left( \\frac{ \\displaystyle \\sqrt{2} - \\sqrt{2 + \\frac{1}{2} \\sin\\left( \\frac{3}{x} \\right)} }{ \\displaystyle \\sin\\left( \\frac{2}{x} \\right) \\cos\\left( \\frac{3}{x^2} \\right) } \\right) \\cdot \\lim\\limits_{x \\to \\infty} \\left(\\frac{\\displaystyle \\sqrt{2} + \\sqrt{2 + \\frac{1}{2} \\sin\\left( \\frac{3}{x} \\right)}}{\\displaystyle \\sqrt{2} + \\sqrt{2 + \\frac{1}{2} \\sin\\left( \\frac{3}{x} \\right)}}\\right) \\\\[10pt] \
                            &= \\lim\\limits_{x \\to \\infty} \\left( \\frac{ \\displaystyle 2 - \\left[2 + \\frac{1}{2} \\sin\\left( \\frac{3}{x} \\right)\\right] }{ \\displaystyle \\sin\\left( \\frac{2}{x} \\right) \\cos\\left( \\frac{3}{x^2} \\right) } \\right) \\cdot \\lim\\limits_{x \\to \\infty} \\left(\\frac{\\displaystyle 1}{\\displaystyle \\sqrt{2} + \\sqrt{2 + \\frac{1}{2} \\sin\\left( \\frac{3}{x} \\right)}}\\right) \\\\[10pt] \
                            &= \\lim\\limits_{x \\to \\infty} \\left( \\frac{ \\displaystyle -\\frac{1}{2} \\sin\\left( \\frac{3}{x} \\right) }{ \\displaystyle \\sin\\left( \\frac{2}{x} \\right) \\cos\\left( \\frac{3}{x^2} \\right) } \\right) \\cdot \\left(\\frac{\\displaystyle 1}{\\displaystyle \\sqrt{2} + \\sqrt{2 + \\frac{1}{2} \\sin\\left( 0 \\right)}}\\right) \\\\[10pt] \
                            &= -\\frac{1}{2} \\lim\\limits_{x \\to \\infty} \\left( \\frac{ \\displaystyle \\sin\\left( \\frac{3}{x} \\right) }{ \\displaystyle \\sin\\left( \\frac{2}{x} \\right)} \\right) \\lim\\limits_{x \\to \\infty}\\left(\\frac{\\displaystyle 1}{\\displaystyle \\cos\\left( \\frac{3}{x^2} \\right)}\\right) \\cdot \\left(\\frac{\\displaystyle 1}{\\displaystyle \\sqrt{2} + \\sqrt{2}} \\right) \\\\[10pt] \
                            &= -\\frac{1}{2} \\left( \\frac{3}{2} \\right) \\left( \\frac{1}{\\cos(0)} \\right) \\cdot \\left( \\frac{1}{2\\sqrt{2}} \\right) \\\\[10pt] \
                            &= -\\frac{3}{8\\sqrt{2}} \\\\[10pt] \
                            &= -\\frac{3\\sqrt{2}}{16} \
                        \\end{aligned}"}</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function LimTrigInfty5() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit Trigonometri Tak Hingga"
                title="Latihan Soal"
                time="10 min"
            />
            <Problem
                title={"Soal 5"}
                equation={
                    "\\[ \\lim\\limits_{x \\to \\infty} \\left( 2^{x-2} \\left( x^2 - x^3 \\sin\\left( \\frac{1}{x} \\right) \\right) \\sin\\left( \\frac{12}{2^{x-1}} \\right) \\right) \\]"
                }
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>{"\\begin{aligned} \
                            \\lim\\limits_{x \\to \\infty} \\left( 2^{x-2} \\left( x^2 - x^3 \\sin\\left( \\frac{1}{x} \\right) \\right) \\sin\\left( \\frac{12}{2^{x-1}} \\right) \\right) &= \\lim\\limits_{x \\to \\infty} \\left( 2^{x-2} \\sin\\left( \\frac{12}{2^{x-1}} \\right) \\right) \\lim\\limits_{x \\to \\infty} \\left( x^2 - x^3 \\sin\\left( \\frac{1}{x} \\right) \\right) \\\\[10pt] \
                            &= 2^{x-2} \\cdot \\frac{12}{2^{x-1}} \\lim\\limits_{a \\to 0} \\left( \\frac{1}{a^{2}} - \\frac{1}{a^{3}} \\sin\\left( a \\right) \\right) \\\\[10pt] \
                            &= \\frac{2^{x}}{4} \\cdot \\frac{24}{2^{x}} \\lim\\limits_{a \\to 0} \\left( \\frac{a-\\sin\\left( a \\right)}{a^{3}} \\right) \\\\[10pt] \
                            &= 6 \\left( \\frac{1}{6} \\right) \\\\[10pt] \
                            &= 1 \
                        \\end{aligned}"}</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function LimTrigInfty6() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit Trigonometri Tak Hingga"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 6"}
                equation={
                    "\\[ \\lim\\limits_{x \\to \\infty} \\left( \\cos\\left( \\frac{1}{2x} \\right) \\right)^{\\displaystyle \\frac{3x}{\\sin\\left( \\frac{1}{3x} \\right)}} \\]"
                }
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>{"\\begin{aligned} \
                            \\lim\\limits_{x \\to \\infty} \\left( \\cos\\left( \\frac{1}{2x} \\right) \\right)^{\\displaystyle \\frac{3x}{\\sin\\left( \\frac{1}{3x} \\right)}} &= \\lim\\limits_{x \\to \\infty} \\left( 1-2\\sin^{2}\\left( \\frac{1}{4x} \\right) \\right)^{\\displaystyle \\frac{3x}{\\sin\\left( \\frac{1}{3x} \\right)}} \\\\[10pt] \
                            &= \\lim\\limits_{x \\to \\infty} \\left( \\left[1-2\\sin^{2}\\left( \\frac{1}{4x} \\right) \\right]^{\\displaystyle \\frac{1}{-2\\sin^{2}\\left( \\frac{1}{4x} \\right)}}\\right)^{\\displaystyle \\frac{3x \\cdot \\left[-2\\sin^{2}\\left( \\frac{1}{4x} \\right)\\right]}{\\sin\\left( \\frac{1}{3x} \\right)}} \\\\[10pt] \
                            &= e^{ \\displaystyle\\lim\\limits_{x \\to \\infty} \\left( \\frac{-6x\\sin^{2}\\left( \\frac{1}{4x} \\right)}{\\sin\\left( \\frac{1}{3x} \\right)} \\right)} \\\\[10pt] \
                            &= e^{ \\left[ (-6) \\left( \\frac{1}{4} \\right)^{2} (3) \\right]} \\\\[10pt] \
                            &= e^{-\\frac{18}{16}} \\\\[10pt] \
                            &= e^{-\\frac{9}{8}} \
                        \\end{aligned}"}</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function LimTrigInfty7() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit Trigonometri Tak Hingga"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 7"}
                equation={
                    "\\[ \\lim\\limits_{x \\to \\infty} \\left( 1 + \\sin\\left( \\frac{1}{2x} \\right) \\right)^{ \\displaystyle \\frac{2 \\cos\\left( \\frac{1}{2x} \\right) - \\cos\\left( \\frac{1}{x} \\right)}{ \\sin\\left( \\frac{1}{x} \\right)}} \\]"
                }
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>{"\\begin{aligned} \
                            \\lim\\limits_{x \\to \\infty} \\left( 1 + \\sin\\left( \\frac{1}{2x} \\right) \\right)^{ \\displaystyle \\frac{2 \\cos\\left( \\frac{1}{2x} \\right) - \\cos\\left( \\frac{1}{x} \\right)}{\\sin\\left( \\frac{1}{x} \\right)}} &= \\lim\\limits_{x \\to \\infty} \\left( \\left[1 + \\sin\\left( \\frac{1}{2x} \\right) \\right]^{\\displaystyle \\frac{1}{\\sin\\left( \\frac{1}{2x} \\right)}} \\right)^{ \\displaystyle \\frac{\\sin \\left( \\frac{1}{2x} \\right) \\left(2 \\cos\\left( \\frac{1}{2x} \\right) - \\cos\\left( \\frac{1}{x} \\right)\\right)}{ \\sin\\left( \\frac{1}{x} \\right)}} \\\\[10pt] \
                            &= e^{ \\displaystyle\\lim\\limits_{x \\to \\infty}\\frac{\\sin\\left( \\frac{1}{2x} \\right) \\left(2 \\cos\\left( \\frac{1}{2x} \\right) - \\cos\\left( \\frac{1}{x} \\right)\\right)}{ \\sin\\left( \\frac{1}{x} \\right)}} \\\\[10pt] \
                            &= e^{ \\left[ \\left(\\frac{1}{2}\\right) \\left( 2-1 \\right) \\right]} \\\\[10pt] \
                            &= e^{\\frac{1}{2}} \
                        \\end{aligned}"}</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function LimTrigInfty8() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit Trigonometri Tak Hingga"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 8"}
                equation={
                    "\\[ \\lim\\limits_{x \\to 0} \\left( \\cos\\left( \\frac{1}{2}x \\right) \\right)^{ \\displaystyle \\frac{2}{ \\cos\\left( \\frac{2}{3}x \\right)-\\cos\\left( \\frac{1}{2}x \\right)}} \\]"
                }
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>{"\\begin{aligned} \
                            \\lim\\limits_{x \\to 0} \\left( \\cos\\left( \\frac{1}{2}x \\right) \\right)^{ \\displaystyle \\frac{2}{ \\cos\\left( \\frac{2}{3}x \\right)-\\cos\\left( \\frac{1}{2}x \\right)}} &= \\lim\\limits_{x \\to 0} \\left( 1-2\\sin^{2}\\left( \\frac{1}{4}x \\right) \\right)^{ \\displaystyle \\frac{2}{ \\cos\\left( \\frac{2}{3}x \\right)-\\cos\\left( \\frac{1}{2}x \\right)}} \\\\[10pt] \
                            &= \\lim\\limits_{x \\to 0} \\left( \\left[1-2\\sin^{2}\\left( \\frac{1}{4}x \\right)\\right]^{\\displaystyle\\frac{1}{-2\\sin^{2}\\left( \\frac{1}{4}x \\right)}} \\right)^{ \\displaystyle \\frac{2\\left(-2\\sin^{2}\\left( \\frac{1}{4}x \\right)\\right)}{ \\cos\\left( \\frac{2}{3}x \\right)-\\cos\\left( \\frac{1}{2}x \\right)}} \\\\[10pt] \
                            &= e^{ \\displaystyle \\lim\\limits_{x \\to 0} \\frac{-4\\sin^{2}\\left( \\frac{1}{4}x \\right)}{ -2\\sin\\left( \\frac{7}{12}x \\right)\\sin\\left( \\frac{1}{12}x \\right)}} \\\\[10pt] \
                            &= e^{\\left[2 \\left(\\frac{1}{4}\\right)^{2}\\left(\\frac{12}{7}\\right)(12)\\right]} \\\\[10pt] \
                            &= e^{\\frac{18}{7}} \
                        \\end{aligned}"}</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function LimTrigInfty9() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit Trigonometri Tak Hingga"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 9"}
                equation={
                    "\\[ \\lim\\limits_{x \\to 0} \\left( \\frac{\\sin (x)}{x} \\right)^{\\displaystyle \\frac{1}{x^2}} \\]"
                }
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>{"\\begin{aligned} \
                            \\lim\\limits_{x \\to 0} \\left( \\frac{\\sin(x)}{x} \\right)^{\\displaystyle \\frac{1}{x^2}} &= \\lim\\limits_{x \\to 0} \\left( 1+\\frac{\\sin (x)}{x}-1 \\right)^{\\displaystyle \\frac{1}{x^2}} \\\\[10pt] \
                            &= \\lim\\limits_{x \\to 0} \\left( 1+\\frac{\\sin(x)-x}{x} \\right)^{\\displaystyle \\frac{1}{x^2}} \\\\[10pt] \
                            &= \\lim\\limits_{x \\to 0} \\left( \\left[1+\\frac{\\sin(x)-x}{x}\\right]^{\\displaystyle\\frac{x}{\\sin(x)-x}} \\right)^{\\displaystyle \\frac{\\sin(x)-x}{x} \\cdot \\frac{1}{x^2}} \\\\[10pt] \
                            &= e^{\\displaystyle \\frac{\\sin(x)-x}{x^{3}}} \\\\[10pt] \
                            &= e^{-\\frac{1}{6}} \
                        \\end{aligned}"}</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function LimTrigInfty10() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit Trigonometri Tak Hingga"
                title="Latihan Soal"
                time="10 min"
            />
            <Problem
                title={"Soal 10"}
                equation={
                    "\\[ \\lim\\limits_{x \\to 0} \\left( 1 - \\frac{\\sin (3x)}{2} \\right)^{\\displaystyle\\frac{3}{\\sin(5x)}} \\]"
                }
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>{"\\begin{aligned} \
                            \\lim\\limits_{x \\to 0} \\left( 1 - \\frac{\\sin (3x)}{2} \\right)^{\\displaystyle\\frac{3}{\\sin(5x)}} &= \\lim\\limits_{x \\to 0} \\left( \\left[1 - \\frac{\\sin (3x)}{2}\\right]^{\\displaystyle \\frac{2}{-\\sin (3x)}} \\right)^{\\displaystyle \\frac{-\\sin(3x)}{2} \\cdot \\frac{3}{\\sin(5x)}} \\\\[10pt] \
                            &= e^{\\displaystyle \\lim\\limits_{x \\to 0} \\frac{-3\\sin(3x)}{2\\sin(5x)}} \\\\[10pt] \
                            &= e^{ \\left[ \\left( -\\frac{3}{2} \\right) \\left( \\frac{3}{5} \\right) \\right]} \\\\[10pt] \
                            &= e^{-\\frac{9}{10}} \
                        \\end{aligned}"}</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function LimTrigInfty11() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit Trigonometri Tak Hingga"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 11"}
                equation={
                    "\\[ \\lim\\limits_{x \\to 0} \\left(\\sqrt[3]{ 1 - 3x }\\right)^{\\displaystyle\\frac{\\sin (3x)}{1 - \\cos\\left( \\frac{1}{2}x \\right)}} \\]"
                }
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>{"\\begin{aligned} \
                            \\lim\\limits_{x \\to 0} \\left(\\sqrt[3]{ 1 - 3x }\\right)^{\\displaystyle\\frac{\\sin (3x)}{1 - \\cos\\left( \\frac{1}{2}x \\right)}} &= \\lim\\limits_{x \\to 0} \\left( 1 - 3x \\right)^{\\displaystyle\\frac{\\sin (3x)}{3\\left(1 - \\cos\\left( \\frac{1}{2}x \\right)\\right)}} \\\\[10pt] \
                            &= \\lim\\limits_{x \\to 0} \\left( \\left[1 - 3x\\right]^{\\textstyle\\frac{1}{-3x}} \\right)^{\\displaystyle\\frac{-3x\\sin (3x)}{3\\left(1 - \\cos\\left( \\frac{1}{2}x \\right)\\right)}} \\\\[10pt] \
                            &= e^{\\displaystyle\\lim\\limits_{x \\to 0}\\frac{-x\\sin (3x)}{1 - \\left(1-2\\sin^{2}\\left( \\frac{1}{4}x \\right)\\right)}} \\\\[10pt] \
                            &= e^{\\displaystyle\\lim\\limits_{x \\to 0}\\frac{-x\\sin (3x)}{2\\sin^{2}\\left( \\frac{1}{4}x \\right)}} \\\\[10pt] \
                            &= e^{-\\frac{3}{2}(4)^{2}} \\\\[10pt] \
                            &= e^{-24} \
                        \\end{aligned}"}</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function LimTrigInfty12() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit Trigonometri Tak Hingga"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 12"}
                equation={
                    "\\[ \\lim\\limits_{x \\to 0} \\left( \\sqrt[x^{3}]{1 - x + \\sin x} \\right)^3 \\]"
                }
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>{"\\begin{aligned} \
                            \\lim\\limits_{x \\to 0} \\left( \\sqrt[x^{3}]{1 - x + \\sin x} \\right)^3 &= \\lim\\limits_{x \\to 0} \\left( 1 - x + \\sin x \\right)^{\\displaystyle\\frac{3}{x^3}} \\\\[10pt] \
                            &= \\lim\\limits_{x \\to 0} \\left( \\left[1 - x + \\sin (x)\\right]^{\\displaystyle\\frac{1}{\\sin(x)-x}} \\right)^{\\displaystyle\\frac{3\\left( \\sin(x)-x \\right)}{x^3}} \\\\[10pt] \
                            &= e^{ \\displaystyle 3 \\lim\\limits_{x \\to \\infty}\\frac{\\sin(x)-x}{x^3}} \\\\[10pt] \
                            &= e^{ \\left[ (3) \\left( -\\frac{1}{6} \\right) \\right]} \\\\[10pt] \
                            &= e^{-\\frac{1}{2}} \
                        \\end{aligned}"}</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function LimTrigInfty13() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit Trigonometri Tak Hingga"
                title="Latihan Soal"
                time="10 min"
            />
            <Problem
                title={"Soal 13"}
                equation={
                    "\\[ \\lim\\limits_{x \\to 0} \\left( \\frac{\\ln\\left( \\cos\\left( \\sin\\left( \\frac{1}{2}x \\right) \\right) \\right)}{\\cos^2\\left( \\frac{1}{3}x \\right) - 1} \\right) \\]"
                }
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>{"\\begin{aligned} \
                            \\lim\\limits_{x \\to 0} \\left( \\frac{\\ln\\left( \\cos\\left( \\sin\\left( \\frac{1}{2}x \\right) \\right) \\right)}{\\cos^2\\left( \\frac{1}{3}x \\right) - 1} \\right) &= \\lim\\limits_{x \\to 0} \\left( \\frac{\\ln\\left( 1-2\\sin^{2}\\left( \\frac{\\sin\\left( \\frac{1}{2}x \\right) }{2} \\right) \\right)}{-\\sin^2\\left( \\frac{1}{3}x \\right)} \\right) \\\\[10pt] \
                            &= \\lim\\limits_{x \\to 0} \\left(\\frac{-2\\sin^{2}\\left( \\frac{\\sin\\left( \\frac{1}{2}x \\right) }{2} \\right) }{-\\sin^2\\left( \\frac{1}{3}x \\right)} \\right) \\\\[10pt] \
                            &= 2\\lim\\limits_{x \\to 0} \\left( \\frac{ \\frac{\\sin^{2}\\left( \\frac{1}{2}x \\right) }{4} }{\\sin^2\\left( \\frac{1}{3}x \\right)} \\right) \\\\[10pt] \
                            &= \\frac{2}{4}\\lim\\limits_{x \\to 0} \\left( \\frac{\\sin^{2}\\left( \\frac{1}{2}x \\right) }{\\sin^2\\left( \\frac{1}{3}x \\right)} \\right) \\\\[10pt] \
                            &= \\frac{1}{2}\\left( \\frac{3}{2} \\right)^{2} \\\\[10pt] \
                            &= \\frac{9}{8} \
                        \\end{aligned}"}</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function LimTrigInfty14() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit Trigonometri Tak Hingga"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 14"}
                equation={
                    "\\[ \\lim\\limits_{x \\to 0} \\left( \\frac{\\ln\\left( \\cos\\left( \\frac{1}{2}x \\right) \\right)}{\\sqrt[4]{x^2 + 1} - 1} \\right) \\]"
                }
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>{"\\begin{aligned} \
                            \\lim\\limits_{x \\to 0} \\left( \\frac{\\ln\\left( \\cos\\left( \\frac{1}{2}x \\right) \\right)}{\\sqrt[4]{x^2 + 1} - 1} \\right) &= \\lim\\limits_{x \\to 0} \\left( \\frac{\\ln\\left( 1-2\\sin^{2}\\left( \\frac{1}{4}x \\right) \\right)}{\\sqrt[4]{x^2 + 1} - 1} \\right) \\lim\\limits_{x \\to 0} \\frac{\\left( \\sqrt[4]{x^2 + 1} + 1 \\right)\\left( \\sqrt{x^2 + 1} + 1 \\right)}{\\left( \\sqrt[4]{x^2 + 1} + 1 \\right)\\left( \\sqrt{x^2 + 1} + 1 \\right)} \\\\[10pt] \
                            &= \\lim\\limits_{x \\to 0} \\left( \\frac{-2\\sin^{2}\\left( \\frac{1}{4}x \\right)}{x^2} \\right) \\lim\\limits_{x \\to 0} \\left( \\sqrt[4]{x^2 + 1} + 1 \\right)\\left( \\sqrt{x^2 + 1} + 1 \\right) \\\\[10pt] \
                            &= -2\\left( \\frac{1}{4} \\right)^{2} \\left( \\sqrt[4]{1} + 1 \\right)\\left( \\sqrt{1} + 1 \\right) \\\\[10pt] \
                            &= -\\frac{1}{2} \
                        \\end{aligned}"}</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function LimTrigInfty15() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit Trigonometri Tak Hingga"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 15"}
                equation={
                    "\\[ \\lim\\limits_{x \\to 0} \\left( \\frac{\\left( e^{-2x+1} - e \\right) \\sin\\left( \\frac{1}{2}\\pi x \\right)}{3x \\sin\\left( \\frac{3}{2}x \\right)} \\right) \\]"
                }
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>{"\\begin{aligned} \
                            \\lim\\limits_{x \\to 0} \\left( \\frac{\\left( e^{-2x+1} - e \\right) \\sin\\left( \\frac{1}{2}\\pi x \\right)}{3x \\sin\\left( \\frac{3}{2}x \\right)} \\right) &= \\lim\\limits_{x \\to 0} \\left( \\frac{e\\left( e^{-2x} - 1 \\right)}{3x} \\right)\\lim\\limits_{x \\to 0} \\left( \\frac{\\sin\\left( \\frac{1}{2}\\pi x \\right)}{\\sin\\left( \\frac{3}{2}x \\right)} \\right) \\\\[10pt] \
                            &= -\\frac{2}{3}e \\cdot \\frac{\\pi}{3} \\\\[10pt] \
                            &= -\\frac{2}{9}e\\pi \\\\[10pt] \
                        \\end{aligned}"}</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function LimTrigInfty16() {
    return (
        <Template blogData={exerciseData} id={"16"}/>
    )
}

export function LimTrigInfty17() {
    return (
        <Template blogData={exerciseData} id={"17"}/>
    )
}

export function LimTrigInfty18() {
    return (
        <Template blogData={exerciseData} id={"18"}/>
    )
}

export function LimTrigInfty19() {
    return (
        <Template blogData={exerciseData} id={"19"}/>
    )
}

export function LimTrigInfty20() {
    return (
        <Template blogData={exerciseData} id={"20"}/>
    )
}

export function LimTrigInfty21() {
    return (
        <Template blogData={exerciseData} id={"21"}/>
    )
}

export function LimTrigInfty22() {
    return (
        <Template blogData={exerciseData} id={"22"}/>
    )
}

export function LimTrigInfty23() {
    return (
        <Template blogData={exerciseData} id={"23"}/>
    )
}

export function LimTrigInfty24() {
    return (
        <Template blogData={exerciseData} id={"24"}/>
    )
}
