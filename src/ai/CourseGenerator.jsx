import React, { useState } from 'react';
import { Button, Stack, TextField, Box, Typography, Paper } from '@mui/material';
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
  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        backgroundColor: '#1e1e1e',
        color: '#fff',
        borderRadius: 2,
        overflow: 'auto',
        height: '100%',
      }}
    >
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
        JSON Output
      </Typography>
      <pre
        style={{
          backgroundColor: '#2b2b2b',
          padding: '16px',
          borderRadius: '8px',
          overflowX: 'auto',
          margin: 0,
          color: '#fff',
        }}
      >
        {courseJSON ? JSON.stringify(courseJSON, null, 2) : '// Generated JSON will appear here'}
      </pre>
    </Paper>
  );
}

export default function CourseGenerator() {
  const [courseJSON, setCourseJSON] = useState(null);

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
