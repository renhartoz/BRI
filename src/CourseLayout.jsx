import { Stack } from "@mui/material";
import Theme from "./components/Theme";
import { Navbar2 } from "./components/Navbar";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { MathJaxContext } from "better-react-mathjax";
import PageNav from "./components/PageNav";
import { routes } from "./main";
import { findParentRoute } from "./Utility";
import ScrollToTop from "./components/ScrollToTop";

export default function CourseLayout() {
    const location = useLocation();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        const matched = findParentRoute(location.pathname, routes);
        setCourse(matched);
    }, [location.pathname]);

    if (!course) return null;

    const slug = course.path.split("/").filter(Boolean).pop();
    const url = (course.children || []).map(child => `${course.path}/${child.path}`);

    const config = {
        loader: { load: ['[tex]/color'] },
        tex: {
            packages: { '[+]': ['color'] },
        },
    };

    return (
        <Stack sx={{ minHeight: '100vh' }}>
            <Theme>
                <MathJaxContext config={config}>
                    <Navbar2 course={slug} />
                    <Stack flexGrow={1}>
                        <Outlet />
                    </Stack>
                    <ScrollToTop />
                    {url.length > 1 && <PageNav pages={url} courseName={slug} />}
                </MathJaxContext>
            </Theme>
        </Stack>
    );
}
