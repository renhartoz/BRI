import {
    Box,
    Stack,
    Typography,
    Container,
    Grid2,
    Divider,
    Chip,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SchoolIcon from "@mui/icons-material/School";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import LaunchIcon from "@mui/icons-material/Launch";
import ComputerIcon from "@mui/icons-material/Computer";
import StorageIcon from "@mui/icons-material/Storage";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import Button from "../components/Button";

const FORM_URL = "https://forms.gle/19UAhLfYFFEbLybj6";
const DEMO_URL = "https://demo.rumahilmiah.org";

export default function SummerClass() {
    const highlights = [
        { icon: <CodeIcon />, text: "HTML, CSS, JavaScript", desc: "Fondasi web development" },
        { icon: <ComputerIcon />, text: "React & Tailwind", desc: "Modern frontend framework" },
        { icon: <StorageIcon />, text: "Python & FastAPI", desc: "Backend cepat & modern" },
        { icon: <RocketLaunchIcon />, text: "Deploy ke Vercel", desc: "Langsung online!" },
    ];

    const weeks = [
        {
            week: "Minggu 1",
            title: "Frontend Fundamentals",
            color: "primary.main",
            icon: <CodeIcon sx={{ fontSize: 40 }} />,
            days: [
                {
                    day: "Hari 1-2",
                    title: "Web Fundamentals",
                    items: [
                        "Cara kerja internet",
                        "HTML + CSS + JavaScript dasar",
                    ],
                },
                {
                    day: "Hari 3",
                    title: "React Fundamentals",
                    items: [
                        "Kenapa React? Setup project dengan npm",
                        "JSX, Props, useState",
                        "Mini Project: Counter + Todo List",
                    ],
                },
                {
                    day: "Hari 4",
                    title: "Real Applications",
                    items: [
                        "React Router & useEffect",
                        "Fetch API & mapping data",
                        "Mini Project: User Dashboard",
                    ],
                },
                {
                    day: "Hari 5",
                    title: "Styling & Deployment",
                    items: [
                        "Tailwind CSS & Shadcn UI",
                        "AI Workflow untuk belajar mandiri",
                        "Deploy ke Vercel",
                    ],
                },
            ],
        },
        {
            week: "Minggu 2",
            title: "Backend & Database",
            color: "secondary.main",
            icon: <StorageIcon sx={{ fontSize: 40 }} />,
            days: [
                {
                    day: "Hari 1-2",
                    title: "Backend Basics",
                    items: [
                        "Intro to backend & server",
                        "Setup Python & FastAPI",
                        "REST API fundamentals",
                    ],
                },
                {
                    day: "Hari 3-4",
                    title: "CRUD Operations",
                    items: [
                        "Create, Read, Update, Delete",
                        "Database setup dengan SQLAlchemy",
                        "API testing dengan Postman",
                    ],
                },
                {
                    day: "Hari 5",
                    title: "Authentication",
                    items: [
                        "Login & Register system",
                        "JWT basics",
                        "Protecting routes",
                    ],
                },
            ],
        },
        {
            week: "Minggu 3",
            title: "Full-Stack Project",
            color: "tertiary.main",
            icon: <IntegrationInstructionsIcon sx={{ fontSize: 40 }} />,
            days: [
                {
                    day: "Hari 1-3",
                    title: "Build Full-Stack App",
                    items: [
                        "Integrate frontend + backend",
                        "Connect API ke React",
                        "Form handling & data display",
                    ],
                },
                {
                    day: "Hari 4-5",
                    title: "Finalize & Deploy",
                    items: [
                        "Polish UI/UX",
                        "Testing & debugging",
                        "Deploy full-stack app",
                        "Presentasi project",
                    ],
                },
            ],
        },
    ];

    const outcomes = [
        "Multi-page React application",
        "Navigation dengan React Router",
        "REST API dengan Python FastAPI",
        "Form input & CRUD operations",
        "Tailwind CSS & Shadcn UI styling",
        "Authentication & JWT system",
        "Deploy aplikasi sendiri",
    ];

    return (
        <>
            {/* Hero Section */}
            <Stack
                sx={{
                    minHeight: "90vh",
                    background: "linear-gradient(135deg, #1565c0 0%, #00796b 100%)",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                            "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 50%)",
                    },
                }}
                justifyContent="center"
                alignItems="center"
                px={{ xs: 3, sm: 5, md: 8 }}
                py={8}
            >
                <Container maxWidth="lg">
                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        alignItems="center"
                        gap={{ xs: 4, md: 6 }}
                    >
                        {/* Left Content */}
                        <Stack
                            flex={1}
                            gap={3}
                            sx={{ position: "relative", zIndex: 1 }}
                        >
                            <Chip
                                label="Summer Class 2026 • Online"
                                sx={{
                                    bgcolor: "#fff",
                                    color: "primary.main",
                                    fontWeight: 700,
                                    fontSize: "0.9rem",
                                    width: "fit-content",
                                    border: "2px solid #000",
                                    boxShadow: "3px 3px 0px #000",
                                    borderRadius: "8px",
                                }}
                            />
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: { xs: "2.2rem", sm: "3rem", md: "3.5rem" },
                                    fontWeight: 900,
                                    color: "#fff",
                                    lineHeight: 1.1,
                                }}
                            >
                                Zero to Fullstack
                            </Typography>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: { xs: "1.2rem", sm: "1.5rem" },
                                    fontWeight: 600,
                                    color: "rgba(255,255,255,0.95)",
                                }}
                            >
                                Web Development Summer Class (Online)
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: { xs: "1rem", sm: "1.1rem" },
                                    color: "#fff",
                                    maxWidth: "520px",
                                    lineHeight: 1.6,
                                }}
                            >
                                3 minggu intensif belajar web development secara online,
                                dari nol sampai bisa bikin aplikasi fullstack sendiri.
                                Cocok untuk pemula!
                            </Typography>

                            {/* Stats */}
                            <Stack
                                direction="row"
                                gap={3}
                                flexWrap="wrap"
                                mt={2}
                            >
                                <Stack alignItems="center">
                                    <Typography
                                        sx={{
                                            fontSize: "2rem",
                                            fontWeight: 900,
                                            color: "#fff",
                                        }}
                                    >
                                        15
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "0.9rem",
                                            color: "#fff",
                                        }}
                                    >
                                        Sesi
                                    </Typography>
                                </Stack>
                                <Stack alignItems="center">
                                    <Typography
                                        sx={{
                                            fontSize: "2rem",
                                            fontWeight: 900,
                                            color: "#fff",
                                        }}
                                    >
                                        3
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "0.9rem",
                                            color: "#fff",
                                        }}
                                    >
                                        Minggu
                                    </Typography>
                                </Stack>
                                <Stack alignItems="center">
                                    <Typography
                                        sx={{
                                            fontSize: "2rem",
                                            fontWeight: 900,
                                            color: "#fff",
                                        }}
                                    >
                                        1
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "0.9rem",
                                            color: "#fff",
                                        }}
                                    >
                                        Fullstack App
                                    </Typography>
                                </Stack>
                            </Stack>

                            <Stack direction="row" gap={2} mt={2} flexWrap="wrap">
                                <Button
                                    bgcolor="#fff"
                                    color="primary.main"
                                    bdcolor="#000"
                                    sx={{ fontWeight: 700, px: 3 }}
                                    onClick={() => window.open(FORM_URL, "_blank")}
                                >
                                    Daftar Sekarang
                                </Button>
                                <Button
                                    bgcolor="transparent"
                                    color="#fff"
                                    bdcolor="#fff"
                                    sx={{
                                        fontWeight: 600,
                                        "&:hover": {
                                            background: "rgba(255,255,255,0.1) !important",
                                        },
                                    }}
                                    onClick={() => {
                                        document
                                            .getElementById("kurikulum")
                                            ?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                >
                                    Lihat Kurikulum
                                </Button>
                            </Stack>
                        </Stack>

                        {/* Right - Price Card */}
                        <Stack
                            sx={{
                                bgcolor: "#fff",
                                border: "3px solid #000",
                                borderRadius: "16px",
                                boxShadow: "8px 8px 0px #000",
                                p: 4,
                                minWidth: { xs: "280px", sm: "320px" },
                                maxWidth: "360px",
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-8px)",
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "0.9rem",
                                    color: "text.primary",
                                    mb: 1,
                                }}
                            >
                                Investasi untuk masa depanmu
                            </Typography>
                            <Stack direction="row" alignItems="baseline" gap={1}>
                                <Typography
                                    sx={{
                                        fontSize: "2.8rem",
                                        fontWeight: 900,
                                        color: "primary.main",
                                    }}
                                >
                                    Rp 800K
                                </Typography>
                            </Stack>
                            <Typography
                                sx={{
                                    fontSize: "1rem",
                                    color: "text.primary",
                                    mb: 3,
                                }}
                            >
                                untuk 15 sesi (3 minggu)
                            </Typography>

                            <Divider sx={{ mb: 3 }} />

                            <Stack gap={1.5} mb={3}>
                                {[
                                    "100% Online — belajar dari mana saja",
                                    "15 sesi live class",
                                    "Akses rekaman sesi",
                                    "Repository GitHub",
                                    "Sertifikat kelulusan",
                                    "Grup diskusi",
                                ].map((item, i) => (
                                    <Stack
                                        key={i}
                                        direction="row"
                                        alignItems="center"
                                        gap={1}
                                    >
                                        <CheckCircleIcon
                                            sx={{
                                                color: "secondary.dark",
                                                fontSize: "1.2rem",
                                            }}
                                        />
                                        <Typography sx={{ fontSize: "0.95rem", color: "#333" }}>
                                            {item}
                                        </Typography>
                                    </Stack>
                                ))}
                            </Stack>

                            <Button
                                bgcolor="primary"
                                color="#fff"
                                bdcolor="#000"
                                sx={{ fontWeight: 700, width: "100%" }}
                                onClick={() => window.open(FORM_URL, "_blank")}
                            >
                                Daftar Sekarang
                            </Button>
                        </Stack>
                    </Stack>
                </Container>
            </Stack>

            {/* Highlights Section */}
            <Stack
                sx={{ bgcolor: "#f5f5f5" }}
                py={{ xs: 8, md: 10 }}
                px={{ xs: 3, sm: 5 }}
            >
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: { xs: "1.5rem", sm: "2rem" },
                            fontWeight: 800,
                            textAlign: "center",
                            mb: 1,
                            color: "primary.main",
                        }}
                    >
                        Apa yang Akan Kamu Pelajari?
                    </Typography>
                    <Typography
                        sx={{
                            textAlign: "center",
                            color: "#555",
                            mb: 2,
                            fontSize: { xs: "1rem", sm: "1.1rem" },
                        }}
                    >
                        Dari dasar sampai bisa bikin aplikasi fullstack
                    </Typography>

                    {/* Tech Stack Banner */}
                    <Stack
                        direction="row"
                        justifyContent="center"
                        flexWrap="wrap"
                        gap={1.5}
                        mb={5}
                    >
                        {[
                            { label: "React", color: "#61dafb", text: "#000" },
                            { label: "Tailwind CSS", color: "#38bdf8", text: "#000" },
                            { label: "Python", color: "#3776ab", text: "#fff" },
                            { label: "FastAPI", color: "#009688", text: "#fff" },
                            { label: "PostgreSQL", color: "#336791", text: "#fff" },
                            { label: "Vercel", color: "#000", text: "#fff" },
                        ].map((tech, i) => (
                            <Chip
                                key={i}
                                label={tech.label}
                                sx={{
                                    bgcolor: tech.color,
                                    color: tech.text,
                                    fontWeight: 700,
                                    fontSize: "0.85rem",
                                    border: "2px solid #000",
                                    borderRadius: "8px",
                                    boxShadow: "3px 3px 0px #000",
                                    px: 1,
                                }}
                            />
                        ))}
                    </Stack>

                    <Grid2
                        container
                        spacing={3}
                        justifyContent="center"
                        columns={{ xs: 1, sm: 2, md: 4 }}
                    >
                        {highlights.map((item, i) => (
                            <Grid2 key={i} size={1} display="flex" justifyContent="center">
                                <Stack
                                    sx={{
                                        bgcolor: "#fff",
                                        border: "2px solid #000",
                                        borderRadius: "12px",
                                        boxShadow: "5px 5px 0px #000",
                                        p: 3.5,
                                        alignItems: "center",
                                        textAlign: "center",
                                        width: "100%",
                                        maxWidth: "240px",
                                        transition: "all 0.2s ease",
                                        "&:hover": {
                                            transform: "translate(3px, -3px)",
                                            boxShadow: "-3px 8px 0px #000",
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            color: "primary.main",
                                            mb: 2,
                                            fontSize: 40,
                                        }}
                                    >
                                        {item.icon}
                                    </Box>
                                    <Typography
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: "1rem",
                                            mb: 0.5,
                                        }}
                                    >
                                        {item.text}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "0.8rem",
                                            color: "#555",
                                        }}
                                    >
                                        {item.desc}
                                    </Typography>
                                </Stack>
                            </Grid2>
                        ))}
                    </Grid2>
                </Container>
            </Stack>

            {/* Curriculum Section */}
            <Stack
                id="kurikulum"
                sx={{ bgcolor: "#fff" }}
                py={{ xs: 8, md: 12 }}
                px={{ xs: 3, sm: 5 }}
            >
                <Container maxWidth="lg">
                    <Stack alignItems="center" mb={5}>
                        <Chip
                            icon={<CalendarMonthIcon color="primary.main" />}
                            label="Kurikulum"
                            sx={{
                                bgcolor: "primary.main",
                                color: "#fff",
                                fontWeight: 700,
                                mb: 2,
                                border: "2px solid #000",
                                borderRadius: "8px",
                            }}
                        />
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: "1.8rem", sm: "2.2rem" },
                                fontWeight: 800,
                                textAlign: "center",
                                mb: 1,
                            }}
                        >
                            3 Minggu Menuju Fullstack Developer
                        </Typography>
                        <Typography
                            sx={{
                                textAlign: "center",
                                color: "#555",
                                maxWidth: "600px",
                                fontSize: { xs: "0.95rem", sm: "1.05rem" },
                            }}
                        >
                            Kurikulum intensif yang dirancang untuk membawa kamu
                            dari nol sampai bisa bikin aplikasi fullstack sendiri
                        </Typography>
                    </Stack>

                    <Stack gap={{ xs: 4, md: 5 }}>
                        {weeks.map((week, wi) => (
                            <Stack
                                key={wi}
                                sx={{
                                    border: "3px solid #000",
                                    borderRadius: "16px",
                                    overflow: "hidden",
                                    boxShadow: "6px 6px 0px #000",
                                }}
                            >
                                {/* Week Header */}
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    gap={2}
                                    px={3}
                                    py={2.5}
                                    sx={{
                                        bgcolor: week.color,
                                        color: "#fff",
                                    }}
                                >
                                    {week.icon}
                                    <Stack>
                                        <Typography
                                            sx={{
                                                fontSize: "0.85rem",
                                                opacity: 0.9,
                                            }}
                                        >
                                            {week.week}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "1.3rem",
                                                fontWeight: 800,
                                            }}
                                        >
                                            {week.title}
                                        </Typography>
                                    </Stack>
                                </Stack>

                                {/* Days */}
                                <Grid2
                                    container
                                    columns={{ xs: 1, sm: 2, md: week.days.length }}
                                    sx={{ bgcolor: "#fafafa" }}
                                >
                                    {week.days.map((day, di) => (
                                        <Grid2
                                            key={di}
                                            size={1}
                                            sx={{
                                                p: 3,
                                                borderRight: {
                                                    xs: "none",
                                                    sm: "2px solid #e0e0e0",
                                                },
                                                borderBottom: {
                                                    xs: "2px solid #e0e0e0",
                                                    sm:
                                                        di === week.days.length - 1
                                                            ? "none"
                                                            : {
                                                                  md: "none",
                                                              },
                                                },
                                                "&:last-child": {
                                                    borderRight: "none",
                                                },
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: "0.75rem",
                                                    fontWeight: 700,
                                                    color: week.color,
                                                    textTransform: "uppercase",
                                                    mb: 0.5,
                                                }}
                                            >
                                                {day.day}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontWeight: 700,
                                                    fontSize: "1.05rem",
                                                    mb: 1.5,
                                                }}
                                            >
                                                {day.title}
                                            </Typography>
                                            <Stack gap={1}>
                                                {day.items.map((item, ii) => (
                                                    <Stack
                                                        key={ii}
                                                        direction="row"
                                                        alignItems="flex-start"
                                                        gap={1}
                                                    >
                                                        <Box
                                                            sx={{
                                                                width: 6,
                                                                height: 6,
                                                                borderRadius: "50%",
                                                                bgcolor: week.color,
                                                                mt: "7px",
                                                                flexShrink: 0,
                                                            }}
                                                        />
                                                        <Typography
                                                            sx={{
                                                                fontSize: "0.9rem",
                                                                color: "#444",
                                                            }}
                                                        >
                                                            {item}
                                                        </Typography>
                                                    </Stack>
                                                ))}
                                            </Stack>
                                        </Grid2>
                                    ))}
                                </Grid2>
                            </Stack>
                        ))}
                    </Stack>
                </Container>
            </Stack>

            {/* Project Showcase Section */}
            <Stack
                sx={{
                    bgcolor: "#0a1929",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                            "radial-gradient(circle at 70% 30%, rgba(25,118,210,0.15) 0%, transparent 50%)",
                    },
                }}
                py={{ xs: 8, md: 12 }}
                px={{ xs: 3, sm: 5 }}
            >
                <Container maxWidth="lg">
                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        alignItems="center"
                        gap={5}
                        sx={{ position: "relative", zIndex: 1 }}
                    >
                        <Stack flex={1} gap={3}>
                            <Chip
                                icon={<RocketLaunchIcon color="primary.main" />}
                                label="Hasil Akhir"
                                sx={{
                                    bgcolor: "secondary.main",
                                    color: "#fff",
                                    fontWeight: 700,
                                    width: "fit-content",
                                    border: "2px solid rgba(255,255,255,0.3)",
                                    borderRadius: "8px",
                                }}
                            />
                            <Typography
                                variant="h3"
                                sx={{
                                    fontSize: { xs: "1.8rem", sm: "2.2rem" },
                                    fontWeight: 800,
                                    color: "#fff",
                                }}
                            >
                                Aplikasi yang Akan Kamu Buat
                            </Typography>
                            <Typography
                                sx={{
                                    color: "#fff",
                                    fontSize: "1.1rem",
                                    mb: 3,
                                }}
                            >
                                Di akhir kelas, kamu akan memiliki aplikasi CRUD fullstack
                                yang bisa kamu tunjukkan di portfolio!
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#fff",
                                    fontWeight: 800,
                                    mb: 1,
                                }}
                            >
                                Skills yang kamu kuasai:
                            </Typography>
                            <Grid2 container columns={{ xs: 1, sm: 2 }} spacing={1.5}>
                                {outcomes.map((item, i) => (
                                    <Grid2 key={i} size={1}>
                                        <Stack
                                            direction="row"
                                            alignItems="center"
                                            gap={1}
                                        >
                                            <CheckCircleIcon
                                                sx={{
                                                    color: "#33aba0",
                                                    fontSize: "1.3rem",
                                                }}
                                            />
                                            <Typography
                                                sx={{
                                                    color: "#fff",
                                                    fontSize: "0.95rem",
                                                }}
                                            >
                                                {item}
                                            </Typography>
                                        </Stack>
                                    </Grid2>
                                ))}
                            </Grid2>

                            <Button
                                bgcolor="secondary"
                                color="#fff"
                                bdcolor="#fff"
                                sx={{
                                    fontWeight: 700,
                                    mt: 2,
                                    width: "fit-content",
                                }}
                                startIcon={<LaunchIcon color="primary.main" />}
                                onClick={() => window.open(DEMO_URL, "_blank")}
                            >
                                Lihat Demo Aplikasi
                            </Button>
                        </Stack>

                        {/* Mock App Preview */}
                        <Stack
                            sx={{
                                bgcolor: "#1e293b",
                                border: "3px solid rgba(255,255,255,0.2)",
                                borderRadius: "16px",
                                overflow: "hidden",
                                maxWidth: "450px",
                                width: "100%",
                                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                            }}
                        >
                            {/* Browser Chrome */}
                            <Stack
                                direction="row"
                                alignItems="center"
                                gap={1}
                                px={2}
                                py={1.5}
                                sx={{ bgcolor: "#0f172a", borderBottom: "1px solid rgba(255,255,255,0.1)" }}
                            >
                                <Box
                                    sx={{
                                        width: 10,
                                        height: 10,
                                        borderRadius: "50%",
                                        bgcolor: "#ef4444",
                                    }}
                                />
                                <Box
                                    sx={{
                                        width: 10,
                                        height: 10,
                                        borderRadius: "50%",
                                        bgcolor: "#f59e0b",
                                    }}
                                />
                                <Box
                                    sx={{
                                        width: 10,
                                        height: 10,
                                        borderRadius: "50%",
                                        bgcolor: "#22c55e",
                                    }}
                                />
                                <Box
                                    sx={{
                                        ml: 2,
                                        px: 2,
                                        py: 0.5,
                                        bgcolor: "rgba(255,255,255,0.1)",
                                        borderRadius: "4px",
                                        flex: 1,
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "0.7rem",
                                            color: "rgba(255,255,255,0.5)",
                                        }}
                                    >
                                        demo.rumahilmiah.org
                                    </Typography>
                                </Box>
                            </Stack>
                            {/* App Content */}
                            <Stack p={3} gap={2}>
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <Typography
                                        sx={{
                                            color: "#fff",
                                            fontWeight: 700,
                                            fontSize: "1.1rem",
                                        }}
                                    >
                                        Dashboard
                                    </Typography>
                                    <Box
                                        sx={{
                                            px: 1.5,
                                            py: 0.5,
                                            bgcolor: "secondary.main",
                                            borderRadius: "4px",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: "#fff",
                                                fontSize: "0.7rem",
                                                fontWeight: 600,
                                            }}
                                        >
                                            + Tambah
                                        </Typography>
                                    </Box>
                                </Stack>
                                {/* Mock Cards */}
                                {[1, 2, 3].map((i) => (
                                    <Stack
                                        key={i}
                                        direction="row"
                                        alignItems="center"
                                        gap={2}
                                        sx={{
                                            bgcolor: "rgba(255,255,255,0.05)",
                                            border: "1px solid rgba(255,255,255,0.1)",
                                            borderRadius: "8px",
                                            p: 2,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 40,
                                                height: 40,
                                                borderRadius: "8px",
                                                bgcolor: `primary.main`,
                                                opacity: 0.8 - i * 0.15,
                                            }}
                                        />
                                        <Stack flex={1}>
                                            <Box
                                                sx={{
                                                    width: "60%",
                                                    height: 10,
                                                    bgcolor: "rgba(255,255,255,0.2)",
                                                    borderRadius: "4px",
                                                    mb: 0.5,
                                                }}
                                            />
                                            <Box
                                                sx={{
                                                    width: "40%",
                                                    height: 8,
                                                    bgcolor: "rgba(255,255,255,0.1)",
                                                    borderRadius: "4px",
                                                }}
                                            />
                                        </Stack>
                                    </Stack>
                                ))}
                            </Stack>
                        </Stack>
                    </Stack>
                </Container>
            </Stack>

            {/* Instructors Section */}
            <Stack
                sx={{ bgcolor: "#f5f5f5" }}
                py={{ xs: 8, md: 12 }}
                px={{ xs: 3, sm: 5 }}
            >
                <Container maxWidth="md">
                    <Stack alignItems="center" mb={5}>
                        <Chip
                            icon={<PersonIcon color="primary.main" />}
                            label="Pengajar"
                            sx={{
                                bgcolor: "primary.main",
                                color: "#fff",
                                fontWeight: 700,
                                mb: 2,
                                border: "2px solid #000",
                                borderRadius: "8px",
                            }}
                        />
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: "1.8rem", sm: "2.2rem" },
                                fontWeight: 800,
                                textAlign: "center",
                                mb: 1,
                            }}
                        >
                            Belajar dari yang Berpengalaman
                        </Typography>
                        <Typography
                            sx={{
                                textAlign: "center",
                                color: "#555",
                                fontSize: { xs: "0.95rem", sm: "1.05rem" },
                            }}
                        >
                            Tim pengajar yang akan membimbing kamu selama kelas
                        </Typography>
                    </Stack>

                    <Grid2
                        container
                        spacing={4}
                        justifyContent="center"
                        columns={{ xs: 1, sm: 2 }}
                    >
                        {/* Frontend Instructor — Benedict */}
                        <Grid2 size={1} display="flex" justifyContent="center">
                            <Stack
                                sx={{
                                    bgcolor: "#fff",
                                    border: "3px solid #000",
                                    borderRadius: "16px",
                                    boxShadow: "6px 6px 0px #000",
                                    p: 4,
                                    alignItems: "center",
                                    textAlign: "center",
                                    width: "100%",
                                    maxWidth: "320px",
                                    transition: "all 0.2s ease",
                                    "&:hover": {
                                        transform: "translate(4px, -4px)",
                                        boxShadow: "-4px 10px 0px #000",
                                    },
                                }}
                            >
                                <Box
                                    component="img"
                                    src="/misc/ben.webp"
                                    alt="Ben"
                                    sx={{
                                        width: 110,
                                        height: 110,
                                        borderRadius: "50%",
                                        objectFit: "cover",
                                        border: "3px solid #000",
                                        objectPosition: "top",
                                        mb: 2,
                                    }}
                                />
                                <Typography
                                    sx={{
                                        fontWeight: 800,
                                        fontSize: "1.2rem",
                                        mb: 0.5,
                                    }}
                                >
                                    Benedict Halim
                                </Typography>
                                <Chip
                                    label="Frontend — React & UI"
                                    size="small"
                                    sx={{
                                        bgcolor: "primary.main",
                                        color: "#fff",
                                        fontWeight: 600,
                                        mb: 2,
                                    }}
                                />
                                <Stack
                                    gap={1}
                                    sx={{ textAlign: "left", width: "100%" }}
                                >
                                    {[
                                        "ReactJS, Tailwind CSS, API integration",
                                        "1,200+ real users, CC CUP registration platform",
                                        "Built the Canisius Vanguard SDGs website, raising $1,500 to plant 1,500+ trees.",
                                        "Won 1th place at the PesonaEdu web design competition",
                                    ].map((line, i) => (
                                        <Stack
                                            key={i}
                                            direction="row"
                                            alignItems="flex-start"
                                            gap={1}
                                        >
                                            <CheckCircleIcon
                                                sx={{
                                                    color: "primary.main",
                                                    fontSize: "1rem",
                                                    mt: "2px",
                                                    flexShrink: 0,
                                                }}
                                            />
                                            <Typography
                                                sx={{
                                                    fontSize: "0.85rem",
                                                    color: "#444",
                                                    lineHeight: 1.4,
                                                }}
                                            >
                                                {line}
                                            </Typography>
                                        </Stack>
                                    ))}
                                </Stack>
                            </Stack>
                        </Grid2>

                        {/* Backend Instructor — Aaron */}
                        <Grid2 size={1} display="flex" justifyContent="center">
                            <Stack
                                sx={{
                                    bgcolor: "#fff",
                                    border: "3px solid #000",
                                    borderRadius: "16px",
                                    boxShadow: "6px 6px 0px #000",
                                    p: 4,
                                    alignItems: "center",
                                    textAlign: "center",
                                    width: "100%",
                                    maxWidth: "320px",
                                    transition: "all 0.2s ease",
                                    "&:hover": {
                                        transform: "translate(4px, -4px)",
                                        boxShadow: "-4px 10px 0px #000",
                                    },
                                }}
                            >
                                <Box
                                    component="img"
                                    src="/misc/aaron.webp"
                                    alt="Aaron Hartono"
                                    sx={{
                                        width: 110,
                                        height: 110,
                                        borderRadius: "50%",
                                        objectFit: "cover",
                                        border: "3px solid #000",
                                        mb: 2,
                                    }}
                                />
                                <Typography
                                    sx={{
                                        fontWeight: 800,
                                        fontSize: "1.2rem",
                                        mb: 0.5,
                                    }}
                                >
                                    Aaron Hartono
                                </Typography>
                                <Chip
                                    label="Backend — Python & FastAPI"
                                    size="small"
                                    sx={{
                                        bgcolor: "secondary.main",
                                        color: "#fff",
                                        fontWeight: 600,
                                        mb: 2,
                                    }}
                                />
                                <Stack
                                    gap={1}
                                    sx={{ textAlign: "left", width: "100%" }}
                                >
                                    {[
                                        "Expertise in Python, FastAPI, PostgreSQL, and SQLAlchemy",
                                        "BNCC Elite Team bidang Web Development",
                                        "St. Robert Southwell Award for Best Student in Canicomp (2025)",
                                        "Developed Canisius Charity Concert, ticketing system with real-time payment updates, serving 500+ active users",
                                    ].map((line, i) => (
                                        <Stack
                                            key={i}
                                            direction="row"
                                            alignItems="flex-start"
                                            gap={1}
                                        >
                                            <CheckCircleIcon
                                                sx={{
                                                    color: "secondary.dark",
                                                    fontSize: "1rem",
                                                    mt: "2px",
                                                    flexShrink: 0,
                                                }}
                                            />
                                            <Typography
                                                sx={{
                                                    fontSize: "0.85rem",
                                                    color: "#444",
                                                    lineHeight: 1.4,
                                                }}
                                            >
                                                {line}
                                            </Typography>
                                        </Stack>
                                    ))}
                                </Stack>
                            </Stack>
                        </Grid2>
                    </Grid2>
                </Container>
            </Stack>

            {/* Final CTA Section */}
            <Stack
                sx={{
                    background: "linear-gradient(135deg, #1565c0 0%, #00796b 100%)",
                    position: "relative",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)",
                    },
                }}
                py={{ xs: 8, md: 12 }}
                px={{ xs: 3, sm: 5 }}
            >
                <Container maxWidth="sm">
                    <Stack alignItems="center" gap={4} sx={{ position: "relative", zIndex: 1 }}>
                        <SchoolIcon
                            sx={{ fontSize: 60, color: "#fff" }}
                        />
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: "1.8rem", sm: "2.5rem" },
                                fontWeight: 900,
                                color: "#fff",
                                textAlign: "center",
                            }}
                        >
                            Siap Jadi Web Developer?
                        </Typography>
                        <Typography
                            sx={{
                                color: "#fff",
                                textAlign: "center",
                                fontSize: "1.15rem",
                                maxWidth: "500px",
                            }}
                        >
                            Jangan lewatkan kesempatan untuk belajar web
                            development secara intensif. Kuota terbatas!
                        </Typography>

                        <Stack
                            direction="row"
                            alignItems="center"
                            gap={2}
                            sx={{
                                bgcolor: "rgba(255,255,255,0.15)",
                                border: "2px solid rgba(255,255,255,0.3)",
                                borderRadius: "12px",
                                px: 3,
                                py: 2,
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "rgba(255,255,255,0.85)",
                                    textDecoration: "line-through",
                                    fontSize: "1.2rem",
                                }}
                            >
                                Rp 1.500K
                            </Typography>
                            <Typography
                                sx={{
                                    color: "#fff",
                                    fontWeight: 900,
                                    fontSize: "2rem",
                                }}
                            >
                                Rp 800K
                            </Typography>
                        </Stack>

                        <Button
                            bgcolor="#fff"
                            color="primary.main"
                            bdcolor="#000"
                            sx={{
                                fontWeight: 700,
                                px: 5,
                                py: 1.5,
                                fontSize: "1.1rem",
                            }}
                            onClick={() => window.open(FORM_URL, "_blank")}
                        >
                            Daftar Sekarang — Rp 800K
                        </Button>

                        <Typography
                            sx={{
                                color: "rgba(255,255,255,0.85)",
                                fontSize: "0.9rem",
                            }}
                        >
                            15 sesi • 3 minggu • Fullstack project
                        </Typography>
                    </Stack>
                </Container>
            </Stack>
        </>
    );
}
