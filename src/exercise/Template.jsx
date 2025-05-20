import React, { useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";
import RenderExercise from "../editor/RenderExercise";
import Loading from "../components/Loading";

export default function Template({ blogData, id }) {
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const index = id;
        const foundBlog = blogData.find((b) => b.id === index);
        setBlog(foundBlog || null);
    }, []);

    if (!blog) return <Loading />;

    return (
        <RenderExercise blog={blog} />
    );
}
