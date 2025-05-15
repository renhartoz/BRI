import React from "react";
import { Box, Stack, Typography, Grid2 } from "@mui/material";
import { MathJax } from "better-react-mathjax";
import Problem from "../maths/Problem";
import { CustomRawTable } from "../components/Tabel";
import ExerciseHeader from "./ExerciseHeader";

export function Thermo1() {
    const a_answer = [
        ["Proses", "Jenis", "Alasan"], 
        [<MathJax>{"\\[A \\to B\\]"}</MathJax>, "Isobarik", <MathJax>{"\\[\\Delta P=0 \\]"}</MathJax>],
        [<MathJax>{"\\[B \\to C\\]"}</MathJax>, "Isokhorik", <MathJax>{"\\[\\Delta V=0 \\]"}</MathJax>],
        [<MathJax>{"\\[C \\to A\\]"}</MathJax>, "Adiabatik", <MathJax>{"\\[P_{1}V_{1} \\neq P_{2}V_{2} \\]"}</MathJax>],
    ];

    const b_answer = [
        ["Proses", <MathJax>{"\\[W\\]"}</MathJax>, <MathJax>{"\\[\\Delta U\\]"}</MathJax>, <MathJax>{"\\[Q\\]"}</MathJax>], 
        [
            <MathJax>{"\\[A \\to B\\]"}</MathJax>, 
            <MathJax>{"\\begin{aligned} \
                W &= P\\Delta V \\\\[10pt] \
                &= 3\\times 10^{5} (0.2-0.1) \\\\[10pt] \
                &= 3\\times 10^{5} \\cdot 0.1 \\\\[10pt] \
                &= 3\\times 10^{4} \\space \\text{J} \
            \\end{aligned}"}</MathJax>, 
            <MathJax>{"\\begin{aligned} \
                \\Delta U &= \\frac{f}{2}\\Delta(PV) \\\\[10pt] \
                &= \\frac{3}{2} (3 \\times 10^{5} (0.2-0.1)) \\\\[10pt] \
                &= 1.5(3\\times 10^{4}) \\\\[10pt] \
                &= 4.5\\times 10^{4} \\space \\text{J} \
            \\end{aligned}"}</MathJax>,
            <MathJax>{"\\begin{aligned} \
                Q &= W + \\Delta U \\\\[10pt] \
                &= 3\\times 10^{4} + 4.5 \\times 10^{4} \\\\[10pt] \
                &= (3+4.5)\\times 10^{4} \\\\[10pt] \
                &= 7.5\\times 10^{4} \\space \\text{J} \
            \\end{aligned}"}</MathJax>,
        ],
        [
            <MathJax>{"\\[B \\to C\\]"}</MathJax>, 
            <MathJax>{"\\begin{aligned} \
                W &= P\\Delta V \\\\[10pt] \
                &= 0 \\space \\text{J} \
            \\end{aligned}"}</MathJax>, 
            <MathJax>{"\\begin{aligned} \
                \\Delta U &= \\frac{f}{2}\\Delta(PV) \\\\[10pt] \
                &= \\frac{3}{2} (\\left(1 \\times 10^{5} - 3 \\times 10^{5}\\right)0.2) \\\\[10pt] \
                &= 1.5(-2\\times 10^{5} \\cdot 0.2) \\\\[10pt] \
                &= -6\\times 10^{4} \\space \\text{J} \
            \\end{aligned}"}</MathJax>,
            <MathJax>{"\\begin{aligned} \
                Q &= W + \\Delta U \\\\[10pt] \
                &= -6\\times 10^{4} \\space \\text{J} \
            \\end{aligned}"}</MathJax>,
        ],
        [
            <MathJax>{"\\[C \\to A\\]"}</MathJax>, 
            <MathJax>{"\\begin{aligned} \
                W &= \\frac{\\Delta(PV)}{1-\\gamma} \\\\[10pt] \
                &= \\frac{3 \\times 10^{5} \\cdot 0.1 - 1 \\times 10^{5} \\cdot 0.2}{1-\\frac{5}{3}} \\\\[10pt] \
                &= \\frac{3 \\times 10^{4} - 2 \\times 10^{4}}{-\\frac{2}{3}} \\\\[10pt] \
                &= -1.5 \\times 10^{4} \\space \\text{J} \
            \\end{aligned}"}</MathJax>, 
            <MathJax>{"\\begin{aligned} \
                \\Delta U &= -W \\\\[10pt] \
                &= 1.5\\times 10^{4} \\space \\text{J} \
            \\end{aligned}"}</MathJax>,
            <MathJax>{"\\begin{aligned} \
                Q &= W + \\Delta U \\\\[10pt] \
                &= 0 \\space \\text{J} \
            \\end{aligned}"}</MathJax>,
        ],
    ];

    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Termodinamika"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 1"}
                instruction={"Perhatikan gambar siklus mesin kalor di bawah ini. (Gas monoatomik)"}
                equation={
                    <Box sx={{display:'flex', justifyContent:'center'}}>
                        <img
                            src="/exercise/thermodynamic/soal_1.png"
                            alt="Soal 1"
                        />
                    </Box>
                }
                option={{
                    bullet:"a",
                    items:[
                        "Tuliskan setiap proses yang terjadi (A-B, B-C, C-A)",
                        "Hitung usaha (\\(W\\)), kalor (\\(Q\\)), dan perubahan energi dalam (\\(\\Delta U\\)) yang dilakukan gas pada setiap proses"
                    ]
                }}
                accordion_text="Pembahasan"
            >
                <Stack gap={4}>
                    <Stack gap={2}>
                        <Typography variant="h5">a. Jenis proses:</Typography>
                        <CustomRawTable content={a_answer} variant="secondary" />
                    </Stack>
                    <Stack gap={2}>
                        <Typography variant="h5">b. Perhitungan</Typography>
                        <CustomRawTable content={b_answer} variant="secondary" />
                    </Stack>
                    <Stack></Stack>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Thermo2() {
    const a_answer = [
        ["Proses", "Jenis", "Alasan"], 
        [<MathJax>{"\\[A \\to B\\]"}</MathJax>, "Isokhorik", <MathJax>{"\\[\\Delta V=0 \\]"}</MathJax>],
        [<MathJax>{"\\[B \\to C\\]"}</MathJax>, "Isobarik", <MathJax>{"\\[\\Delta P=0 \\]"}</MathJax>],
        [<MathJax>{"\\[C \\to A\\]"}</MathJax>, "Adiabatik", <MathJax>{"\\[P_{1}V_{1} \\neq P_{2}V_{2} \\]"}</MathJax>],
    ];

    const b_answer = [
        ["Proses", <MathJax>{"\\[W\\]"}</MathJax>, <MathJax>{"\\[\\Delta U\\]"}</MathJax>, <MathJax>{"\\[Q\\]"}</MathJax>], 
        [
            <MathJax>{"\\[A \\to B\\]"}</MathJax>, 
            <MathJax>{"\\begin{aligned} \
                W &= P\\Delta V \\\\[10pt] \
                &= 0 \\space \\text{J} \
            \\end{aligned}"}</MathJax>, 
            <MathJax>{"\\begin{aligned} \
                \\Delta U &= \\frac{f}{2}\\Delta(PV) \\\\[10pt] \
                &= \\frac{3}{2} (\\left(1 \\times 10^{5} - 3 \\times 10^{5}\\right)0.1) \\\\[10pt] \
                &= 1.5(-2\\times 10^{5} \\cdot 0.1) \\\\[10pt] \
                &= -3\\times 10^{4} \\space \\text{J} \
            \\end{aligned}"}</MathJax>,
            <MathJax>{"\\begin{aligned} \
                Q &= W + \\Delta U \\\\[10pt] \
                &= -3\\times 10^{4} \\space \\text{J} \
            \\end{aligned}"}</MathJax>,
        ],
        [
            <MathJax>{"\\[B \\to C\\]"}</MathJax>, 
            <MathJax>{"\\begin{aligned} \
                W &= P\\Delta V \\\\[10pt] \
                &= 1\\times 10^{5} (0.2-0.1) \\\\[10pt] \
                &= 1\\times 10^{5} \\cdot 0.1 \\\\[10pt] \
                &= 1\\times 10^{4} \\space \\text{J} \
            \\end{aligned}"}</MathJax>, 
            <MathJax>{"\\begin{aligned} \
                \\Delta U &= \\frac{f}{2}\\Delta(PV) \\\\[10pt] \
                &= \\frac{3}{2} (1 \\times 10^{5} (0.2-0.1)) \\\\[10pt] \
                &= 1.5(1\\times 10^{4}) \\\\[10pt] \
                &= 1.5\\times 10^{4} \\space \\text{J} \
            \\end{aligned}"}</MathJax>,
            <MathJax>{"\\begin{aligned} \
                Q &= W + \\Delta U \\\\[10pt] \
                &= 1\\times 10^{4} + 1.5 \\times 10^{4} \\\\[10pt] \
                &= (1+1.5)\\times 10^{4} \\\\[10pt] \
                &= 2.5\\times 10^{4} \\space \\text{J} \
            \\end{aligned}"}</MathJax>,
        ],
        [
            <MathJax>{"\\[C \\to A\\]"}</MathJax>, 
            <MathJax>{"\\begin{aligned} \
                W &= \\frac{\\Delta(PV)}{1-\\gamma} \\\\[10pt] \
                &= \\frac{3 \\times 10^{5} \\cdot 0.1 - 1 \\times 10^{5} \\cdot 0.2}{1-\\frac{5}{3}} \\\\[10pt] \
                &= \\frac{3 \\times 10^{4} - 2 \\times 10^{4}}{-\\frac{2}{3}} \\\\[10pt] \
                &= -1.5 \\times 10^{4} \\space \\text{J} \
            \\end{aligned}"}</MathJax>, 
            <MathJax>{"\\begin{aligned} \
                \\Delta U &= -W \\\\[10pt] \
                &= 1.5\\times 10^{4} \\space \\text{J} \
            \\end{aligned}"}</MathJax>,
            <MathJax>{"\\begin{aligned} \
                Q &= W + \\Delta U \\\\[10pt] \
                &= 0 \\space \\text{J} \
            \\end{aligned}"}</MathJax>,
        ],
    ];

    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Termodinamika"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 2"}
                instruction={"Perhatikan gambar siklus mesin kalor di bawah ini. (Gas monoatomik)"}
                equation={
                    <Box sx={{display:'flex', justifyContent:'center'}}>
                        <img
                            src="/exercise/thermodynamic/soal_2.png"
                            alt="Soal 2"
                        />
                    </Box>
                }
                option={{
                    bullet:"a",
                    items:[
                        "Tuliskan setiap proses yang terjadi (A-B, B-C, C-A)",
                        "Hitung usaha (\\(W\\)), kalor (\\(Q\\)), dan perubahan energi dalam (\\(\\Delta U\\)) yang dilakukan gas pada setiap proses"
                    ]
                }}
                accordion_text="Pembahasan"
            >
                <Stack gap={4}>
                    <Stack gap={2}>
                        <Typography variant="h5">a. Jenis proses:</Typography>
                        <CustomRawTable content={a_answer} variant="secondary" />
                    </Stack>
                    <Stack gap={2}>
                        <Typography variant="h5">b. Perhitungan</Typography>
                        <CustomRawTable content={b_answer} variant="secondary" />
                    </Stack>
                    <Stack></Stack>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Thermo3() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Termodinamika"
                title="Latihan Soal"
                time="2 min"
            />
            <Problem
                title={"Soal 3"}
                instruction={"Sebuah mesin menerima kalor sebesar \\(2500\\) kalori dan kerja yang dapat dilakukan hanya sebesar \\(1000\\) kalori, maka efisiensi mesin tersebut?"}
                accordion_text="Pembahasan"
            >
                <Stack gap={4}>
                    <Stack gap={2}>
                        <Typography>Diketahui:</Typography>
                        <MathJax>{"\\( Q_{i}=2500 \\)"} kal</MathJax>
                        <MathJax>{"\\( Q_{o}=1000 \\)"} kal</MathJax>
                    </Stack>
                    <MathJax>{"\\begin{aligned} \
                        \\eta&=\\frac{Q_{i}-Q_{o}}{Q_{i}} \\\\[10pt] \
                        &=\\frac{2500-1000}{2500} \\\\[10pt] \
                        &=\\frac{1500}{2500} \\\\[10pt] \
                        &=\\frac{3}{5} = 0.6 = 60\\% \
                    \\end{aligned}"}</MathJax>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Thermo10() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Termodinamika"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 10"}
                equation={
                    <Box sx={{display:'flex', justifyContent:'center'}}>
                        <img
                            src="/exercise/thermodynamic/soal_10.png"
                            alt="Soal 10"
                        />
                    </Box>
                }
                accordion_text="Pembahasan"
            >
                <Stack gap={4}>
                    <Stack gap={2}>
                        <Typography>Diketahui:</Typography>
                        <MathJax>{"\\( Q_{1}=80 \\)"} kkal</MathJax>
                        <MathJax>{"\\( Q_{2}=48 \\)"} kkal</MathJax>
                        <MathJax>{"\\( T_{2}=87^{\\circ}\\)"}C</MathJax>
                    </Stack>
                    <MathJax>{"\\begin{aligned} \
                        \\frac{Q_{1}}{T_{1}}&=\\frac{Q_{2}}{T_{2}} \\\\[10pt] \
                        \\frac{80}{T_{1}}&=\\frac{48}{87} \\\\[10pt] \
                        T_{1}&=80 \\cdot \\frac{87}{48} \\\\[10pt] \
                        T_{1}&=80 \\cdot \\frac{29}{16} \\\\[10pt] \
                        T_{1}&=5 \\cdot 29 \\\\[10pt] \
                        T_{1}&=145^{\\circ}\\text{C} \
                    \\end{aligned}"}</MathJax>
                </Stack>
            </Problem>
        </Stack>
    );
}

