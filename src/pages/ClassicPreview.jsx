import React from 'react';
import { useLocation } from 'react-router-dom';
import RenderContent from '../editor/RenderContent';
import { Stack, Typography } from '@mui/material';
import { loadBlog } from '../Utility';

export default function ClassicPreview() {
    const blog = loadBlog();
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
