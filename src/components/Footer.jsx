import { Stack, Typography, Divider, Box } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "./Button";

import {
    Instagram,
    YouTube,
    WhatsApp,
} from "@mui/icons-material";

const socialMedia = [
    {
        icon: <Instagram />,
        color: "linear-gradient(#833ab4,#fd1d1d,#fcb045)",
        href: "#",
        label: "Instagram",
    },
    {
        icon: <YouTube />,
        color: "#FF0000",
        href: "#",
        label: "YouTube",
    },
    {
        icon: <WhatsApp />,
        color: "#25D366",
        href: "#",
        label: "WhatsApp",
    },
];

const footerLinks = [
    {
        title: "Navigasi",
        items: [
            { label: "Home", href: "/" },
            { label: "Blog", href: "/comingsoon" },
        ],
    },
    {
        title: "Belajar",
        items: [
            { label: "Kursus Online", href: "/course" },
            { label: "Latihan Soal", href: "/exercise" },
            { label: "Webinar & Workshop", href: "/comingsoon" },
        ],
    },
    {
        title: "Akun",
        items: [
            { label: "Masuk / Daftar", href: "/login" },
        ],
    },
];

const SocialButtons = ({ sx }) => (
    <Stack
        direction="row"
        gap={{ xs: 1.5, sm: 2 }}
        sx={{
            flexWrap: "wrap",
            justifyContent: { xs: "flex-start", sm: "center", md: "flex-start" },
            ...sx,
        }}
    >
        {socialMedia.map(({ icon, color, href, label }, idx) => (
            <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{ textDecoration: "none" }}
            >
                <Button
                    bgcolor={color}
                    bdcolor={"#000"}
                    color="#fff"
                    sx={{
                        px: { xs: 1, sm: 1.2 },
                        py: { xs: 0.6, sm: 0.8 },
                        minWidth: 0,
                        "&:hover": {
                            transform: "translate(3px, 3px)",
                            boxShadow: "none",
                        },
                    }}
                >
                    {icon}
                </Button>
            </a>
        ))}
    </Stack>
);

