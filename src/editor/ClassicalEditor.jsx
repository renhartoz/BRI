// ClassicEditor.jsx
import React, { useState } from 'react';
import { Stack, Button, Typography } from '@mui/material';
import RenderContent from '../course/RenderContent';
import CustomInput from '../form/CustomInput';

export default function ClassicEditor({ onGenerate }) {
  const [content, setContent] = useState([]);
  const [preview, setPreview] = useState(false);

  const addBlock = (block) => setContent(prev => [...prev, block]);

  const addParagraph = () => {
    addBlock({ type: 'paragraph', text: 'This is a paragraph.' });
  };

  const addMath = () => {
    addBlock({ type: 'math', text: '\\[ x^2 + y^2 = z^2 \\]' });
  };

  const addFormula = () => {
    addBlock({
      type: 'formula',
      children: [{ type: 'math', text: '\\[ a^2 + b^2 = c^2 \\]' }]
    });
  };

  const addImage = () => {
    addBlock({
      type: 'image',
      src: 'https://via.placeholder.com/300',
      alt: 'Sample Image',
    });
  };

  const addVideo = () => {
    addBlock({
      type: 'video',
      src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    });
  };

  const generateJSON = () => {
    const blog = {
      name: 'Sample Blog',
      url: 'sample-blog',
      unit: 'Unit',
      subunit: 'Subunit',
      time: new Date().toISOString(),
      content
    };
    onGenerate(blog);
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h6">Classic Editor</Typography>

      <Stack direction="row" spacing={1}>
        <Button onClick={addParagraph}>+ Paragraph</Button>
        <Button onClick={addMath}>+ Math</Button>
        <Button onClick={addFormula}>+ Formula</Button>
        <Button onClick={addImage}>+ Image</Button>
        <Button onClick={addVideo}>+ Video</Button>
      </Stack>

      <Button variant="contained" color="primary" onClick={() => setPreview(!preview)}>
        {preview ? "Back to Editor" : "Preview"}
      </Button>

      <Button variant="outlined" onClick={generateJSON}>Generate JSON</Button>

      {preview && <RenderContent data={content} />}
    </Stack>
  );
}
