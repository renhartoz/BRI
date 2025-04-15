import React, { useState } from 'react';
import { Box, Button, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

import ClassicEditor from './ClassicEditor';
import LexicalEditor from './LexicalEditor';
import RenderContent from '../course/RenderContent';
import RenderLexical from './RenderLexical';

export default function Editor() {
  const [editorMode, setEditorMode] = useState('classic');
  const [generatedJson, setGeneratedJson] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleGenerate = (json) => {
    setGeneratedJson(json);
    setShowPreview(true);
  };

  return (
    <Box p={2}>
      <Typography variant="h5" mb={2}>Blog Editor</Typography>

      <ToggleButtonGroup
        value={editorMode}
        exclusive
        onChange={(e, newMode) => {
          if (newMode !== null) setEditorMode(newMode);
          setShowPreview(false);
          setGeneratedJson(null);
        }}
        sx={{ mb: 2 }}
      >
        <ToggleButton value="classic">Classic Mode</ToggleButton>
        <ToggleButton value="lexical">Lexical Mode</ToggleButton>
      </ToggleButtonGroup>

      {editorMode === 'classic' ? (
        <ClassicEditor onGenerate={handleGenerate} />
      ) : (
        <LexicalEditor onGenerate={(lexicalJson) => {
          const blog = {
            name: 'Lexical Blog',
            url: 'lexical-blog',
            unit: 'RichText',
            subunit: 'Lexical',
            time: new Date().toISOString(),
            content: lexicalJson,
          };
          handleGenerate(blog);
        }} />
      )}

      {showPreview && generatedJson && (
        <Box mt={4}>
          <Typography variant="h6">Preview:</Typography>
          {editorMode === 'classic' ? (
            <RenderContent data={generatedJson.content} />
          ) : (
            <RenderLexical data={generatedJson.content} />
          )}

          <Typography mt={4} fontWeight="bold">JSON Output:</Typography>
          <Box
            component="pre"
            sx={{
              whiteSpace: 'pre-wrap',
              backgroundColor: '#f5f5f5',
              padding: 2,
              borderRadius: 2,
              maxHeight: 300,
              overflowY: 'auto'
            }}
          >
            {JSON.stringify(generatedJson, null, 2)}
          </Box>
        </Box>
      )}
    </Box>
  );
}
