import React, { useState } from 'react';
import { Button, Stack, TextField, Box, Typography, Paper, IconButton, Tooltip } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import api from "../services/auth";

export function CourseForm({ onGenerate }) {
  const [courseName, setCourseName] = useState('');
  const [topic, setTopic] = useState('');
  const [subtopic, setSubtopic] = useState('');
  const [url, setUrl] = useState('');
  const [duration, setDuration] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    onGenerate('');

    const data = {
      course_name: courseName,
      topic: topic,
      subtopic: subtopic,
      url: url,
      duration: duration,
    };

    try {
      let lastProcessedIndex = 0;

      await api.post('/ai/course/', data, {
        headers: {
          'Content-Type': 'application/json',
        },
        responseType: 'text',
        onDownloadProgress: (progressEvent) => {
          const xhr = progressEvent.event ? progressEvent.event.target : progressEvent.target;
          if (!xhr) {
            console.log("No XHR found in progressEvent", progressEvent);
            return;
          }

          const response = xhr.responseText;
          console.log("Stream progress, total length:", response.length);

          const newContent = response.substring(lastProcessedIndex);
          lastProcessedIndex = response.length;

          console.log("New chunk:", newContent);

          const lines = newContent.split('\n\n');

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const dataStr = line.slice(6);
              if (dataStr === '[DONE]') {
                console.log("Stream done signal received");
                break;
              }
              try {
                const parsedChunk = JSON.parse(dataStr);
                // Functional update to avoid stale closure if we were using it inside a closure, 
                // but here we are in a callback. Ideally we trust the setter.
                onGenerate((prev) => prev + parsedChunk);
              } catch (e) {
                console.error('Error parsing chunk:', e, "dataStr:", dataStr);
              }
            }
          }
        }
      });
    } catch (error) {
      console.error('Error generating course JSON:', error);
      onGenerate(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 2, backgroundColor: '#fff' }}>
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
        Course Generator
      </Typography>

      <Stack direction="column" spacing={2}>
        <TextField required id="course_name" label="Course Name" value={courseName} onChange={(e) => setCourseName(e.target.value)} />
        <TextField required id="topic" label="Course Topic" value={topic} onChange={(e) => setTopic(e.target.value)} />
        <TextField required id="subtopic" label="Course Subtopic" value={subtopic} onChange={(e) => setSubtopic(e.target.value)} />
        <TextField required id="url" label="Course URL" value={url} onChange={(e) => setUrl(e.target.value)} />
        <TextField required id="duration" label="Course Duration" value={duration} onChange={(e) => setDuration(e.target.value)} />

        <Button variant="contained" color="primary" onClick={handleSubmit} disabled={loading}>
          {loading ? 'Generating...' : 'Generate JSON'}
        </Button>
      </Stack>
    </Paper>
  );
}

export function CourseJSONDisplay({ courseJSON }) {
  const handleCopy = () => {
    if (courseJSON) {
      navigator.clipboard.writeText(typeof courseJSON === 'string' ? courseJSON : JSON.stringify(courseJSON, null, 2));
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        backgroundColor: '#1e1e1e',
        color: '#fff',
        borderRadius: 2,
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
        <Typography variant="h6" fontWeight="bold">
          JSON Output
        </Typography>
        <Tooltip title="Copy to Clipboard">
          <IconButton onClick={handleCopy} sx={{ color: '#fff' }}>
            <ContentCopyIcon />
          </IconButton>
        </Tooltip>
      </Stack>

      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          backgroundColor: '#2b2b2b',
          borderRadius: '8px',
          p: 2,
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#1e1e1e',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#555',
            borderRadius: '4px',
          },
        }}
      >
        <pre
          style={{
            margin: 0,
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            fontFamily: 'monospace',
            color: '#fff',
          }}
        >
          {courseJSON ? (typeof courseJSON === 'string' ? courseJSON : JSON.stringify(courseJSON, null, 2)) : '// Generated JSON will appear here'}
        </pre>
      </Box>
    </Paper>
  );
}

export default function CourseGenerator() {
  const [courseJSON, setCourseJSON] = useState('');

  const handleGenerate = (data) => {
    setCourseJSON(data);
  };

  return (
    <Box sx={{ height: '100vh', backgroundColor: '#f5f5f5', p: 4 }}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={3}
        sx={{
          height: { xs: 'auto', md: 'calc(100vh - 120px)' },
        }}
      >
        <Box sx={{ flex: 1, overflow: 'auto' }}>
          <CourseForm onGenerate={handleGenerate} />
        </Box>

        <Box sx={{ flex: 1, overflow: 'auto' }}>
          <CourseJSONDisplay courseJSON={courseJSON} />
        </Box>
      </Stack>
    </Box>
  );
}
