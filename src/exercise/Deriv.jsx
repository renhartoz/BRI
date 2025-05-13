import React from "react";
import { Box, Stack, Typography, Grid2 } from "@mui/material";
import { MathJax } from "better-react-mathjax";
import Problem from "../maths/Problem";
import ExerciseHeader from "./ExerciseHeader";
import NumberLine from "../maths/NumberLine";
import { CustomRawTable } from "../components/Tabel";

export function Deriv1() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Derivatif"
                title="Latihan Soal"
                time="2 min"
            />
            <Problem
                title={"Soal 1"}
                equation={"Tentukan turunan dari \\( y=5\\sqrt[5]{x^{4}}+3\\sqrt{x}-\\frac{6}{x^{2}} \\)"}
                accordion_text="Pembahasan"
            >
                <Typography>
                    <MathJax>{"\\[\\begin{aligned} \
                        y&=5x^{\\frac{4}{5}}+3x^{\\frac{1}{2}}-6x^{-2} \\\\[10pt] \
                        y'&=5\\left(\\frac{4}{5}\\right)x^{\\frac{4}{5}-1}+3\\left(\\frac{1}{2}\\right)x^{\\frac{1}{2}-1}-6(-2)x^{-2-1} \\\\[10pt] \
                        &=\\boxed{4x^{-\\frac{1}{5}}+\\frac{3}{2}x^{-\\frac{1}{2}}+12x^{-3}} \\\\[10pt] \
                    \\end{aligned}\\]"}</MathJax>
                </Typography>
            </Problem>
        </Stack>
    );
}

export function Deriv2() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Derivatif"
                title="Latihan Soal"
                time="2 min"
            />
            <Problem
                title={"Soal 2"}
                equation={"Tentukan turunan dari \\( y = 3x^5 + \\sqrt[4]{x^3} + \\frac{4}{\\sqrt[3]{x^2}} \\)"}
                accordion_text="Pembahasan"
            >
                <Typography>
                    <MathJax>{"\\[\\begin{aligned} \
                        y&=3x^{5}+x^{\\frac{3}{4}}+4x^{-\\frac{2}{3}} \\\\[10pt] \
                        y'&=\\boxed{15x^{4}+\\frac{3}{4}x^{-\\frac{1}{4}}-\\frac{8}{3}x^{-\\frac{5}{3}}} \
                    \\end{aligned}\\]"}</MathJax>
                </Typography>
            </Problem>
        </Stack>
    );
}

export function Deriv3() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Derivatif"
                title="Latihan Soal"
                time="2 min"
            />
            <Problem
                title={"Soal 3"}
                equation={"Tentukan nilai \\( f'(-1) \\) jika \\( f(x) = -3(x^2 + 1)^3(x^3 - 4) \\)"}
                accordion_text="Pembahasan"
            >
                <Typography>
                    <MathJax>{"\\begin{aligned} \
                        f'(x)&=\\left[-3(x^2 + 1)^3(x^3 - 4)\\right]' \\\\[10pt] \
                        &=-3\\left[(x^2 + 1)^3(x^3 - 4)\\right]' \\\\[10pt] \
                        &=-3\\left[3(x^2 + 1)^2(2x)(x^3 - 4)+(x^2 + 1)^3(3x^2)\\right] \\\\[10pt] \
                        &=-9x(x^2+1)^2 \\left[2(x^3 - 4)+(x^2 + 1)x\\right] \\\\[10pt] \
                        &=-9x(x^2+1)^2 \\left[2x^3 - 8+x^3 + x\\right] \\\\[10pt] \
                        &=-9x(x^2+1)^2 \\left[3x^3 + x - 8\\right] \\\\[10pt] \
                        f'(-1)&=-9(-1)((-1)^2+1)^2 \\left[3(-1)^3 + (-1) - 8\\right] \\\\[10pt] \
                        &=9(1+1)^2 \\left[-3 - 1 - 8\\right] \\\\[10pt] \
                        &=9(2)^2 \\left[-12\\right] \\\\[10pt] \
                        &=-108(4) \\\\[10pt] \
                        &=\\boxed{-432} \
                    \\end{aligned}"}</MathJax>
                </Typography>
            </Problem>
        </Stack>
    );
}

