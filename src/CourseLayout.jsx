import { Stack } from "@mui/material";
import Theme from "./components/Theme";
import { Navbar2 } from "./components/Navbar";
import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { MathJaxContext } from "better-react-mathjax";
import PageNav from "./components/PageNav";
import ScrollToTop from "./components/ScrollToTop";
import Loading from "./components/Loading";
import { restoreSession } from "./services/token";
import api from "./services/auth";

export default function CourseLayout() {
    const { courseId } = useParams();
    const [pages, setPages] = useState([]);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const init = async () => {
        await restoreSession();
            setIsReady(true);
        };
        init();
    }, []);

    useEffect(() => {
        if (courseId) {
            api.get(`/course/href/?href=/course/${courseId}`)
            .then(res => {
                const p = res.data.details.map(d => d.url);
                setPages(p);
            })
            .catch(err => console.error(err));
        }
    }, [courseId]);

    const config = {
        loader: { load: ["[tex]/color"] },
        tex: { packages: { "[+]": ["color"] } },
    };

    return (
        <Stack sx={{ minHeight: "100vh" }}>
            <Theme>
                <MathJaxContext config={config}>
                {!isReady ? (
                    <Loading/>
                ) : (
                    <>
                        <Navbar2 course={courseId} />
                        <Stack flexGrow={1}>
                            <Outlet />
                        </Stack>
                        <ScrollToTop />
                        {pages.length > 1 && (<PageNav pages={pages} courseName={courseId} />)}
                    </>
                )}
                </MathJaxContext>
            </Theme>
        </Stack>
    );
}
