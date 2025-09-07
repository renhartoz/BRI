import React, { useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import RenderContent from "../editor/RenderContent";
import Loading from "../components/Loading";
import api from "../services/auth";

export default function Template() {
    const { courseId, detailId } = useParams();
    const location = useLocation();
    const [blog, setBlog] = useState(null);
    useEffect(() => {
        setBlog(null);
        api.get(`/course/details/url/?url=${location.pathname}`)
        .then(response => setBlog(response.data||null))
        .catch(error => console.error('Error fetching blog data:', error))
    }, [courseId, detailId]);

    if (!blog) return <Loading />;

    return (
        <Stack
            px={{ xs: 5, sm: 8, md: 10 }}
            py={4}
            gap={3}
            sx={{ backgroundColor: "#fff" }}
        >
            <Stack gap={1} direction="column">
                <Typography
                    textTransform={blog.transform?.unit || "uppercase"}
                    variant="body2"
                    letterSpacing={-0.5}
                    color="#555"
                >
                    {blog.unit}
                </Typography>
                <Typography
                    textTransform={blog.transform?.subunit || "capitalize"}
                    fontWeight={700}
                    variant="h5"
                >
                    {blog.subunit}
                </Typography>
            </Stack>
            <Typography color="#555">{blog.time}</Typography>
            <RenderContent data={blog.content} />
        </Stack>
    );
}
