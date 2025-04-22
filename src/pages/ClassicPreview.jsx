import React, { useEffect, useState } from 'react';
import Theme from '../components/Theme';
import { MathJaxContext } from 'better-react-mathjax';
import RenderContent from '../editor/RenderContent';
import { Stack, Typography } from '@mui/material';
import { loadBlog } from '../Utility';

export default function ClassicPreview() {
    const [blog, setBlog] = useState(loadBlog('editor'));
    useEffect(() => {
        const handleStorage = () => {
            const updatedBlog = loadBlog('editor');
            setBlog(updatedBlog);
        };
    
        window.addEventListener('storage', handleStorage);
        return () => window.removeEventListener('storage', handleStorage);
    }, []);
    
    const config = {
        loader: { load: ['[tex]/color'] },
        tex: {
            packages: { '[+]': ['color'] },
        },
    };

    return (
        <Theme>
            <MathJaxContext config={config}>
                <Stack
                    px={{ xs: 5, sm: 8, md: 10 }}
                    py={4}
                    gap={3}
                    sx={{ backgroundColor: "#fff" }}
                >
                    <Stack gap={1} direction="column">
                        <Typography
                            textTransform={"uppercase"}
                            variant="body2"
                            letterSpacing={-0.5}
                            color="#555"
                        >
                            {blog.unit}
                        </Typography>
                        <Typography
                            textTransform={"capitalize"}
                            fontWeight={700}
                            variant="h5"
                        >
                            {blog.subunit}
                        </Typography>
                    </Stack>
                    <Typography color="#555">{blog.time}</Typography>
                    <RenderContent data={blog.content} />
                </Stack>
            </MathJaxContext>
        </Theme>
    );
}