export function Deriv4() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Derivatif"
                title="Latihan Soal"
                time="2 min"
            />
            <Problem
                title={"Soal 4"}
                equation={"Tentukan nilai \\( f'(3) \\) jika \\( f(x) = 2(x^2 - 3)^3(2x^2 + 4) \\)"}
                accordion_text="Pembahasan"
            >
                <Typography>
                    <MathJax>{"\\[\\begin{aligned} \
                        f'(x)&=[2(x^2 - 3)^3(2x^2 + 4)]' \\\\[10pt] \
                        &= 2[(x^2 - 3)^3(2x^2 + 4)]' \\\\[10pt] \
                        &= 2[(x^2 - 3)^3(2x^2 + 4)+(x^2 - 3)^3(2x^2 + 4)] \\\\[10pt] \
                        &= 2[3(x^2 - 3)^2(2x)(2x^2 + 4)+(x^2 - 3)^3(4x)] \\\\[10pt] \
                        &= 2(4x)(x^2 - 3)^2[3(x^2 + 2)+(x^2 - 3)] \\\\[10pt] \
                        &= 2(4x)(x^2 - 3)^2[3x^2 + 6 + x^2 - 3] \\\\[10pt] \
                        &= 8x(x^2 - 3)^2[4x^2 + 3] \\\\[10pt] \
                        f'(3)&= 8(3)((3)^2 - 3)^2[4(3)^2 + 3] \\\\[10pt] \
                        &= 24(9 - 3)^2[4(9) + 3] \\\\[10pt] \
                        &= 24(6)^2[39] \\\\[10pt] \
                        &= 936(36) \\\\[10pt] \
                        &= \\boxed{33696} \
                    \\end{aligned}\\]"}</MathJax>
                </Typography>
            </Problem>
        </Stack>
    );
}

