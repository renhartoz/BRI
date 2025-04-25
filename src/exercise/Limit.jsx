import React from "react";
import { Stack, Typography, Grid2 } from "@mui/material";
import { MathJax } from "better-react-mathjax";
import Problem from "../maths/Problem";
import ExerciseHeader from "./ExerciseHeader";

export function Limit1() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 1"}
                equation={
                    "\\[  \\lim_{x \\to \\infty} \\frac{6x^2 - 5x - 2}{2x^2 - 2x + 1} = \\cdots \\] "
                }
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>Pending</MathJax>
                    </Typography>
                </Stack>
                {/* <Stack gap={1} mt={2}>
                    <Typography fontWeight={600} fontSize={"1.2em"}>
                        Diketahui:
                    </Typography>
                    <Typography>
                        <MathJax>{"\\( T_{0} = T \\)"}</MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( v_{0} = 100 \\space \\frac{m}{s} \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>{"\\( T_{1} = 4T \\)"}</MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={"1.2em"}>
                        Formula:
                    </Typography>
                    <Typography>
                        <MathJax>{"\\[ v=\\sqrt{\\frac{3kT}{m}} \\]"}</MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>{"\\[ v \\propto \\sqrt{T} \\]"}</MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={"1.2em"}>
                        Langkah Matematis:
                    </Typography>
                    <Typography>
                        <MathJax>
                            {
                                "\\[ \\begin{aligned} \
                                \\frac{v_{0}}{v_{1}} &= \\frac{\\sqrt{T_{0}}}{\\sqrt{T_{1}}} \\\\[10pt] \
                                \\frac{100 \\space \\frac{m}{s}}{v} &= \\frac{\\sqrt{T}}{\\sqrt{4T}} \\\\[10pt] \
                                \\frac{100 \\space \\frac{m}{s}}{v} &= \\frac{1}{2} \\\\[10pt] \
                                v &= 200 \\space \\frac{m}{s} \
                            \\end{aligned} \\]"
                            }
                        </MathJax>
                    </Typography>
                </Stack> */}
            </Problem>
        </Stack>
    );
}

export function Limit2() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 2"}
                equation={`\\[\\lim_{x \\to \\infty} \\frac{9x^3 - 2x + 1}{x^2 - 4x + 2} = \\cdots\\]`}
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>Pending</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Limit3() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 3"}
                equation={`\\[ \\lim_{x \\to \\infty} \\frac{2x^2 - 3}{3x^4 - 2x^2 + 5} = \\cdots \\]`}
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>Pending</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Limit4() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 4"}
                equation={`\\[ \\lim_{x \\to \\infty} \\frac{4x^2 - 3x^3 + 2x}{6x^3 - 5x - 2} = \\cdots \\]`}
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>Pending</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Limit5() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 5"}
                equation={`\\[\\lim_{x \\to \\infty} \\sqrt{\\frac{9x^4 + 8x}{2x^4 - 3x^2 + 2}} = \\cdots\\]`}
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>Pending</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Limit6() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 6"}
                equation={`\\[\\lim_{x \\to \\infty} \\left[ \\frac{3x^2 + 4}{8 - 6x^2} \\right]^3 = \\cdots\\]`}
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>Pending</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Limit7() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 7"}
                equation={`\\[\\lim_{x \\to \\infty} \\frac{(3x^2 + 4)(2x - 1)}{(x - 3)(4x^2 + 3x)} = \\cdots\\]`}
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>Pending</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Limit8() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 8"}
                equation={`\\[\\lim_{x \\to \\infty} \\frac{(2x - 4)(4x + 3)}{6x^2 - 2x + 1} = \\cdots\\]`}
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>Pending</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Limit9() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 9"}
                equation={`\\[\\lim_{x \\to \\infty} \\frac{(4x - 3)^3}{(2x - 1)(x^2 + 2x + 3)} = \\cdots\\]`}
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>Pending</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Limit10() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 10"}
                equation={`\\[\\lim_{x \\to \\infty} \\frac{(4x + 2)^2}{\\sqrt{16x^4 + 1}} = \\cdots\\]`}
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>Pending</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Limit11() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 11"}
                equation={`\\[\\lim_{x \\to \\infty} \\frac{\\sqrt{3x + 2x^2}}{\\sqrt{x^2 - 4}} = \\cdots\\]`}
                accordion_text="Pembahasan"
            ></Problem>
        </Stack>
    );
}

