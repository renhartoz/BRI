import { Stack } from "@mui/material";
import Theme from "./components/Theme";
import { Navbar3 } from "./components/Navbar";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { MathJaxContext } from "better-react-mathjax";
import { PageNav2 } from "./components/PageNav";
import {routes} from "./main";
import { findParentRoute } from "./Utility";
import ScrollToTop from "./components/ScrollToTop";

export default function ExerciseLayout() {
    const location = useLocation();
    const [exercise, setExercise] = useState(null);

    useEffect(() => {
        const matched = findParentRoute(location.pathname, routes);
        setExercise(matched);
    }, [location.pathname]);
    
    if (!exercise) return null; // prevent crash until loaded
    
    const slug = exercise.path.split('/').filter(Boolean).pop();
    const url = (exercise.children || []).map(child => `${exercise.path}/${child.path}`);

    const config = {
        loader: { load: ['[tex]/color'] },
        tex: {
            packages: { '[+]': ['color'] },
        },
    };

    return (
        <>
            <Stack sx={{minHeight: '100vh'}}>
                <Theme>
                    <MathJaxContext config={config}>
                        <Navbar3 exercise={slug} />
                        <Stack flexGrow={1}>
                            <Outlet />
                        </Stack>
                        <ScrollToTop/>
                        { url && url.length>1 && <PageNav2 pages={url} exerciseName={slug} /> }
                    </MathJaxContext>
                </Theme>
            </Stack>
        </>
    );
}
