import React, { useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";
import RenderContent from "../editor/RenderContent";
import Loading from "../components/Loading";

export default function Template({ blogData, url }) {
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const pageUrl = url;
        const foundBlog = blogData.find((b) => b.url === pageUrl);
        setBlog(foundBlog || null);
    }, []);

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
