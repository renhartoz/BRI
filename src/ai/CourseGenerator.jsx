import React, { useState } from 'react';
import { Button, Stack, TextField, Box, Typography, Paper } from '@mui/material';
import api from "../services/auth";

export function CourseForm({ onGenerate }) {
  const [formValues, setFormValues] = useState({
    course_topic: '',
    course_subtopic: '',
    course_name: '',
    course_url: '',
    course_duration: '',
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = () => {
    onGenerate(formValues);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 2, backgroundColor: '#fff' }}>
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
        Course Generator
      </Typography>

      <Stack direction="column" spacing={2}>
        <TextField required id="course_topic" label="Course Topic" value={formValues.course_topic} onChange={handleChange} />
        <TextField required id="course_subtopic" label="Course Subtopic" value={formValues.course_subtopic} onChange={handleChange} />
        <TextField required id="course_name" label="Course Name" value={formValues.course_name} onChange={handleChange} />
        <TextField required id="course_url" label="Course URL" value={formValues.course_url} onChange={handleChange} />
        <TextField required id="course_duration" label="Course Duration" value={formValues.course_duration} onChange={handleChange} />

        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Generate JSON
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
