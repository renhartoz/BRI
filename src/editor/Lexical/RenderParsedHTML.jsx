// src/components/RenderParsedHTML.jsx
import React from 'react';
import parse, { domToReact } from 'html-react-parser';
import { Box, Typography } from '@mui/material';

export default function RenderParsedHTML({ html }) {
  return (
    <>
        {parse(html)}
    </>
  );
}
