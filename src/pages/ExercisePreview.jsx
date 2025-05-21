import React, { useEffect, useState } from 'react';
import Theme from '../components/Theme';
import { MathJaxContext } from 'better-react-mathjax';
import RenderContent from '../editor/RenderContent';
import { Stack, Typography } from '@mui/material';
import { loadBlog } from '../Utility';
import ExerciseHeader from '../exercise/ExerciseHeader';

export default function ExercisePreview() {
    const [blog, setBlog] = useState(loadBlog('exercise-editor'));
    useEffect(() => {
        const handleStorage = () => {
            const updatedBlog = loadBlog('exercise-editor');
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
                    <ExerciseHeader material={blog?.unit} title={blog?.subunit} time={blog?.time} />
                    <RenderContent data={blog?.content} />
                </Stack>
            </MathJaxContext>
        </Theme>
    );
}