export default function Footer({ sx }) {
    const year = new Date().getFullYear();

    return (
        <Stack
            component="footer"
            sx={{
                bgcolor: "kurai_ao.main",
                color: "#fff",
                borderTop: "3px solid #000",
                ...sx,
            }}
        >
            <Stack
                direction={{ xs: "column", sm: "column", md: "row" }}
                gap={{ xs: 4, sm: 5, md: 6 }}
                alignItems={{ xs: "flex-start", sm: "center", md: "flex-start" }}
                sx={{
                    mb: { xs: "3.932rem", sm: 0 },
                    py: { xs: 5, sm: 6, md: 8 },
                    px: { xs: 2.5, sm: 4, md: 6, lg: 8 },
                }}
            >
                {/* Left Section — Branding */}
                <Stack
                    width={{ xs: "100%", sm: "100%", md: "35%" }}
                    gap={{ xs: 2, sm: 2.5 }}
                    alignItems={{ xs: "flex-start", sm: "center", md: "flex-start" }}
                    textAlign={{ xs: "left", sm: "center", md: "left" }}
                >
                    <Stack gap={{ xs: 1.5, sm: 2 }}>
                        <Typography
                            variant="h5"
                            fontWeight={800}
                            sx={{
                                color: "#fff",
                                fontSize: { xs: "1.1rem", sm: "1.25rem" },
                            }}
                        >
                            Bimbel Rumah Ilmiah
                        </Typography>
                        <Typography
                            sx={{
                                color: "rgba(255,255,255,0.8)",
                                fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1rem" },
                                maxWidth: { xs: "100%", sm: "400px", md: "360px" },
                                lineHeight: 1.6,
                            }}
                        >
                            Menjadikan esok hari lebih baik dari hari ini.
                            Bimbingan belajar berkualitas dengan kursus dan
                            latihan terintegrasi langsung di website.
                        </Typography>
                    </Stack>

                    <SocialButtons
                        sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
                    />
                </Stack>

                {/* Desktop Link Columns (md+) */}
                <Stack
                    direction="row"
                    sx={{
                        display: { xs: "none", sm: "none", md: "flex" },
                        width: { md: "65%" },
                    }}
                    justifyContent="flex-end"
                    gap={{ md: 4, lg: 6 }}
                    flexWrap="wrap"
                >
                    {footerLinks.map((list, id) => (
                        <Stack key={id} gap={1.5} minWidth={{ md: 130, lg: 140 }}>
                            <Typography
                                fontWeight={700}
                                sx={{
                                    color: "#fff",
                                    fontSize: "1rem",
                                    mb: 0.5,
                                }}
                            >
                                {list.title}
                            </Typography>
                            {list.items.map((item, idx) => (
                                <Link
                                    key={idx}
                                    to={item.href}
                                    style={{ textDecoration: "none" }}
                                >
                                    <Typography
                                        sx={{
                                            color: "rgba(255,255,255,0.7)",
                                            fontSize: "0.9rem",
                                            transition: "color 0.2s",
                                            "&:hover": {
                                                color: "#fff",
                                            },
                                        }}
                                    >
                                        {item.label}
                                    </Typography>
                                </Link>
                            ))}
                        </Stack>
                    ))}
                </Stack>

                {/* Tablet Link Grid (sm only) */}
                <Stack
                    direction="row"
                    flexWrap="wrap"
                    gap={4}
                    justifyContent="center"
                    sx={{
                        display: { xs: "none", sm: "flex", md: "none" },
                        width: "100%",
                    }}
                >
                    {footerLinks.map((list, id) => (
                        <Stack key={id} gap={1.5} minWidth={140} flex={1}>
                            <Typography
                                fontWeight={700}
                                sx={{
                                    color: "#fff",
                                    fontSize: "0.95rem",
                                }}
                            >
                                {list.title}
                            </Typography>
                            {list.items.map((item, idx) => (
                                <Link
                                    key={idx}
                                    to={item.href}
                                    style={{ textDecoration: "none" }}
                                >
                                    <Typography
                                        sx={{
                                            color: "rgba(255,255,255,0.7)",
                                            fontSize: "0.9rem",
                                        }}
                                    >
                                        {item.label}
                                    </Typography>
                                </Link>
                            ))}
                        </Stack>
                    ))}
                </Stack>

                {/* Mobile Stacked Links (xs only) */}
                <Stack
                    direction="row"
                    flexWrap="wrap"
                    gap={{ xs: 2.5, sm: 3 }}
                    sx={{
                        display: { xs: "flex", sm: "none" },
                        width: "100%",
                    }}
                >
                    {footerLinks.map((list, id) => (
                        <Stack key={id} gap={1} minWidth={110}>
                            <Typography
                                fontWeight={700}
                                sx={{
                                    color: "#fff",
                                    fontSize: "0.9rem",
                                }}
                            >
                                {list.title}
                            </Typography>
                            {list.items.map((item, idx) => (
                                <Link
                                    key={idx}
                                    to={item.href}
                                    style={{ textDecoration: "none" }}
                                >
                                    <Typography
                                        sx={{
                                            color: "rgba(255,255,255,0.7)",
                                            fontSize: "0.85rem",
                                            py: 0.25,
                                        }}
                                    >
                                        {item.label}
                                    </Typography>
                                </Link>
                            ))}
                        </Stack>
                    ))}
                </Stack>

                {/* Social Media (Mobile + Tablet) */}
                <SocialButtons
                    sx={{
                        display: { xs: "flex", sm: "flex", md: "none" },
                        width: { xs: "100%", sm: "auto" },
                        justifyContent: { xs: "flex-start", sm: "center" },
                    }}
                />
            </Stack>

            {/* Bottom Bar */}
            <Box
                sx={{
                    borderTop: "1px solid rgba(255,255,255,0.15)",
                    py: 2,
                    px: { xs: 3, sm: 5, md: 8 },
                }}
            >
                <Typography
                    sx={{
                        color: "rgba(255,255,255,0.5)",
                        fontSize: "0.8rem",
                        textAlign: "center",
                    }}
                >
                    &copy; {year} Bimbel Rumah Ilmiah. All rights reserved.
                </Typography>
            </Box>
        </Stack>
    );
}
