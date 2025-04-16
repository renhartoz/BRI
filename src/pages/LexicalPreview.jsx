import '../editor/Lexical/themes/PlaygroundEditorTheme.css'
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import RenderParsedHTML from '../editor/Lexical/RenderParsedHTML';

export default function LexicalPreview() {
  const location = useLocation();
  const html = location.state?.html || '<p>No content provided</p>';

  return (
    <Box fontFamily={'Apercu, Inter, DM Sans, sans-serif'} lineHeight={1.7} fontWeight={400}>
      <RenderParsedHTML html={html} />
    </Box>
  );
}