export function Deriv5() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Derivatif"
                title="Latihan Soal"
                time="2 min"
            />
            <Problem
                title={"Soal 5"}
                equation={"Tentukan interval kurva dengan persamaan \\( y = x^3 - \\frac{21}{2}x^2 + 30x + 3 \\) tidak akan turun"}
                accordion_text="Pembahasan"
            >
                <Stack gap={3}>
                    <Typography>
                        <MathJax>{"\\[\\begin{aligned} \
                            y' &= 0 \\\\[10pt] \
                            3x^2 - 21x + 30 &= 0 \\\\[10pt] \
                            x^2 - 7x + 10 &= 0 \\\\[10pt] \
                            (x-2)(x-5) &= 0 \\\\[10pt] \
                            x=2 \\quad &\\vee \\quad x=5 \\\\[10pt] \
                        \\end{aligned}\\]"}</MathJax>
                    </Typography>
                    <Stack justifyContent={'center'} alignItems={'center'}>
                        <NumberLine
                            dots={[[2, 1], [5, 1]]}
                            signs={["+", "-", "+"]}
                        />
                    </Stack>
                    <Typography>
                        <MathJax>{"\\[\\boxed{\\text{Hp}=\\{ x \\space \\vert \\space x \\leq 2 \\space \\vee \\space x \\geq 5, \\space x \\in \\mathbb{R} \\}}\\]"}</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Deriv6() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Derivatif"
                title="Latihan Soal"
                time="2 min"
            />
            <Problem
                title={"Soal 6"}
                equation={"Tentukan interval fungsi \\( f(x) = \\frac{1}{3}x^3 - \\frac{5}{2}x^2 + 6x + 3 \\) selalu naik"}
                accordion_text="Pembahasan"
            >
                <Stack gap={3}>
                    <Typography>
                        <MathJax>{"\\[\\begin{aligned} \
                            f'(x) &= 0 \\\\[10pt] \
                            x^2 - 5x + 6 &= 0 \\\\[10pt] \
                            (x-2)(x-3) &= 0 \\\\[10pt] \
                            x=2 \\quad &\\vee \\quad x=3 \\\\[10pt] \
                        \\end{aligned}\\]"}</MathJax>
                    </Typography>
                    <Stack justifyContent={'center'} alignItems={'center'}>
                        <NumberLine
                            dots={[[2, 0], [3, 0]]}
                            signs={["+", "-", "+"]}
                        />
                    </Stack>
                    <Typography>
                        <MathJax>{"\\[\\boxed{\\text{Hp}=\\{ x \\space \\vert \\space x < 2 \\space \\vee \\space x > 3, \\space x \\in \\mathbb{R} \\}}\\]"}</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Deriv7() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Derivatif"
                title="Latihan Soal"
                time="2 min"
            />
            <Problem
                title={"Soal 7"}
                equation={"Pada interval \\( -2 \\le x \\le 4 \\) fungsi \\( f(x) = 2x^3 - 3x^2 - 12x + 3 \\) mempunyai nilai maksimum \\( a \\) dan minimum \\( b \\). Tentukan nilai \\( (a + b) \\)"}
                accordion_text="Pembahasan"
            >
                <Stack gap={3}>
                    <Typography>
                        <MathJax>{"\\[\\begin{aligned} \
                            f'(x) &= 0 \\\\[10pt] \
                            6x^2 - 6x - 12 &= 0 \\\\[10pt] \
                            x^2 - x - 2 &= 0 \\\\[10pt] \
                            (x+1)(x-2) &= 0 \\\\[10pt] \
                            x=-1 \\quad &\\vee \\quad x=2 \\\\[10pt] \
                        \\end{aligned}\\]"}</MathJax>
                    </Typography>
                    <Stack justifyContent={'center'} alignItems={'center'}>
                        <NumberLine
                            dots={[[-1, 1], [2, 1]]}
                            signs={["+", "-", "+"]}
                        />
                    </Stack>
                    <Typography>
                        <MathJax>{"\\[\\begin{aligned} \
                        a&=f_{max}=f(-1)= 2(-1)^3 - 3(-1)^2 - 12(-1) + 3 = -2 - 3 + 12 + 3 = 10 \\\\[10pt] \
                        b&=f_{min}=f(2)= 2(2)^3 - 3(2)^2 - 12(2) + 3 = 16 - 12 - 24 + 3 = -17 \
                        \\end{aligned}\\]"}</MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>{"\\[ a+b=10+(-17) = \\boxed{-7} \\]"}</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Deriv8() {
    const data = [
        ["Titik Stasioner", "Tipe"],
        [<MathJax>{"\\( (2, 37) \\)"}</MathJax>, "Maksimum"],
        [<MathJax>{"\\( (6, 5) \\)"}</MathJax>, "Minimum"],
    ]
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Derivatif"
                title="Latihan Soal"
                time="2 min"
            />
            <Problem
                title={"Soal 8"}
                equation={"Diketahui fungsi \\( f(x) = x^3 - 12x^2 + 36x + 5 \\), tentukan titik stasioner dan jenisnya"}
                accordion_text="Pembahasan"
            >
                <Stack gap={3}>
                    <Typography>
                        <MathJax>{"\\[\\begin{aligned} \
                            f'(x) &= 0 \\\\[10pt] \
                            3x^2 - 24x + 36 &= 0 \\\\[10pt] \
                            x^2 - 8x + 12 &= 0 \\\\[10pt] \
                            (x-2)(x-6) &= 0 \\\\[10pt] \
                            x=2 \\quad &\\vee \\quad x=6 \\\\[10pt] \
                        \\end{aligned}\\]"}</MathJax>
                    </Typography>
                    <Stack justifyContent={'center'} alignItems={'center'}>
                        <NumberLine
                            dots={[[2, 1], [6, 1]]}
                            signs={["+", "-", "+"]}
                        />
                    </Stack>
                    <Typography>
                        <MathJax>{"\\[\\begin{aligned} \
                        f(2)&= (2)^3 - 12(2)^2 + 36(2) + 5 = 8-48+72+5=37 \\\\[10pt] \
                        f(6)&= (6)^3 - 12(6)^2 + 36(6) + 5 = 216-432+216+5=5 \
                        \\end{aligned}\\]"}</MathJax>
                    </Typography>
                    <CustomRawTable
                        content={data}
                        variant={"secondary"}
                    />
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Deriv9() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Derivatif"
                title="Latihan Soal"
                time="2 min"
            />
            <Problem
                title={"Soal 9"}
                equation={"Jika diketahui fungsi \\( f(x) = x^3 - 2bx^2 + 8x + 5 \\) akan mencapai titik balik minimum saat \\( (3, q) \\), maka tentukan nilai \\( 2q \\)"}
                accordion_text="Pembahasan"
            >
                <Stack gap={3}>
                    <Typography>
                        <MathJax>{"\\[\\begin{aligned} \
                            f'(x)&=3x^2 - 4bx + 8 \\\\[10pt] \
                            f'(3) &= 0 \\\\[10pt] \
                            3(3)^2 - 4b(3) + 8 &= 0 \\\\[10pt] \
                            27 - 12b + 8 &= 0 \\\\[10pt] \
                            12b &= 35 \\\\[10pt] \
                            b &= \\frac{35}{12} \\\\[10pt] \
                        \\end{aligned}\\]"}</MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>{"\\[\\begin{aligned} \
                            f(x) &= x^3 - 2bx^2 + 8x + 5 \\\\[10pt] \
                            &= x^3 - 2\\left(\\frac{35}{12}\\right)x^2 + 8x + 5 \\\\[10pt] \
                            &= x^3 - \\frac{35}{6}x^2 + 8x + 5 \\\\[10pt] \
                        \\end{aligned}\\]"}</MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>{"\\[\\begin{aligned} \
                            q&=f(3) \\\\[10pt] \
                            &= (3)^3 - \\frac{35}{6}(3)^2 + 8(3) + 5 \\\\[10pt] \
                            &= 27 - \\frac{105}{2} + 24 + 5 \\\\[10pt] \
                            &= 56 - \\frac{105}{2} \\\\[10pt] \
                            &= \\frac{112}{2} - \\frac{105}{2} \\\\[10pt] \
                            &= \\frac{7}{2} \\\\[10pt] \
                            2q&= \\boxed{7} \
                        \\end{aligned}\\]"}</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Deriv10() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Derivatif"
                title="Latihan Soal"
                time="2 min"
            />
            <Problem
                title={"Soal 10"}
                equation={"Jika \\( f(x) = x^3 + (p + 1)x^2 - (2q + 1)x + 1 \\) mempunyai nilai stasioner di absis \\( -3 \\) dan \\( 1 \\), maka tentukan nilai \\( (2q + p^2) \\)"}
                accordion_text="Pembahasan"
            >
                <Stack gap={3}>
                    <Typography>
                        <MathJax>{"\\[\\begin{aligned} \
                            f'(x)&=a(x+3)(x-1) \\\\[10pt] \
                            3x^2 - 2(p+1)x - (2q+1) &= a(x^2-2x-3)\
                        \\end{aligned}\\]"}</MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>{"\\[\\begin{aligned} \
                            3x^2&=ax^{2} \\\\[10pt] \
                            3&=a \\\\[10pt] \
                        \\end{aligned}\\]"}</MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>{"\\[\\begin{aligned} \
                            3x^2 - 2(p+1)x - (2q+1) &= 3(x^2-2x-3) \\\\[10pt] \
                            3x^2 - 2(p+1)x - (2q+1) &= 3x^2-6x-9 \\\\[10pt] \
                        \\end{aligned}\\]"}</MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>{"\\[\\begin{aligned} \
                            -2(p+1) &= -6 \\\\[10pt] \
                            p+1 &= 3 \\\\[10pt] \
                            p &= 2 \
                        \\end{aligned}\\]"}</MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>{"\\[\\begin{aligned} \
                            -(2q+1) &= -9 \\\\[10pt] \
                            2q+1 &= 9 \\\\[10pt] \
                            2q &= 8 \
                        \\end{aligned}\\]"}</MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>{"\\[2q+p^{2} = 8+(2)^{2} = 8+4 = \\boxed{12} \\]"}</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Deriv11() {
    const data = [
        ["Titik Singgung", "Persamaan Garis Singgung"],
        [<MathJax>{"\\( (0, 1) \\)"}</MathJax>, <MathJax>{"\\( y = 4x + 1 \\)"}</MathJax>],
        [<MathJax>{"\\( (2, 5) \\)"}</MathJax>, <MathJax>{"\\( y = 4x - 3 \\)"}</MathJax>]
    ]
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Derivatif"
                title="Latihan Soal"
                time="2 min"
            />
            <Problem
                title={"Soal 11"}
                equation={"Tentukan titik singgung dan persamaan garis singgung kurva \\( y = f(x) = x^3 - 3x^2 + 4x + 1 \\) mempunyai gradien garis singgung sebesar \\(4\\)"}
                accordion_text="Pembahasan"
            >
                <Stack gap={3}>
                    <Typography>
                        <MathJax>{"\\[\\begin{aligned} \
                            f'(x)&=4 \\\\[10pt] \
                            3x^2 - 6x + 4 &= 4 \\\\[10pt] \
                            3x^2 - 6x &= 0 \\\\[10pt] \
                            3x(x - 2) &= 0 \\\\[10pt] \
                            x=0 \\quad &\\vee \\quad x=2 \\\\[10pt] \
                        \\end{aligned}\\]"}</MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>{"\\[\\begin{aligned} \
                            f(0)&=(0)^3 - 3(0)^2 + 4(0) + 1 = 1 \\\\[10pt] \
                            y&=f(a)+f'(a)(x-a)=f(0)+f'(0)(x-0) \\\\[10pt] \
                            y&=1+4(x-0)=4x+1 \
                        \\end{aligned}\\]"}</MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>{"\\[\\begin{aligned} \
                            f(2)&=(2)^3 - 3(2)^2 + 4(2) + 1 = 8-12+8+1=5 \\\\[10pt] \
                            y&=f(a)+f'(a)(x-a)=f(2)+f'(2)(x-2) \\\\[10pt] \
                            y&=5+4(x-2)=5+4x-8=4x-3 \
                        \\end{aligned}\\]"}</MathJax>
                    </Typography>
                    <CustomRawTable
                        content={data}
                        variant={"secondary"}
                    />
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Deriv12() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Derivatif"
                title="Latihan Soal"
                time="2 min"
            />
            <Problem
                title={"Soal 12"}
                equation={"Persamaan garis singgung kurva yang melalui titik dengan absis \\(1\\) pada grafik \\( y = ax^3 + bx^2 - 4x + 7 \\) adalah \\( y - 5x - 2 = 0 \\). Tentukan nilai \\( (2a + 3b) \\)"}
                accordion_text="Pembahasan"
            >
                <Stack gap={3}>
                    <Typography>
                        <MathJax>{"\\[\\begin{aligned} \
                            f(x) &= ax^3 + bx^2 - 4x + 7 \\\\[10pt] \
                            f'(x) &= 3ax^2 + 2bx - 4 \\\\[20pt] \
                            g(x) &= 5x+2 \\\\[10pt] \
                            g'(x) &= 5 \
                        \\end{aligned}\\]"}</MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>{"\\[\\begin{aligned} \
                            f(1)&=g(1) \\\\[10pt] \
                            a(1)^3 + b(1)^2 - 4(1) + 7 &= 5(1) + 2 \\\\[10pt] \
                            a+b-4+7 &= 7 \\\\[10pt] \
                            a+b &= 4 \
                        \\end{aligned}\\]"}</MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>{"\\[\\begin{aligned} \
                            f'(1)&=g'(1) \\\\[10pt] \
                            3a(1)^2 + 2b(1) - 4 &= 5 \\\\[10pt] \
                            3a+2b-4 &= 5 \\\\[10pt] \
                            3a+2b &= 9 \
                        \\end{aligned}\\]"}</MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                        {"\\[\\begin{array}{rl} \
                        \\begin{alignedat}{2} \
                            3a+2b &= 9 &\\quad& \\times 1 \\\\[5pt] \
                            a+b &= 4 &\\quad& \\times 2 \\\\[5pt] \
                            \\hline \
                        \\end{alignedat} \\\\[8pt] \
                        \\begin{alignedat}{2} \
                            3a+2b &= 9 \\\\[5pt] \
                            2a + 2b &= 8 &\\quad& - \\\\[5pt] \
                            \\hline \
                            a &= 1 \
                        \\end{alignedat} \
                        \\end{array}\\]"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>{"\\[\\begin{aligned} \
                            a+b&=4 \\\\[5pt] \
                            1 + b &= 4 \\\\[5pt] \
                            b &= 3 \\\\[5pt] \
                        \\end{aligned}\\]"}</MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>{"\\[ 2a+3b=2(1)+3(3)=2+9=\\boxed{11} \\]"}</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Deriv13() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Derivatif"
                title="Latihan Soal"
                time="2 min"
            />
            <Problem
                title={"Soal 13"}
                equation={"Tentukan persamaan garis singgung kurva \\( y = x^3 - 3x^2 + 2x + 1 \\) yang tegak lurus dengan garis \\( y = -3x + 4 \\)"}
                accordion_text="Pembahasan"
            >
                <Stack gap={3}>
                    <Typography>
                        <MathJax>{"\\[\\begin{aligned} \
                            m_{_1} \\cdot m_{_2} &= -1 \\\\[10pt] \
                            y' \\cdot (-3) &= -1 \\\\[10pt] \
                            y' &= \\frac{1}{3} \\\\[20pt] \
                            3x^2 - 6x + 2 &= \\frac{1}{3} \\\\[10pt] \
                            9x^2 - 18x + 6 &= 1 \\\\[10pt] \
                            9x^2 - 18x + 5 &= 0 \\\\[10pt] \
                            \\frac{(9x-3)(9x-15)}{9} &= 0 \\\\[10pt] \
                            (3x-1)(3x-5) &= 0 \\\\[10pt] \
                            x_{_1}=\\frac{1}{3} \\quad &\\vee \\quad x_{_2}=\\frac{5}{3} \\\\[10pt] \
                        \\end{aligned}\\]"}</MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>{"\\[\\begin{aligned} \
                            y_{_1} &= \\left(\\frac{1}{3}\\right)^3 - 3\\left(\\frac{1}{3}\\right)^2 + 2\\left(\\frac{1}{3}\\right) + 1 \\\\[10pt] \
                            &= \\frac{1}{27} - \\frac{1}{3} + \\frac{2}{3} + 1 \\\\[10pt] \
                            &= \\frac{1}{27} + \\frac{4}{3} \\\\[10pt] \
                            &= \\frac{1}{27} + \\frac{36}{27} \\\\[10pt] \
                            &= \\frac{37}{27} \\\\[20pt] \
                            y_{_2} &= \\left(\\frac{5}{3}\\right)^3 - 3\\left(\\frac{5}{3}\\right)^2 + 2\\left(\\frac{5}{3}\\right) + 1 \\\\[10pt] \
                            &= \\frac{125}{27} - \\frac{25}{3} + \\frac{10}{3} + 1 \\\\[10pt] \
                            &= \\frac{125}{27} - 4 \\\\[10pt] \
                            &= \\frac{125}{27} - \\frac{108}{27} \\\\[10pt] \
                            &= \\frac{17}{27} \
                        \\end{aligned}\\]"}</MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>{"\\[\\begin{aligned} \
                            y-y_{_1} &= y'(x-x_{_1}) \\\\[10pt] \
                            y-\\frac{37}{27} &= \\frac{1}{3}\\left(x-\\frac{1}{3}\\right) \\\\[10pt] \
                            y-\\frac{37}{27} &= \\frac{1}{3}x-\\frac{1}{9} \\\\[10pt] \
                            y &= \\frac{1}{3}x+\\frac{37}{27}-\\frac{3}{27} \\\\[10pt] \
                            y &= \\frac{1}{3}x+\\frac{34}{27} \\\\[20pt] \
                            \
                            y-y_{_2} &= y'(x-x_{_2}) \\\\[10pt] \
                            y-\\frac{17}{27} &= \\frac{1}{3}\\left(x-\\frac{5}{3}\\right) \\\\[10pt] \
                            y-\\frac{17}{27} &= \\frac{1}{3}x-\\frac{5}{9} \\\\[10pt] \
                            y &= \\frac{1}{3}x+\\frac{17}{27}-\\frac{15}{27} \\\\[10pt] \
                            y &= \\frac{1}{3}x+\\frac{2}{27} \\\\[20pt] \
                        \\end{aligned}\\]"}</MathJax>
                    </Typography>
                    <Typography>
                        Jawaban Akhir: {" "}
                        <Typography component={'span'}>
                            <MathJax inline>{"\\( \
                                \\boxed{y = \\frac{1}{3}x+\\frac{34}{27}} \
                            \\)"}</MathJax>
                            {" "} dan {" "}
                            <MathJax inline>{"\\( \
                                \\boxed{y = \\frac{1}{3}x+\\frac{2}{27}} \
                            \\)"}</MathJax>
                        </Typography>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Deriv14() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Derivatif"
                title="Latihan Soal"
                time="2 min"
            />
            <Problem
                title={"Soal 14"}
                equation={"Tentukan turunan dari \\( y = \\frac{2x^3 + 3x^2}{5x^2 + 2} \\)"}
                accordion_text="Pembahasan"
            >
                <Typography>
                    <MathJax>{"\\begin{aligned} \
                        y'&=\\frac{(6x^2 + 6x)(5x^2 + 2)-(2x^3 + 3x^2)(10x)}{(5x^2 + 2)^2} \\\\[10pt] \
                        &=\\frac{2x[(3x + 3)(5x^2 + 2)-(2x^3 + 3x^2)(5)]}{(5x^2 + 2)^2} \\\\[10pt] \
                        &=\\frac{2x[15x^{3}+6x+15x^{2}+6-(10x^{3}+15x^{2})]}{(5x^2 + 2)^2} \\\\[10pt] \
                        &=\\boxed{\\frac{2x[5x^{3}+6x+6]}{(5x^2 + 2)^2}} \\\\[10pt] \
                    \\end{aligned}"}</MathJax>
                </Typography>
            </Problem>
        </Stack>
    );
}

export function Deriv15() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Derivatif"
                title="Latihan Soal"
                time="2 min"
            />
            <Problem
                title={"Soal 15"}
                equation={"Jika turunan dari fungsi \\( f(x) = \\frac{3x^4 + x^3}{5x^5 + 3} \\) adalah \\( f'(x) = \\frac{-15x^8 + ax^7 + 36x^3 + bx^2}{25x^{10} + 30x^5 + 9} \\), maka tentukan nilai \\( (a + b) \\)"}
                accordion_text="Pembahasan"
            >
                <Stack gap={3}>
                    <Typography>
                        <MathJax>{"\\begin{aligned} \
                            f'(x)&=\\frac{(12x^3 + 3x^2)(5x^5 + 3)-(3x^4 + x^3)(25x^4)}{(5x^5 + 3)^{2}} \\\\[10pt] \
                            &=\\frac{60x^8+36x^3+15x^7+9x^2-(75x^8+25x^7)}{25x^{10} + 30x^5 + 9} \\\\[10pt] \
                            &=\\frac{-15x^8-10x^7+36x^3+9x^2}{25x^{10} + 30x^5 + 9} \
                        \\end{aligned}"}</MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>{"\\begin{aligned} \
                            \\frac{-15x^8 + ax^7 + 36x^3 + bx^2}{25x^{10} + 30x^5 + 9}&=\\frac{-15x^8-10x^7+36x^3+9x^2}{25x^{10} + 30x^5 + 9} \\\\[10pt] \
                            ax^7+bx^2&=-10x^7+9x^2 \\\\[5pt] \
                            a&=-10 \\\\[5pt] \
                            b&=9 \\\\[5pt] \
                        \\end{aligned}"}</MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ a+b = -10+9 = \\boxed{-1} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Deriv16() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Derivatif"
                title="Latihan Soal"
                time="2 min"
            />
            <Problem
                title={"Soal 16"}
                equation={"Seorang arsitek taman ingin membangun taman berbentuk persegi panjang di tengah lapangan. Seluruh sisi taman akan diberi pagar kawat. Jika tersedia 100 meter kawat untuk pagar, tentukan ukuran taman agar luasnya maksimum."}
                accordion_text="Pembahasan"
            >
                <Typography>
                    <MathJax>{"\\begin{aligned} \
                        p+l&=100 \\\\[5pt] \
                        l&=100-p \\\\[10pt] \
                        A&=p \\cdot l \\\\[5pt] \
                        &=p(100-p) \\\\[5pt] \
                        &=100p-p^2 \\\\[10pt] \
                        A'&=100-2p \\\\[5pt] \
                        0&=100-2p \\\\[5pt] \
                        2p&=100 \\\\[5pt] \
                        p&=50 \\\\[10pt] \
                        l&=100-50 \\\\[5pt] \
                        &=50 \\\\[10pt] \
                        A&=p \\cdot l \\\\[5pt] \
                        &=50 \\cdot 50 \\\\[5pt] \
                        &=\\boxed{2500 \\space \\text{m}^{2}} \\\\[5pt] \
                    \\end{aligned}"}</MathJax>
                </Typography>
            </Problem>
        </Stack>
    );
}

