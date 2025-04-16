import React from "react";
import { Stack, Typography, Grid2 } from "@mui/material";
import { MathJax } from "better-react-mathjax";
import Problem from "../components/Problem";

export function GasKinetics1() {
    return (
        <Stack px={{xs:5, sm:8, md:10}} py={4} gap={3} sx={{ backgroundColor: '#fff' }}>
            <Stack gap={1} direction={'column'}>
                <Typography textTransform={'uppercase'} variant="body2" letterSpacing={-.5} color="#555">Kinematika Gas</Typography>
                <Typography textTransform={'capitalize'} fontWeight={700} variant="h5">Latihan Soal</Typography>
            </Stack>
            <Typography color="#555">5 min</Typography>
            <Problem
                title={'Soal 1'}
                equation={
                    "Suhu awal dari suatu gas dalam ruang tertutup adalah \\(T\\). \
                    Tiap partikel bergerak secara acak dengan kelajuan \\(100 \\space \\frac{m}{s}\\). \
                    Kelajuan partikel-partikel itu saat suhunya \\(4T\\) adalah ..."
                }
                accordion_text="Pembahasan"
            >
                <Stack gap={1} mt={2}>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Diketahui:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\( T_{0} = T \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( v_{0} = 100 \\space \\frac{m}{s} \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( T_{1} = 4T \\)"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Formula:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ v=\\sqrt{\\frac{3kT}{m}} \\]"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ v \\propto \\sqrt{T} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Langkah Matematis:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ \\begin{aligned} \
                                \\frac{v_{0}}{v_{1}} &= \\frac{\\sqrt{T_{0}}}{\\sqrt{T_{1}}} \\\\[10pt] \
                                \\frac{100 \\space \\frac{m}{s}}{v} &= \\frac{\\sqrt{T}}{\\sqrt{4T}} \\\\[10pt] \
                                \\frac{100 \\space \\frac{m}{s}}{v} &= \\frac{1}{2} \\\\[10pt] \
                                v &= 200 \\space \\frac{m}{s} \
                            \\end{aligned} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    )
}

export function GasKinetics2() {
    return (
        <Stack px={{xs:5, sm:8, md:10}} py={4} gap={3} sx={{ backgroundColor: '#fff' }}>
            <Stack gap={1} direction={'column'}>
                <Typography textTransform={'uppercase'} variant="body2" letterSpacing={-.5} color="#555">Kinematika Gas</Typography>
                <Typography textTransform={'capitalize'} fontWeight={700} variant="h5">Latihan Soal</Typography>
            </Stack>
            <Typography color="#555">5 min</Typography>
            <Problem
                title={'Soal 2'}
                equation={
                    "Sebuah tabung gas dengan volume tertetu berisi \
                    gak ideal dengan tekanan \\(P\\), akar nilai rata- rata \
                    kuadrat laju molekul gas disebut \\(V_{rms}\\). Jika \
                    ke dalam tabung itu dipompakan gas sejenis, \
                    sehingga tekanannya menjadi \\(2P\\) sedangkan \
                    suhunya tetap maka \\(V_{rms}\\) tersebut menjadi ..."
                }
                accordion_text="Pembahasan"
            >
                <Stack gap={1} mt={2}>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Diketahui:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\( P_{0} = P \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( v_{0} = V_{rms} \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( P_{1} = 2P \\)"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Formula:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ v=\\sqrt{\\frac{3P}{\\rho}} \\]"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ v \\propto \\sqrt{P} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Langkah Matematis:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ \\begin{aligned} \
                                \\frac{v_{0}}{v_{1}} &= \\frac{\\sqrt{P_{0}}}{\\sqrt{P_{1}}} \\\\[10pt] \
                                \\frac{V_{rms}}{v} &= \\frac{\\sqrt{P}}{\\sqrt{2P}} \\\\[10pt] \
                                \\frac{V_{rms}}{v} &= \\frac{1}{\\sqrt{2}} \\\\[10pt] \
                                v &= \\sqrt{2} V_{rms} \
                            \\end{aligned} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    )
}

export function GasKinetics3() {
    return (
        <Stack px={{xs:5, sm:8, md:10}} py={4} gap={3} sx={{ backgroundColor: '#fff' }}>
            <Stack gap={1} direction={'column'}>
                <Typography textTransform={'uppercase'} variant="body2" letterSpacing={-.5} color="#555">Kinematika Gas</Typography>
                <Typography textTransform={'capitalize'} fontWeight={700} variant="h5">Latihan Soal</Typography>
            </Stack>
            <Typography color="#555">5 min</Typography>
            <Problem
                title={'Soal 3'}
                equation={
                    "Sebuah tangki bervolume \\(2,4 \\space m^{3}\\) diisi dengan \
                    \\(2 \\space kg\\) gas. Tekanan dalam tangki \\(1,3 \\space atm\\). \
                    Kecepatan efektif molekul-molekul gas ini adalah ..."
                }
                accordion_text="Pembahasan"
            >
                <Stack gap={1} mt={2}>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Diketahui:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\( V = 2,4 \\space m^{3} \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( m = 2 \\space kg \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( P = 1,3 \\space atm \\)"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Formula:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ v=\\sqrt{\\frac{3P}{\\rho}} \\]"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ \\rho=\\frac{m}{V} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Langkah Matematis:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ \\begin{aligned} \
                                \\rho=\\frac{m}{V}&=\\frac{2 \\space kg}{2,4 \\space m^{3}}=\\frac{5}{6} \\space \\frac{kg}{m^{3}} \\\\[10pt] \
                                v=\\sqrt{\\frac{3P}{\\rho}}&=\\sqrt{\\frac{3(1,3 \\space atm)}{\\frac{5}{6} \\space \\frac{kg}{m^{3}}}} \\\\[10pt] \
                                &=\\sqrt{(3,9 \\cdot 1,01 \\cdot 10^{5} \\space Pa) \\biggl(\\frac{6}{5} \\biggl) \\space \\frac{kg}{m^{3}}} \\\\[10pt] \
                                &= \\sqrt{472680 \\space \\frac{m^{2}}{s^{2}}} \\\\[10pt] \
                                &= 687,5172 \\sapce \\frac{m}{s} \\\\[10pt] \
                                &\\thickapprox 687,52 \\space \\frac{m}{s}\
                            \\end{aligned} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    )
}

export function GasKinetics4() {
    return (
        <Stack px={{xs:5, sm:8, md:10}} py={4} gap={3} sx={{ backgroundColor: '#fff' }}>
            <Stack gap={1} direction={'column'}>
                <Typography textTransform={'uppercase'} variant="body2" letterSpacing={-.5} color="#555">Kinematika Gas</Typography>
                <Typography textTransform={'capitalize'} fontWeight={700} variant="h5">Latihan Soal</Typography>
            </Stack>
            <Typography color="#555">5 min</Typography>
            <Problem
                title={'Soal 4'}
                equation={
                    "Sebuah ban sepeda memiliki volume \\(=100 \\space cm^{3}\\). \
                    Tekanan awal diban sepeda \\(=0,5 \\space atm\\). \
                    Ban tersebut dipompa dengan suatu pompa yang volumenya \
                    \\(=50 \\space cm^{3}\\). Tekanan udara luar \
                    \\(=78 \\space cmHg\\) dan temperatur tidak berubah. \
                    Tekanan ban sepeda setelah dipompa sebanyak \\(4\\) kali adalah ..."
                }
                accordion_text="Pembahasan"
            >
                <Stack gap={1} mt={2}>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Diketahui:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\( V_{b} = 100 \\space cm^{3} \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( P_{b} = 0,5 \\space atm \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( V_{p} = 50 \\space cm^{3} \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( P_{p} = 78 \\space cmHg \\thickapprox 1 \\space atm \\)"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Formula:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ PV = \\sum PV \\]"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ P_{n} = \\frac{P_{n-1} V_{b} + P_{p} V_{p}}{V_{b}} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack gap={3}>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Langkah Matematis:</Typography>
                    <Stack>
                        <Typography>Pompa ke-1</Typography>
                        <Typography>
                            <MathJax>
                                {"\\[ P_{1} = \\frac{P_{b}V_{b}+P_{p}V_{p}}{V_{b}} = \\frac{(0,5)(100)+(1)(50)}{100}\\space atm = 1 \\space atm \\]"}
                            </MathJax>
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography>Pompa ke-2</Typography>
                        <Typography>
                            <MathJax>
                                {"\\[ P_{2} = \\frac{P_{1}V_{b}+P_{p}V_{p}}{V_{b}} = \\frac{(1)(100)+(1)(50)}{100}\\space atm = 1,5 \\space atm \\]"}
                            </MathJax>
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography>Pompa ke-3</Typography>
                        <Typography>
                            <MathJax>
                                {"\\[ P_{3} = \\frac{P_{2}V_{b}+P_{p}V_{p}}{V_{b}} = \\frac{(1,5)(100)+(1)(50)}{100}\\space atm = 2 \\space atm \\]"}
                            </MathJax>
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography>Pompa ke-4</Typography>
                        <Typography>
                            <MathJax>
                                {"\\[ P_{4} = \\frac{P_{3}V_{b}+P_{p}V_{p}}{V_{b}} = \\frac{(1,5)(100)+(1)(50)}{100}\\space atm = 2,5 \\space atm \\]"}
                            </MathJax>
                        </Typography>
                    </Stack>
                </Stack>
            </Problem>
        </Stack>
    )
}

export function GasKinetics5() {
    return (
        <Stack px={{xs:5, sm:8, md:10}} py={4} gap={3} sx={{ backgroundColor: '#fff' }}>
            <Stack gap={1} direction={'column'}>
                <Typography textTransform={'uppercase'} variant="body2" letterSpacing={-.5} color="#555">Kinematika Gas</Typography>
                <Typography textTransform={'capitalize'} fontWeight={700} variant="h5">Latihan Soal</Typography>
            </Stack>
            <Typography color="#555">5 min</Typography>
            <Problem
                title={'Soal 5'}
                equation={
                    "Sejumlah gas ideal bertekanan \\(\\rho\\) \
                    dipanaskan dari suhu \\(27^{\\circ}C\\) menjadi \\(54^{\\circ}C\\). \
                    Jika volumenya naik menjadi dua kali \
                    volume semula tekanannya akan menjadi ..."
                }
                accordion_text="Pembahasan"
            >
                <Stack gap={1} mt={2}>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Diketahui:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\( P_{0} = \\rho \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( T_{0} = 27^{\\circ}C = 300 \\space K \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( T_{1} = 54^{\\circ}C = 327 \\space K \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( V_{1} = 2V_{0} \\)"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Formula:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ \\frac{P_{1}V_{1}}{T_{1}}=\\frac{P_{2}V_{2}}{T_{2}} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack gap={3}>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Langkah Matematis:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ \\begin{aligned} \
                                \\frac{P_{0}V_{0}}{T_{0}}&=\\frac{P_{1}V_{1}}{T_{1}} \\\\[10pt] \
                                \\frac{\\rho V_{0}}{300 \\space K}&=\\frac{P (2V_{0})}{327 \\space K} \\\\[10pt] \
                                P &= \\frac{\\rho V_{0}}{300 \\space K} \\space \\frac{327 \\space K}{2V_{0}} \\\\[10pt] \
                                P &= 0,545 \\rho \\\\ \
                                P &\\thickapprox 0,55 \\rho \
                            \\end{aligned} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    )
}

export function GasKinetics6() {
    const item = [
        "Berbanding lurus dengan energi kinetik rata-rata partikel.",
        "Berbanding terbalik dengan volume gas dalam ruang.",
        "Berbanding lurus dengan jumlah partikel gas.",
        "Berbanding terbalik dengan kuadrat kecepatan partikel gas."
    ]
    return (
        <Stack px={{xs:5, sm:8, md:10}} py={4} gap={3} sx={{ backgroundColor: '#fff' }}>
            <Stack gap={1} direction={'column'}>
                <Typography textTransform={'uppercase'} variant="body2" letterSpacing={-.5} color="#555">Kinematika Gas</Typography>
                <Typography textTransform={'capitalize'} fontWeight={700} variant="h5">Latihan Soal</Typography>
            </Stack>
            <Typography color="#555">5 min</Typography>
            <Problem
                title={'Soal 6'}
                equation={
                    <>
                        <Typography fontSize={'1em'}>
                            Menurut teori kinetik gas, tekanan gas dalam ruang tertutup:
                        </Typography>
                        <Grid2 container spacing={.5} direction={'column'}>
                            {item.map((listItem, listIndex) => (
                                <Grid2 xs={3} sm={3} key={listIndex}>
                                    <Stack direction="row" alignItems="center" gap={1}>
                                        <Typography sx={{ color: item.color||"primary.main", fontSize: "1em" }}>{listIndex+1}.&nbsp;</Typography>
                                        <Typography 
                                            variant="body1"
                                            fontSize={{ xs: ".8em", sm: "1em" }}
                                            color="black_blue"
                                        >
                                            <MathJax>
                                                {listItem}
                                            </MathJax>
                                        </Typography>
                                    </Stack>
                                </Grid2>
                            ))}
                        </Grid2>
                    </>
                }
                accordion_text="Pembahasan"
            >
                <Stack gap={3}>
                    <Stack>
                        <Typography>
                            <MathJax>
                                {"\\[E_{k}=\\frac{3}{2}PV\\]"}
                            </MathJax>
                        </Typography>
                        <Typography textAlign={{xs:'center'}}>Pernyataan <Typography component={'span'} color="secondary" fontWeight={600}>1</Typography> dan <Typography component={'span'} color="secondary" fontWeight={600}>2</Typography> benar</Typography>
                    </Stack>
                    <Stack>
                        <Typography>
                            <MathJax>
                                {"\\[PV=NkT\\]"}
                            </MathJax>
                        </Typography>
                        <Typography textAlign={{xs:'center'}}>Pernyataan <Typography component={'span'} color="secondary" fontWeight={600}>2</Typography> dan <Typography component={'span'} color="secondary" fontWeight={600}>3</Typography> benar</Typography>
                    </Stack>
                    <Stack>
                        <Typography>
                            <MathJax>
                                {"\\[v=\\sqrt{\\frac{3P}{\\rho}}\\]"}
                            </MathJax>
                        </Typography>
                        <Typography textAlign={{xs:'center'}}>Pernyataan <Typography component={'span'} color="tertiary" fontWeight={600}>4</Typography> salah</Typography>
                    </Stack>
                </Stack>
            </Problem>
        </Stack>
    )
}

export function GasKinetics7() {
    return (
        <Stack px={{xs:5, sm:8, md:10}} py={4} gap={3} sx={{ backgroundColor: '#fff' }}>
            <Stack gap={1} direction={'column'}>
                <Typography textTransform={'uppercase'} variant="body2" letterSpacing={-.5} color="#555">Kinematika Gas</Typography>
                <Typography textTransform={'capitalize'} fontWeight={700} variant="h5">Latihan Soal</Typography>
            </Stack>
            <Typography color="#555">5 min</Typography>
            <Problem
                title={'Soal 7'}
                equation={
                    "Neon (\\(Ne\\)) adalah suatu gas monoatomik. \
                    Energi dalam \\(2 \\space g\\) gas neon pada suhu \
                    \\(50^{\\circ}C\\) jika massa molekul relatifnya \\(M_{r}=10 \\space \\frac{g}{mol}\\) adalah ..."
                }
                accordion_text="Pembahasan"
            >
                <Stack gap={1} mt={2}>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Diketahui:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\( m = 2 \\space g \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( T = 50^{\\circ}C = 323 \\space K \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( M_{r} = 10 \\space \\frac{g}{mol} \\)"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Formula:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ M_{r}=\\frac{m}{n} \\]"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ PV=nRT \\]"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ E_{k}=\\frac{3}{2}PV \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Langkah Matematis:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ \\begin{aligned} \
                                n = \\frac{m}{M_{r}} &= \\frac{2 \\space g}{10 \\frac{g}{mol}} = 0,2 \\space mol \\\\[10pt] \
                                PV = nRT &= (0,2 \\space mol) \\biggl(0,082 \\space L \\space \\frac{atm}{mol \\space K}\\biggl) (323,15 \\space K) = 5,29966 \\space L \\space atm \\\\[10pt] \
                                E_{k}=\\frac{3}{2}PV &= \\frac{3}{2}(5,29966 \\space L \\space atm) =  7,94949 \\space L \\space atm = 805,28 \\space J \\\\[10pt] \
                            \\end{aligned} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    )
}

export function GasKinetics8() {
    return (
        <Stack px={{xs:5, sm:8, md:10}} py={4} gap={3} sx={{ backgroundColor: '#fff' }}>
            <Stack gap={1} direction={'column'}>
                <Typography textTransform={'uppercase'} variant="body2" letterSpacing={-.5} color="#555">Kinematika Gas</Typography>
                <Typography textTransform={'capitalize'} fontWeight={700} variant="h5">Latihan Soal</Typography>
            </Stack>
            <Typography color="#555">5 min</Typography>
            <Problem
                title={'Soal 8'}
                equation={
                    "Pada hukum Boyle \\(P \\cdot V = k\\), \\(k\\) mempunyai dimensi ..."
                }
                accordion_text="Pembahasan"
            >
                <Stack gap={1} mt={2}>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Diketahui:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\( k=PV \\)"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Formula:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ F=ma \\]"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ P=\\frac{F}{A} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Langkah Matematis:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ \\begin{aligned} \
                                k&=\\frac{F}{A} \\cdot V \\\\[10pt] \
                                &=F \\cdot l \\\\[10pt] \
                                &=W \\\\[10pt] \
                                &=\\text{Usaha} \
                            \\end{aligned} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    )
}

export function GasKinetics9() {
    const item = [
        "Kecepatan rms rata-rata dari molekul menjadi dua kali",
        "Suhu berubah menjadi \\(600 \\space K\\)",
        "Momentum rata-rata dari molekul menjadi dua kali",
        "Suhu berubah menjadi \\(300^{2} \\space K\\)",
        "Kecepatan rata-rata molekul menjadi dua kali",
    ]
    return (
        <Stack px={{xs:5, sm:8, md:10}} py={4} gap={3} sx={{ backgroundColor: '#fff' }}>
            <Stack gap={1} direction={'column'}>
                <Typography textTransform={'uppercase'} variant="body2" letterSpacing={-.5} color="#555">Kinematika Gas</Typography>
                <Typography textTransform={'capitalize'} fontWeight={700} variant="h5">Latihan Soal</Typography>
            </Stack>
            <Typography color="#555">5 min</Typography>
            <Problem
                title={'Soal 9'}
                equation={
                    <>
                        <Typography fontSize={'1em'}>
                            <MathJax>
                                {"Suatu gas ideal pada \\(300 \\space K\\) \
                                dipanaskan dengan volume tetap, \
                                sehingga energi kinetik rata-rata \
                                dari molekul gas menjadi dua kali \
                                lipat. Pernyataan berikut ini yang \
                                tepat adalah ..."}
                            </MathJax>
                        </Typography>
                        <Grid2 container spacing={.5} direction={'column'}>
                            {item.map((listItem, listIndex) => (
                                <Grid2 xs={3} sm={3} key={listIndex}>
                                    <Stack direction="row" alignItems="center" gap={1}>
                                        <Typography sx={{ color: item.color||"primary.main", fontSize: "1em" }}>{String.fromCharCode(97 + listIndex)}.&nbsp;</Typography>
                                        <Typography 
                                            variant="body1"
                                            fontSize={{ xs: ".8em", sm: "1em" }}
                                            color="black_blue"
                                        >
                                            <MathJax>
                                                {listItem}
                                            </MathJax>
                                        </Typography>
                                    </Stack>
                                </Grid2>
                            ))}
                        </Grid2>
                    </>
                }
                accordion_text="Pembahasan"
            >
                <Stack gap={1} mt={2}>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Diketahui:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\( T=300 \\space K \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( E_{k1} = 2E_{k0} \\)"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Formula:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ p=mv \\]"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ E_{k}=\\frac{3}{2}PV = \\frac{3}{2}NkT \\]"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ v=\\sqrt{\\frac{3kT}{m}} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Langkah Matematis:</Typography>
                    <Stack gap={3}>
                        <Stack>
                            <Typography>
                                <MathJax>
                                    {"\\[ \\begin{aligned} \
                                        E_{k1}&=2E_{k0} \\\\[10pt] \
                                        \\frac{3}{2}NkT &= 2 \\biggl(\\frac{3}{2}Nk(300 \\space K)\\biggl) \\\\[10pt] \
                                        T&=600 \\space K \\\\[10pt] \
                                    \\end{aligned} \\]"}
                                </MathJax>
                            </Typography>
                            <Typography textAlign={{xs:'center'}}>Pernyataan <Typography component={'span'} color="secondary" fontWeight={600}>b</Typography> benar, pernyataan <Typography component={'span'} color="tertiary" fontWeight={600}>d</Typography> salah </Typography>
                        </Stack>
                        <Stack>
                            <Typography>
                                <MathJax>
                                    {"\\[ \\begin{aligned} \
                                        \\frac{v_{0}}{v_{1}}&=\\sqrt{\\frac{T_{0}}{T_{1}}} \\\\[10pt] \
                                        \\frac{v_{0}}{v_{1}}&=\\sqrt{\\frac{300}{600}} \\\\[10pt] \
                                        v_{1}&=\\sqrt{2}v_{0} \\space K \\\\[10pt] \
                                    \\end{aligned} \\]"}
                                </MathJax>
                            </Typography>
                            <Typography textAlign={{xs:'center'}}>Pernyataan <Typography component={'span'} color="tertiary" fontWeight={600}>a</Typography>, <Typography component={'span'} color="tertiary" fontWeight={600}>c</Typography>, dan <Typography component={'span'} color="tertiary" fontWeight={600}>e</Typography>  salah </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Problem>
        </Stack>
    )
}

export function GasKinetics10() {
    return (
        <Stack px={{xs:5, sm:8, md:10}} py={4} gap={3} sx={{ backgroundColor: '#fff' }}>
            <Stack gap={1} direction={'column'}>
                <Typography textTransform={'uppercase'} variant="body2" letterSpacing={-.5} color="#555">Kinematika Gas</Typography>
                <Typography textTransform={'capitalize'} fontWeight={700} variant="h5">Latihan Soal</Typography>
            </Stack>
            <Typography color="#555">5 min</Typography>
            <Problem
                title={'Soal 10'}
                equation={
                    "Massa sebuah molekul nitrogen \
                    adalah empat belas kali massa \
                    sebuah molekul hidrogen. Dengan \
                    demikian, molekul-molekul \
                    nitrogen pada suhu \\(294 \\space K\\) \
                    mempunyai laju rata-rata yang \
                    sama dengan molekul-molekul \
                    hidrogen pada suhu ..."
                }
                accordion_text="Pembahasan"
            >
                <Stack gap={1} mt={2}>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Diketahui:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\( m_{N} = 14m_{H}\\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( T_{N} = 294 \\space K \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( v_{N} = v_{H} \\)"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Formula:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ v=\\sqrt{\\frac{3kT}{m}} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Langkah Matematis:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ \\begin{aligned} \
                                v_{N} &= v_{H} \\\\[10pt] \
                                \\sqrt{\\frac{3kT_{N}}{m_{N}}} &= \\sqrt{\\frac{3kT_{H}}{m_{H}}} \\\\[10pt] \
                                \\frac{T_{N}}{m_{N}} &= \\frac{T_{H}}{m_{H}} \\\\[10pt] \
                                \\frac{249 \\space K}{14m_{H}} &= \\frac{T_{H}}{m_{H}} \\\\[10pt] \
                                T_{H} &= 10,5 \\space K \\\\[10pt] \
                            \\end{aligned} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    )
}

export function GasKinetics11() {
    return (
        <Stack px={{xs:5, sm:8, md:10}} py={4} gap={3} sx={{ backgroundColor: '#fff' }}>
            <Stack gap={1} direction={'column'}>
                <Typography textTransform={'uppercase'} variant="body2" letterSpacing={-.5} color="#555">Kinematika Gas</Typography>
                <Typography textTransform={'capitalize'} fontWeight={700} variant="h5">Latihan Soal</Typography>
            </Stack>
            <Typography color="#555">5 min</Typography>
            <Problem
                title={'Soal 11'}
                equation={
                    "Suatu gas ideal pada suhu \\(27^{\\circ}C\\) dan \
                    tekanan \\(5 \\space atm\\) memiliki volume \\(5 \\space L\\). \
                    Jika tekanan menjadi \\(4 \\space atm\\), \
                    maka volume gas menjadi ..."
                }
                accordion_text="Pembahasan"
            >
                <Stack gap={1} mt={2}>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Diketahui:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\( T = 27^{\\circ}C \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( P_{1} = 5 \\space atm \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( V_{1} = 5 \\space L \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( P_{2} = 4 \\space atm \\)"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Formula:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ P_{1}V_{1}=P_{2}V_{2} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Langkah Matematis:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ \\begin{aligned} \
                                P_{1}V_{1}&=P_{2}V_{2} \\\\[10pt] \
                                (5 \\space atm)(5 \\space L) &= (4 \\space atm)V \\\\[10pt] \
                                25 \\space L &= 4V \\\\[10pt] \
                                V &= 6,25 \\space L \\\\[10pt] \
                            \\end{aligned} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    )
}

export function GasKinetics12() {
    return (
        <Stack px={{xs:5, sm:8, md:10}} py={4} gap={3} sx={{ backgroundColor: '#fff' }}>
            <Stack gap={1} direction={'column'}>
                <Typography textTransform={'uppercase'} variant="body2" letterSpacing={-.5} color="#555">Kinematika Gas</Typography>
                <Typography textTransform={'capitalize'} fontWeight={700} variant="h5">Latihan Soal</Typography>
            </Stack>
            <Typography color="#555">5 min</Typography>
            <Problem
                title={'Soal 12'}
                equation={
                    "Sebuah tabung berisi gas monoatomik. \
                    Kedalam tabung tersebut dipompakan gas yang sama \
                    sehingga tekanannya menjadi \\(3\\) kali semula. \
                    Besarnya perubahan energi dalam gas \
                    tersebut jika suhunya tetap adalah ..."
                }
                accordion_text="Pembahasan"
            >
                <Stack gap={1} mt={2}>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Diketahui:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\( P_{1} = 3P_{0} \\)"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Formula:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ E_{k} = \\frac{3}{2}PV \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Langkah Matematis:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ \\begin{aligned} \
                                \\frac{E_{k0}}{E_{k1}} &= \\frac{P_{0}}{P_{1}} \\\\[10pt] \
                                \\frac{E_{k0}}{E_{k1}} &= \\frac{P_{0}}{3P_{0}} \\\\[10pt] \
                                E_{k1} &= 3E_{k0} \\\\[10pt] \
                            \\end{aligned} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    )
}

export function GasKinetics13() {
    return (
        <Stack px={{xs:5, sm:8, md:10}} py={4} gap={3} sx={{ backgroundColor: '#fff' }}>
            <Stack gap={1} direction={'column'}>
                <Typography textTransform={'uppercase'} variant="body2" letterSpacing={-.5} color="#555">Kinematika Gas</Typography>
                <Typography textTransform={'capitalize'} fontWeight={700} variant="h5">Latihan Soal</Typography>
            </Stack>
            <Typography color="#555">5 min</Typography>
            <Problem
                title={'Soal 13'}
                equation={
                    "Dua puluh lima liter gas ideal \
                    bersuhu \\(227^{\\circ}C\\) bertekanan \\(165,6 \\space N/m^{2}\\). \
                    Banyak partikel gas tersebut ..."
                }
                accordion_text="Pembahasan"
            >
                <Stack gap={1} mt={2}>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Diketahui:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\( V = 25 \\space L \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( T = 227^{\\circ}C = 500 \\space K \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( P = 165,6 \\space Pa \\)"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Formula:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ PV = NkT \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Langkah Matematis:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ \\begin{aligned} \
                                PV &= NkT \\\\[10pt] \
                                (165,6 \\space Pa)(25 \\space L) &= N(1.38 \\times 10^{-23} \\space J/K)(500 \\space K) \\\\[10pt] \
                                4140 \\space J &= (690N) \\space J \\\\[10pt] \
                                N &= \\frac{4140}{690} \\\\[10pt] \
                                N &= 6 \\\\[10pt] \
                            \\end{aligned} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    )
}

export function GasKinetics14() {
    return (
        <Stack px={{xs:5, sm:8, md:10}} py={4} gap={3} sx={{ backgroundColor: '#fff' }}>
            <Stack gap={1} direction={'column'}>
                <Typography textTransform={'uppercase'} variant="body2" letterSpacing={-.5} color="#555">Kinematika Gas</Typography>
                <Typography textTransform={'capitalize'} fontWeight={700} variant="h5">Latihan Soal</Typography>
            </Stack>
            <Typography color="#555">5 min</Typography>
            <Problem
                title={'Soal 14'}
                equation={
                    "Suatu gas ideal mempunyai energi \
                    dalam \\(3,03 \\times 10^{28} \\space J\\). \
                    Jika energi kinetiknya \\(5 \\space kJ\\), jumlah gas ideal ..."
                }
                accordion_text="Pembahasan"
            >
                <Stack gap={1} mt={2}>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Diketahui:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\( \\sum E = 3,03 \\times 10^{28} \\space J \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( E_{k} = 5 \\space kJ = 5 \\times 10^{3} \\space J \\)"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Formula:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ \\sum E = N \\cdot E_{k} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Langkah Matematis:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ \\begin{aligned} \
                                \\sum E &= N \\cdot E_{k} \\\\[10pt] \
                                3,03 \\times 10^{28} \\space J &= N(5 \\times 10^{3} \\space J) \\\\[10pt] \
                                N &= \\frac{3,03 \\times 10^{28} \\space J}{5 \\times 10^{3} \\space J} \\\\[10pt] \
                                N &= 6,06 \\times 10^{24} \\space J \\\\[10pt] \
                            \\end{aligned} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    )
}

export function GasKinetics15() {
    return (
        <Stack px={{xs:5, sm:8, md:10}} py={4} gap={3} sx={{ backgroundColor: '#fff' }}>
            <Stack gap={1} direction={'column'}>
                <Typography textTransform={'uppercase'} variant="body2" letterSpacing={-.5} color="#555">Kinematika Gas</Typography>
                <Typography textTransform={'capitalize'} fontWeight={700} variant="h5">Latihan Soal</Typography>
            </Stack>
            <Typography color="#555">5 min</Typography>
            <Problem
                title={'Soal 15'}
                equation={
                    "Massa sebuah molekul nitrogen sama dengan empat kali massa \
                    sebuah molekul hidrogen. Apabila gas nitrogen dan hidrogen \
                    mempunyai laju rata-rata sama, perbandingan antara suhu gas \
                    nitrogen dengan gas hidrogen (dalam Kelvin) adalah ..."
                }
                accordion_text="Pembahasan"
            >
                <Stack gap={1} mt={2}>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Diketahui:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\( m_{N} = 4m_{H}\\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( v_{N} = v_{H} \\)"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Formula:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ v=\\sqrt{\\frac{3kT}{m}} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Langkah Matematis:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ \\begin{aligned} \
                                v_{N} &= v_{H} \\\\[10pt] \
                                \\sqrt{\\frac{3kT_{N}}{m_{N}}} &= \\sqrt{\\frac{3kT_{H}}{m_{H}}} \\\\[10pt] \
                                \\frac{T_{N}}{m_{N}} &= \\frac{T_{H}}{m_{H}} \\\\[10pt] \
                                \\frac{T_{N}}{4m_{H}} &= \\frac{T_{H}}{m_{H}} \\\\[10pt] \
                                \\frac{T_{N}}{T_{H}} &= 4 \\\\[10pt] \
                            \\end{aligned} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    )
}

export function GasKinetics16() {
    return (
        <Stack px={{xs:5, sm:8, md:10}} py={4} gap={3} sx={{ backgroundColor: '#fff' }}>
            <Stack gap={1} direction={'column'}>
                <Typography textTransform={'uppercase'} variant="body2" letterSpacing={-.5} color="#555">Kinematika Gas</Typography>
                <Typography textTransform={'capitalize'} fontWeight={700} variant="h5">Latihan Soal</Typography>
            </Stack>
            <Typography color="#555">5 min</Typography>
            <Problem
                title={'Soal 16'}
                equation={
                    "Suatu gas ideal memiliki suhu T \
                    pada ruang tertutup. Partikel gas \
                    bergerak dengan kelajuan \\(180 \\space \\frac{m}{s}\\). \
                    Jika suhu dijadikan \\(\\frac{1}{9} \\space T\\), kelajuan \
                    partikel ..."
                }
                accordion_text="Pembahasan"
            >
                <Stack gap={1} mt={2}>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Diketahui:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\( T_{0} = T \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( v = 180 \\space \\frac{m}{s} \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( T_{1} = \\frac{1}{9} \\space T \\)"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Formula:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ v=\\sqrt{\\frac{3kT}{m}} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Langkah Matematis:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ \\begin{aligned} \
                                \\frac{v_{0}}{v_{1}} &= \\sqrt{\\frac{T_{0}}{T_{1}}} \\\\[10pt] \
                                \\frac{180 \\space \\frac{m}{s}}{v} &= \\sqrt{\\frac{T}{\\frac{1}{9}T}} \\\\[10pt] \
                                \\frac{180 \\space \\frac{m}{s}}{v} &= \\frac{1}{\\frac{1}{3}} \\\\[10pt] \
                                v &= \\frac{180 \\space \\frac{m}{s}}{3} \\\\[10pt] \
                                v &= 60 \\space \\frac{m}{s} \\\\[10pt] \
                            \\end{aligned} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    )
}

export function GasKinetics17() {
    return (
        <Stack px={{xs:5, sm:8, md:10}} py={4} gap={3} sx={{ backgroundColor: '#fff' }}>
            <Stack gap={1} direction={'column'}>
                <Typography textTransform={'uppercase'} variant="body2" letterSpacing={-.5} color="#555">Kinematika Gas</Typography>
                <Typography textTransform={'capitalize'} fontWeight={700} variant="h5">Latihan Soal</Typography>
            </Stack>
            <Typography color="#555">5 min</Typography>
            <Problem
                title={'Soal 17'}
                equation={
                    "Dalam ruangan yang bervolume \\(3\\) liter terdapat \\(400\\) miligram gas \
                    dengan tekanan \\(1 \\space atm\\). Jika \\(1 \\space atm= 10^{5} \\frac{N}{m^{2}}\\), maka kelajuan rata-rata \
                    partikel gas tersebut adalah ..."
                }
                accordion_text="Pembahasan"
            >
                <Stack gap={1} mt={2}>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Diketahui:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\( V = 3 \\space L = 3 \\times 10^{-3} \\space m^{3} \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( m = 400 \\space mg = 4 \\times 10^{-4} \\space kg \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( P = 10^{5} Pa \\)"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Formula:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ \\rho = \\frac{m}{V} \\]"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ v=\\sqrt{\\frac{3P}{\\rho}} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Langkah Matematis:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ \\begin{aligned} \
                                \\rho=\\frac{m}{V}&=\\frac{4 \\times 10^{-4} \\space kg}{3 \\times 10^{-3} \\space m^{3}}=\\frac{4}{30} \\space \\frac{kg}{m^{3}} \\\\[10pt] \
                                v=\\sqrt{\\frac{3P}{\\rho}}&=\\sqrt{\\frac{3(10^{5} \\space Pa)}{\\frac{4}{30} \\space \\frac{kg}{m^{3}}}} \\\\[10pt] \
                                &=\\sqrt{\\frac{9 \\times 10^{6}}{4} \\space \\frac{m^{2}}{s^{2}}} \\\\[10pt] \
                                &= \\frac{3 \\times 10^{3}}{2} \\space \\frac{m}{s} \\\\[10pt] \
                                &= 1,5 \\times 10^{3} \\space \\frac{m}{s} \\\\[10pt] \
                            \\end{aligned} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    )
}

export function GasKinetics18() {
    return (
        <Stack px={{xs:5, sm:8, md:10}} py={4} gap={3} sx={{ backgroundColor: '#fff' }}>
            <Stack gap={1} direction={'column'}>
                <Typography textTransform={'uppercase'} variant="body2" letterSpacing={-.5} color="#555">Kinematika Gas</Typography>
                <Typography textTransform={'capitalize'} fontWeight={700} variant="h5">Latihan Soal</Typography>
            </Stack>
            <Typography color="#555">5 min</Typography>
            <Problem
                title={'Soal 18'}
                equation={
                    "Dua tabung diisi dengan gas berbeda tetapi keduanya berada pada suhu yang sama. \
                    Diketahui \\(M_{A}\\) dan \\(M_{B}\\) adalah berat molekul kedua gas tersebut dengan demikian, \
                    besar momentum rata-rata kedua gas yaitu \\(P_{A}\\) dan \\(P_{B}\\) akan berkaitan satu sama lain \
                    menurut rumus ..."
                }
                accordion_text="Pembahasan"
            >
                <Stack gap={1} mt={2}>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Diketahui:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\( T_{A}=T_{B} \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( m_{A} =M_{A} \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( m_{B} =M_{B} \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( p_{A} =P_{A} \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( p_{B} =P_{B} \\)"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Formula:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ p=mv \\]"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ v=\\sqrt{\\frac{3kT}{m}} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Langkah Matematis:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ \\begin{aligned} \
                                p = mv &= m\\sqrt{\\frac{3kT}{m}} = \\sqrt{3kmT} \\\\[10pt] \
                                p &\\propto \\sqrt{m} \\\\[20pt] \
                                \\frac{P_{A}}{P_{B}} &= \\sqrt{\\frac{M_{A}}{M_{B}}} \\\\[10pt] \
                                P_{A} &= \\sqrt{\\frac{M_{A}}{M_{B}}}P_{B} \\\\[10pt] \
                            \\end{aligned} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
            </Problem>
        </Stack>
    )
}

export function GasKinetics19() {
    const item = [
        "Energi potensial molekul makin kecil",
        "Energi molekul-molekul tersebut adalah \\(\\frac{2}{3}NkT\\)",
        "Energi kinetik molekul-molekul tersebut adalah \\(\\frac{3}{2}NkT\\)",
        "Volume gas selalu akan bertambah, karena gas akan memuai",
        "Tekanan gas besarnya tetap",
    ]
    return (
        <Stack px={{xs:5, sm:8, md:10}} py={4} gap={3} sx={{ backgroundColor: '#fff' }}>
            <Stack gap={1} direction={'column'}>
                <Typography textTransform={'uppercase'} variant="body2" letterSpacing={-.5} color="#555">Kinematika Gas</Typography>
                <Typography textTransform={'capitalize'} fontWeight={700} variant="h5">Latihan Soal</Typography>
            </Stack>
            <Typography color="#555">5 min</Typography>
            <Problem
                title={'Soal 19'}
                equation={
                    <>
                        <Typography fontSize={'1em'}>
                            <MathJax>
                                {"Bila dalam ruang tertutup gas dipanaskan sampai suhu \\(T \\space K\\), maka..."}
                            </MathJax>
                        </Typography>
                        <Grid2 container spacing={.5} direction={'column'}>
                            {item.map((listItem, listIndex) => (
                                <Grid2 xs={3} sm={3} key={listIndex}>
                                    <Stack direction="row" alignItems="center" gap={1}>
                                        <Typography sx={{ color: item.color||"primary.main", fontSize: "1em" }}>{String.fromCharCode(97 + listIndex)}.&nbsp;</Typography>
                                        <Typography 
                                            variant="body1"
                                            fontSize={{ xs: ".8em", sm: "1em" }}
                                            color="black_blue"
                                        >
                                            <MathJax>
                                                {listItem}
                                            </MathJax>
                                        </Typography>
                                    </Stack>
                                </Grid2>
                            ))}
                        </Grid2>
                    </>
                }
                accordion_text="Pembahasan"
            >
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Langkah Matematis:</Typography>
                    <Stack gap={3}>
                        <Stack>
                            <Typography>
                                Untuk <Typography component={'span'} className="highlight">gas ideal</Typography>, tidak ada <Typography component={'span'} className="highlight">energi potensial</Typography> antar molekul, 
                                karena tidak ada gaya tarik-menarik. 
                                Energinya murni <Typography component={'span'} className="highlight">energi kinetik</Typography>.
                            </Typography>
                            <Typography>Pernyataan <Typography component={'span'} color="tertiary" fontWeight={600}>a</Typography> salah</Typography>
                        </Stack>
                        <Stack>
                            <Typography>
                                <MathJax>
                                    {"\\[E_{k}=\\frac{3}{2}NkT\\]"}
                                </MathJax>
                            </Typography>
                            <Typography textAlign={{xs:'center'}}>Pernyataan <Typography component={'span'} color="tertiary" fontWeight={600}>b</Typography> salah, pernyataan <Typography component={'span'} color="secondary" fontWeight={600}>c</Typography> benar</Typography>
                        </Stack>
                        <Stack>
                            <Typography>
                                Volume tidak berubah karena <Typography component={'span'} className="highlight">ruang tertutup</Typography>.
                            </Typography>
                            <Typography>Pernyataan <Typography component={'span'} color="tertiary" fontWeight={600}>d</Typography> salah</Typography>
                        </Stack>
                        <Stack>
                            <Typography>
                                <MathJax>
                                    {"\\[PV=nRT\\]"}
                                </MathJax>
                            </Typography>
                            <Typography textAlign={{xs:'center'}}>
                                Karena gas dipanaskan dan <Typography component={'span'} className="highlight">volume tetap</Typography>, maka tekanan akan <Typography component={'span'} className="highlight">naik</Typography>.
                            </Typography>
                            <Typography textAlign={{xs:'center'}}>Pernyataan <Typography component={'span'} color="tertiary" fontWeight={600}>e</Typography> salah</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Problem>
        </Stack>
    )
}

export function GasKinetics20() {
    const item = [
        "Kecepatan rms rata-rata dari molekul menjadi dua kali",
        "Suhu berubah menjadi \\(600 \\space K\\)",
        "Momentum rata-rata dari molekul menjadi dua kali",
        "Suhu berubah menjadi \\(300\\sqrt{2} \\space K\\)",
        "Kecepatan rata-rata molekul menjadi dua kali",
    ]
    return (
        <Stack px={{xs:5, sm:8, md:10}} py={4} gap={3} sx={{ backgroundColor: '#fff' }}>
            <Stack gap={1} direction={'column'}>
                <Typography textTransform={'uppercase'} variant="body2" letterSpacing={-.5} color="#555">Kinematika Gas</Typography>
                <Typography textTransform={'capitalize'} fontWeight={700} variant="h5">Latihan Soal</Typography>
            </Stack>
            <Typography color="#555">5 min</Typography>
            <Problem
                title={'Soal 20'}
                equation={
                    <>
                        <Typography fontSize={'1em'}>
                            <MathJax>
                                {"Suatu gas ideal pada \\(300 \\space K\\) \
                                dipanaskan dengan volume tetap, \
                                sehingga energi kinetik rata-rata \
                                dari molekul gas menjadi dua kali \
                                lipat. Pernyataan berikut ini yang \
                                tepat adalah ..."}
                            </MathJax>
                        </Typography>
                        <Grid2 container spacing={.5} direction={'column'}>
                            {item.map((listItem, listIndex) => (
                                <Grid2 xs={3} sm={3} key={listIndex}>
                                    <Stack direction="row" alignItems="center" gap={1}>
                                        <Typography sx={{ color: item.color||"primary.main", fontSize: "1em" }}>{String.fromCharCode(97 + listIndex)}.&nbsp;</Typography>
                                        <Typography 
                                            variant="body1"
                                            fontSize={{ xs: ".8em", sm: "1em" }}
                                            color="black_blue"
                                        >
                                            <MathJax>
                                                {listItem}
                                            </MathJax>
                                        </Typography>
                                    </Stack>
                                </Grid2>
                            ))}
                        </Grid2>
                    </>
                }
                accordion_text="Pembahasan"
            >
                <Stack gap={1} mt={2}>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Diketahui:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\( T=300 \\space K \\)"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\( E_{k1} = 2E_{k0} \\)"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Formula:</Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ p=mv \\]"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ E_{k}=\\frac{3}{2}PV = \\frac{3}{2}NkT \\]"}
                        </MathJax>
                    </Typography>
                    <Typography>
                        <MathJax>
                            {"\\[ v=\\sqrt{\\frac{3kT}{m}} \\]"}
                        </MathJax>
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={600} fontSize={'1.2em'}>Langkah Matematis:</Typography>
                    <Stack gap={3}>
                        <Stack>
                            <Typography>
                                <MathJax>
                                    {"\\[ \\begin{aligned} \
                                        E_{k1}&=2E_{k0} \\\\[10pt] \
                                        \\frac{3}{2}NkT &= 2 \\biggl(\\frac{3}{2}Nk(300 \\space K)\\biggl) \\\\[10pt] \
                                        T&=600 \\space K \\\\[10pt] \
                                    \\end{aligned} \\]"}
                                </MathJax>
                            </Typography>
                            <Typography textAlign={{xs:'center'}}>Pernyataan <Typography component={'span'} color="secondary" fontWeight={600}>b</Typography> benar, pernyataan <Typography component={'span'} color="tertiary" fontWeight={600}>d</Typography> salah </Typography>
                        </Stack>
                        <Stack>
                            <Typography>
                                <MathJax>
                                    {"\\[ \\begin{aligned} \
                                        \\frac{v_{0}}{v_{1}}&=\\sqrt{\\frac{T_{0}}{T_{1}}} \\\\[10pt] \
                                        \\frac{v_{0}}{v_{1}}&=\\sqrt{\\frac{300}{600}} \\\\[10pt] \
                                        v_{1}&=\\sqrt{2}v_{0} \\space K \\\\[10pt] \
                                    \\end{aligned} \\]"}
                                </MathJax>
                            </Typography>
                            <Typography textAlign={{xs:'center'}}>Pernyataan <Typography component={'span'} color="tertiary" fontWeight={600}>a</Typography>, <Typography component={'span'} color="tertiary" fontWeight={600}>c</Typography>, dan <Typography component={'span'} color="tertiary" fontWeight={600}>e</Typography>  salah </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Problem>
        </Stack>
    )
}