export function Limit12() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 12"}
                equation={`\\[\\lim_{x \\to \\infty} \\frac{8x + 3}{\\sqrt{2x^2 - 4} + \\sqrt{2x^2 + 3}} = \\cdots\\]`}
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>Pending</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Limit13() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 13"}
                equation={`\\[\\lim_{x \\to \\infty} \\frac{3x\\sqrt{x} + 2x - 3}{4\\sqrt{x} - 9\\sqrt{x^3} + 2x} = \\cdots\\]`}
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>Pending</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Limit14() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 14"}
                equation={`\\[\\lim_{x \\to \\infty} \\frac{x^4 + 2x^2\\sqrt{x} - 3x + 5}{3\\sqrt{x^7} - 4x^3\\sqrt[3]{x^3} - 2} = \\cdots\\]`}
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>Pending</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Limit15() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 15"}
                equation={`\\[\\lim_{x \\to \\infty} \\frac{4x\\sqrt{x} - 6\\sqrt{x^5} + 2\\sqrt{x^3}}{6x^2 - 5x + 3x^2\\sqrt{x}} = \\cdots\\]`}
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>Pending</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Limit16() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 16"}
                equation={`\\[\\lim_{x \\to \\infty} \\frac{(2x^2 + 4x^3 - x)(2x^3 + 4x^2 - 5)}{(x^2 - 3x + 6)(x^4 + 6x^2 - 3x + 1)} = \\cdots\\]`}
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>Pending</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Limit17() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 17"}
                equation={`\\[\\lim_{x \\to \\infty} [\\sqrt{3x - 2} - \\sqrt{3x + 4}] = \\cdots\\]`}
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>Pending</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Limit18() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 18"}
                equation={`\\[\\lim_{x \\to \\infty} [\\sqrt{4x - 8} - \\sqrt{3x - 2}] = \\cdots\\]`}
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>Pending</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Limit19() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 19"}
                equation={`\\[\\lim_{x \\to \\infty} [\\sqrt{x - 3} - \\sqrt{3x + 2}] = \\cdots\\]`}
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>Pending</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Limit20() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 20"}
                equation={`\\[\\lim_{x \\to \\infty} [\\sqrt{4x^2 - 6x - 2} - \\sqrt{4x^2 + 2x - 1}] = \\cdots\\]`}
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>Pending</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Limit21() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 21"}
                equation={`\\[\\lim_{x \\to \\infty} [\\sqrt{2x^2 - 3x + 1} - \\sqrt{2x^2 - x - 3}] = \\cdots\\]`}
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>Pending</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Limit22() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 22"}
                equation={`\\[\\lim_{x \\to \\infty} [\\sqrt{x^2 + 2x - 3} - \\sqrt{2x^2 + x + 2}] = \\cdots\\]`}
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>Pending</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Limit23() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 23"}
                equation={`
                    \\[\\lim_{x \\to \\infty} [\\sqrt{4x^2 - 3x + 1} - (2x + 3)] = \\cdots\\]`}
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>Pending</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Limit24() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 24"}
                equation={`
                    \\[\\lim_{x \\to \\infty} [\\sqrt{9x^2 - 6x + 4} - (3x - 2)] = \\cdots\\]`}
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>Pending</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Limit25() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 25"}
                equation={`
                    \\[\\lim_{x \\to \\infty} [(x - 1) - \\sqrt{x^2 + 4x - 2}] = \\cdots\\]
                    `}
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>Pending</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Limit26() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 21"}
                equation={`
                    \\[\\lim_{x \\to \\infty} [\\sqrt{4x^2 - 6x + 2} - \\sqrt{4x^2 + px - 6}] = 5 \\quad \\text{maka nilai } p = \\cdots\\]`}
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>Pending</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Limit27() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 27"}
                equation={`
                    \\[\\lim_{x \\to \\infty} (\\sqrt{x(4x + 5)} - \\sqrt{4x^2 - 3}) = \\cdots\\]
                    `}
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>Pending</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Limit28() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 28"}
                equation={`
                    \\[\\lim_{x \\to \\infty} \\frac{\\sqrt{x^2 - 5x - 3} - (x + 1)}{2} = \\cdots\\]
                    `}
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>Pending</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Limit29() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 29"}
                equation={`
                    \\[\\lim_{x \\to \\infty} \\frac{(3 - 2x)^3}{(x - 1)(2x^2 + x + 1)} = \\cdots\\]`}
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>Pending</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Limit30() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 30"}
                equation={`
                    \\[\\lim_{x \\to \\infty} \\frac{\\sqrt{x + 1} - \\sqrt{x - 1}}{\\sqrt{x + 2} - \\sqrt{x - 2}} = \\cdots\\]`}
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>Pending</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Limit31() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 31"}
                equation={`
                    \\[\\lim_{x \\to \\infty} \\left[ \\frac{1 + 2 + 3 + \\cdots + x}{\\frac{1}{2}x^2 + 1} \\right] = \\cdots\\]`}
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>Pending</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Limit32() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 32"}
                equation={`\\[
                    \\lim_{x \\to \\infty} (\\sqrt{x + \\sqrt{2x}} - \\sqrt{x}) = \\
                    \\]
                    `}
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>Pending</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Limit33() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Limit"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 33"}
                equation={`
                    \\[\\lim_{x \\to \\infty} \\frac{\\sqrt{x^2 + x - 11} - \\sqrt{x^2 - 5}}{2x - \\sqrt{4x^2 - 2x}} = \\cdots\\]`}
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography>
                        <MathJax>Pending</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}