export function Deriv17() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Derivatif"
                title="Latihan Soal"
                time="2 min"
            />
            <Problem
                title={"Soal 17"}
                equation={"Danar akan membuat balok tanpa tutup dengan menggunting empat persegi pojok sebuah kertas karton berukuran \\(24 \\space \\text{cm} \\times 15 \\space \\text{cm}\\). Tentukan volume maksimum balok yang dapat dibentuk."}
                accordion_text="Pembahasan"
            >
                <Stack gap={3}>
                    <Box height={500} width={"auto"} sx={{display:'flex', justifyContent:'center'}}>
                        <img src={'/exercise/derivative/soal_17.svg'} alt="img" width={"100%"} />
                    </Box>
                    <Typography>
                        <MathJax>{"\\begin{aligned} \
                            V&=(24-2x)(15-2x)x \\\\[10pt] \
                            &=x(360-78x+4x^2) \\\\[10pt] \
                            &=4x^3-78x^2+360x \\\\[20pt] \
                            V'&=12x^2-156x+360 \\\\[10pt] \
                            0&=12x^2-156x+360 \\\\[10pt] \
                            0&=x^2-13x+30 \\\\[10pt] \
                            0&=(x-3)(x-10) \
                        \\end{aligned}"}</MathJax>
                        <MathJax>
                            {"\\[ x=3 \\quad \\vee \\quad x=10 \\\\[10pt] \ \\]"}
                        </MathJax>
                    </Typography>
                    <Stack justifyContent={'center'} alignItems={'center'}>
                        <NumberLine dots={[[3,1],[10,1]]} signs={['+','-','+']}/>
                    </Stack>
                    <Typography>
                        <MathJax>{"\\begin{aligned} \
                            V_{max}=V(3)&=(24-2(3))(15-2(3))(3) \\\\[10pt] \
                            &=18 \\cdot 9 \\cdot 3 \\\\[10pt] \
                            &=\\boxed{486 \\space \\text{cm}^{3}} \
                        \\end{aligned}"}</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Deriv18() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Derivatif"
                title="Latihan Soal"
                time="2 min"
            />
            <Problem
                title={"Soal 18"}
                equation={"Diketahui proyek pembangunan Gedung Arga Mandiri diperkirakan akan selesai dalam \\( x \\) hari. Jika biaya proyek per hari adalah \\( (5x - 150 + \\frac{2100}{x}) \\) juta rupiah, maka agar biaya proyek minimum proyek harus diselesaikan dalam waktu berapa hari dan tentukan besar biaya perharinya."}
                accordion_text="Pembahasan"
            >
                <Stack gap={3}>
                    <Typography>
                        <MathJax>{"\\begin{aligned} \
                            y'&=0 \\\\[10pt] \
                            5-2100x^{-2} &= 0 \\\\[10pt] \
                            5 &= \\frac{2100}{x^{2}} \\\\[10pt] \
                            5x^{2} &= 2100 \\\\[10pt] \
                            x^{2} &= 420 \\\\[10pt] \
                            x &= \\sqrt{420} \\\\[10pt] \
                            x&= \\boxed {2\\sqrt{105} \\text{ hari}} \
                        \\end{aligned}"}</MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>{"\\begin{aligned} \
                            y&=5(2\\sqrt{105}) - 150 + \\frac{2100}{(2\\sqrt{105})} \\\\[10pt] \
                            &=10\\sqrt{105} - 150 + \\frac{1050}{\\sqrt{105}} \\\\[10pt] \
                            &=10\\sqrt{105} - 150 + 10\\sqrt{105} \\\\[10pt] \
                            &=\\boxed{(20\\sqrt{105} - 150) \\text{ juta rupiah}} \
                        \\end{aligned}"}</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Deriv19() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Derivatif"
                title="Latihan Soal"
                time="2 min"
            />
            <Problem
                title={"Soal 19"}
                equation={"Sebuah perusahaan mebel mampu menjual produk kursi sebanyak \\( (2000 - 10x) \\) unit setiap bulannya dengan harga jual setiap unit adalah \\( x \\) ribu rupiah. Jika biaya produksi yang dikeluarkan perusahaan tersebut untuk produksi seluruh kursi adalah \\( (25000 + 400x) \\) ribu rupiah, maka tentukan biaya produksi perusahaan tersebut agar diperoleh keuntungan maksimum!"}
                accordion_text="Pembahasan"
            >
                <Stack gap={3}>
                <Typography>
                        <MathJax>{"\\begin{aligned} \
                            r(x)&=x(2000-10x)=2000x-10x^2 \\\\[5pt] \
                            c(x)&=25000 + 400x \
                        \\end{aligned}"}</MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>{"\\begin{aligned} \
                            p(x)&=r(x)-c(x) \\\\[5pt] \
                            &=2000x-10x^{2}-25000-400x \\\\[5pt] \
                            &=-10x^{2}+1600x-25000 \\\\[5pt] \
                            p'(x)&=-20x+1600 \\\\[5pt] \
                            0&=-20x+1600 \\\\[5pt] \
                            20x&=1600 \\\\[5pt] \
                            x&=80 \
                        \\end{aligned}"}</MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>{"\\begin{aligned} \
                            c(80)&=25000 + 400x \\\\[5pt] \
                            &=25000 + 400(80) \\\\[5pt] \
                            &=25000 + 32000 \\\\[5pt] \
                            &=\\boxed{57000 \\text{ ribu rupiah}} \
                        \\end{aligned}"}</MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    );
}
