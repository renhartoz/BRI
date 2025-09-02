import React, { useState, useEffect } from 'react';
import { Stack, AppBar, Typography } from "@mui/material";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Theme from "./components/Theme";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import { MathJaxContext } from "better-react-mathjax";
import ScrollToTop from "./components/ScrollToTop";
import { restoreSession, isTokenExpired, getAccessToken } from "./services/token.js";

const config = {
    loader: { load: ['[tex]/color'] },
    tex: {
        packages: { '[+]': ['color'] },
    },
};

export default function AdminLayout() {
    const navigate = useNavigate();
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const init = async () => {
            await restoreSession();
            setIsReady(true);
        };
        init();
    }, []);

    if (!isReady) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Stack sx={{minHeight: '100vh'}}>
                <Theme>
                    <MathJaxContext config={config}>
                        <Stack flexGrow={1}>
                            <Outlet />
                        </Stack>
                        <ScrollToTop/>
                    </MathJaxContext>
                </Theme>
            </Stack>
        </>
    );
}