export function Thermo23() {
    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <ExerciseHeader
                material="Termodinamika"
                title="Latihan Soal"
                time="5 min"
            />
            <Problem
                title={"Soal 23"}
                instruction={"Efisiensi tertinggi yang dapat dicapai oleh suatu mesin adalah \\(40\\%\\) dengan menggunakan siklus mesin carnot. \
                    jika mesin ini melepaskan panas gas ke udara yang suhunya \\(300 \\space \\text{K}\\), \
                    berapa suhu dalam silinder gas setelah terjadi pembakaran? \
                    jika mesin tersebut menyerap panas sebanyak \\(920\\) joule tiap siklus, \
                    hitung berapa banyak kerja yang dilakukan oleh mesin tiap siklus?"
                }
                accordion_text="Pembahasan"
            >
                <Stack gap={4}>
                    <Stack gap={2}>
                        <Typography>Diketahui:</Typography>
                        <MathJax>{"\\( \\eta=40\\% \\)"} kal</MathJax>
                        <MathJax>{"\\( T_{o}=300 \\space \\text{K} \\)"} kal</MathJax>
                    </Stack>
                    <MathJax>{"\\begin{aligned} \
                        \\eta&=1-\\frac{T_{o}}{T_{i}} \\\\[10pt] \
                        40\\%&=1-\\frac{300}{T_{i}} \\\\[10pt] \
                        \\frac{300}{T_{i}}&=1-0.4 \\\\[10pt] \
                        T_{i}&=\\frac{300}{0.6} \\\\[10pt] \
                        T_{i}&=500\\space\\text{K} \
                    \\end{aligned}"}</MathJax>
                    <MathJax>{"\\begin{aligned} \
                        \\eta&=\\frac{W}{Q_{i}} \\\\[10pt] \
                        40\\%&=\\frac{W}{920} \\\\[10pt] \
                        W&=0.4\\cdot920 \\\\[10pt] \
                        W&=368\\space\\text{J} \
                    \\end{aligned}"}</MathJax>
                </Stack>
            </Problem>
        </Stack>
    );
}
