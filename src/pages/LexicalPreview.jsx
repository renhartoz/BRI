import '../editor/Lexical/themes/PlaygroundEditorTheme.css'
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import RenderParsedHTML from '../editor/Lexical/RenderParsedHTML';
import { Button } from '@mui/material';

export default function LexicalPreview() {
  const navigate = useNavigate();
  const location = useLocation();
  const html = location.state?.html || '<p>No content provided</p>';

  return (
    <>
      <Box fontFamily={'Apercu, Inter, DM Sans, sans-serif'} lineHeight={1.7} fontWeight={400} py={1} px={5}>
        <RenderParsedHTML html={html} />
      </Box>
      <Button variant="outlined" sx={{m:2}} onClick={()=>{navigate('/editor')}}>Back</Button>
    </>
  );
}
