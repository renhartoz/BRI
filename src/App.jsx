import { Stack } from "@mui/material";
import Theme from "./components/Theme";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { MathJaxContext } from "better-react-mathjax";
import ScrollToTop from "./components/ScrollToTop";

const config = {
    loader: { load: ['[tex]/color'] },
    tex: {
        packages: { '[+]': ['color'] },
    },
};

export default function App() {
    return (
        <>
            <Stack sx={{minHeight: '100vh'}}>
                <Theme>
                    <MathJaxContext config={config}>
                        <Header />
                        <Stack flexGrow={1}>
                            <Outlet />
                        </Stack>
                        <ScrollToTop/>
                        <Footer />
                    </MathJaxContext>
                </Theme>
            </Stack>
        </>
    );
}
