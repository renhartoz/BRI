import React, { useState, useEffect } from 'react';
import Theme from '../components/Theme';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar,
  Alert,
  Tooltip,
  Button,
  Stack,
  Typography,
  IconButton
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useNavigate } from 'react-router-dom';
import CustomInput from '../form/CustomInput';
import CustomInputNumber from '../form/CustomInputNumber';
import SelectField from '../form/SelectField';
import DeleteIcon from '@mui/icons-material/Delete';
import { saveBlog, loadBlog } from '../Utility';

import TextFieldsIcon from '@mui/icons-material/TextFields';
import FunctionsIcon from '@mui/icons-material/Functions';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import TitleIcon from '@mui/icons-material/Title';
import CalculateIcon from '@mui/icons-material/Calculate';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import JSONIcon from '@mui/icons-material/DataObject';
import PreviewIcon from '@mui/icons-material/Visibility';

export default function ClassicEditor() {
  const navigate = useNavigate();
  const [time, setTime] = useState(()=>loadBlog('editor').time.split(' ')[0]||'');
  const [timeUnit, setTimeUnit] = useState(()=>loadBlog('editor').time.split(' ')[1]||'min');
  const [blog, setBlog] = useState(()=>loadBlog('editor')||{
    name: '',
    url: '',
    unit: '',
    subunit: '',
    time: time + ' ' + timeUnit,
    content: [],
  });
  const [jsonDialogOpen, setJsonDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // 💾 Save to localStorage on change
  useEffect(() => {
    setBlog(prev => ({
      ...prev,
      time: `${time} ${timeUnit}`,
    }));
  }, [time, timeUnit]);
  
  useEffect(() => {
    saveBlog('editor', blog);
  }, [blog]);

  // ➕ Add content block
  const addBlock = (type) => {
    const newBlock = {
      type,
      ...(type === 'image' || type === 'video'
        ? { src: '', alt: '' }
        : type === 'math'
        ? { text: '\\( x + y = z \\)' }
        : type === 'list'
        ? { title: 'List Title', items: ['Item 1', 'Item 2'], bullet: '1' }
        : { text: '' }),
    };
    setBlog((prev) => ({
      ...prev,
      content: [...prev.content, newBlock],
    }));
  };

  // ✏️ Update individual block
  const updateBlock = (index, field, value) => {
    const updated = [...blog.content];
    updated[index][field] = value;
    setBlog({ ...blog, content: updated });
  };

  const updateListItem = (blockIndex, itemIndex, value) => {
    const updated = [...blog.content];
    updated[blockIndex].items[itemIndex] = value;
    setBlog({ ...blog, content: updated });
  };

  const addListItem = (blockIndex) => {
    const updated = [...blog.content];
    updated[blockIndex].items.push('New Item');
    setBlog({ ...blog, content: updated });
  };

  const removeListItem = (blockIndex, itemIndex) => {
    const updated = [...blog.content];
    updated[blockIndex].items.splice(itemIndex, 1);
    setBlog({ ...blog, content: updated });
  };

  // ❌ Delete block
  const removeBlock = (index) => {
    const updated = blog.content.filter((_, i) => i !== index);
    setBlog({ ...blog, content: updated });
  };

  // ⬇ Export to JSON
  const exportJSON = () => {
    const json = JSON.stringify(blog, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${blog.title || 'untitled'}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // 👁 Preview
  const handlePreview = () => {
    navigate('/preview');
  };

  return (
    <Theme>
      <Stack spacing={3} p={3}>
        <Button onClick={()=>navigate('/')}>
          <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={3}>
            <Stack width={'5vw'}>
              <img src="/biru.svg" alt="BRI"/>
            </Stack>
            <Typography fontWeight={600} fontSize={'3em !important'} color='primary'>
              Rumah Ilmiah
            </Typography>
          </Stack>
        </Button>

        <Stack gap={4} width={'100%'} alignItems={'center'}>
          <Stack width={'80%'}>
              <Typography>Blog Name</Typography>
              <CustomInput
                  type='text'
                  palette='primary'
                  useThemeColor={true}
                  required
                  name='blog_name'
                  value={blog.name}
                  setValue={(val) => setBlog({ ...blog, name: val })}
              />
          </Stack>
          <Stack width={'80%'}>
              <Typography>URL Path</Typography>
              <CustomInput
                  type='text'
                  palette='secondary'
                  useThemeColor={true}
                  required
                  name='url_path'
                  value={blog.url}
                  setValue={(val) => setBlog({ ...blog, url: val })}
              />
          </Stack>
          <Stack width={'80%'}>
              <Typography>Bab</Typography>
              <CustomInput
                  type='text'
                  palette='tertiary'
                  useThemeColor={true}
                  required
                  name='unit'
                  value={blog.unit}
                  setValue={(val) => setBlog({ ...blog, unit: val })}
              />
          </Stack>
          <Stack width={'80%'}>
              <Typography>Sub-bab</Typography>
              <CustomInput
                  type='text'
                  palette='quaternary'
                  useThemeColor={true}
                  required
                  name='subunit'
                  value={blog.subunit}
                  setValue={(val) => setBlog({ ...blog, subunit: val })}
              />
          </Stack>
          <Stack width={'80%'}>
              <Typography>Time</Typography>
              <Stack direction={'row'} flexWrap={'nowrap'} gap={2}>
                  <Stack width={'100%'}>
                      <CustomInputNumber
                          palette='kurai_ao'
                          useThemeColor={true}
                          required
                          name='time'
                          value={time}
                          setValue={setTime}
                          fullWidth
                          decimal
                      />
                  </Stack>
                  <SelectField
                      name="timeUnit"
                      value={timeUnit}
                      setValue={setTimeUnit}
                      choices={[
                          ["min", "Menit"],
                          ["hour", "Jam"],
                          ["day", "Hari"]
                      ]}
                      fullWidth={false}
                      sx={{
                        minWidth:'8vw'
                      }}
                  />
              </Stack>
          </Stack>
        </Stack>

        <Stack direction="row" justifyContent={'center'} alignItems={'center'} spacing={2}>
          <Tooltip title="Add Paragraph">
            <IconButton 
              color="primary" 
              onClick={() => addBlock('paragraph')}
              sx={{ border: '1px solid', borderRadius: '8px', padding: '8px' }}
            >
              <TextFieldsIcon />
            </IconButton>
          </Tooltip>
          
          <Tooltip title="Add Math">
            <IconButton 
              color="primary" 
              onClick={() => addBlock('math')}
              sx={{ border: '1px solid', borderRadius: '8px', padding: '8px' }}
            >
              <FunctionsIcon />
            </IconButton>
          </Tooltip>
          
          <Tooltip title="Add Image">
            <IconButton 
              color="primary" 
              onClick={() => addBlock('image')}
              sx={{ border: '1px solid', borderRadius: '8px', padding: '8px' }}
            >
              <ImageIcon />
            </IconButton>
          </Tooltip>
          
          <Tooltip title="Add Video">
            <IconButton 
              color="primary" 
              onClick={() => addBlock('video')}
              sx={{ border: '1px solid', borderRadius: '8px', padding: '8px' }}
            >
              <VideocamIcon />
            </IconButton>
          </Tooltip>
          
          <Tooltip title="Add Heading">
            <IconButton 
              color="primary" 
              onClick={() => addBlock('heading')}
              sx={{ border: '1px solid', borderRadius: '8px', padding: '8px' }}
            >
              <TitleIcon />
            </IconButton>
          </Tooltip>
          
          <Tooltip title="Add Formula">
            <IconButton 
              color="primary" 
              onClick={() => addBlock('formula')}
              sx={{ border: '1px solid', borderRadius: '8px', padding: '8px' }}
            >
              <CalculateIcon />
            </IconButton>
          </Tooltip>
          
          <Tooltip title="Add List">
            <IconButton 
              color="primary" 
              onClick={() => addBlock('list')}
              sx={{ border: '1px solid', borderRadius: '8px', padding: '8px' }}
            >
              <FormatListBulletedIcon />
            </IconButton>
          </Tooltip>
        </Stack>

        <Stack spacing={2}>
          {blog.content.map((item, index) => (
            <Stack
              key={index}
              direction="row"
              spacing={2}
              alignItems="flex-start"
              border="1px solid #ccc"
              p={2}
            >
              <Stack flex={1} spacing={1}>
                <Typography fontWeight={600}>{item.type.toUpperCase()}</Typography>

                {/* Render editable input based on type */}
                {item.type === 'paragraph' ||
                item.type === 'heading' ||
                item.type === 'math' ? (
                  <CustomInput
                    multiline
                    placeholder="Text"
                    value={item.text}
                    setValue={(val) => updateBlock(index, 'text', val)}
                  />
                ) : item.type === 'image' || item.type === 'video' ? (
                  <>
                    <CustomInput
                      placeholder="Source URL"
                      value={item.src}
                      setValue={(val) => updateBlock(index, 'src', val)}
                    />
                    <CustomInput
                      placeholder="Alt / Caption"
                      value={item.alt}
                      setValue={(val) => updateBlock(index, 'alt', val)}
                    />
                  </>
                ) : item.type === 'list' ? (
                  <>
                    <CustomInput
                      placeholder="List Title"
                      value={item.title}
                      setValue={(val) => updateBlock(index, 'title', val)}
                    />
                    <CustomInput
                      placeholder="Bullet (1, a, A, bullet, check)"
                      value={item.bullet}
                      setValue={(val) => updateBlock(index, 'bullet', val)}
                    />
                    <Stack spacing={1}>
                      {item.items.map((itm, i) => (
                        <Stack direction="row" spacing={1} key={i}>
                          <CustomInput
                            value={itm}
                            setValue={(val) => updateListItem(index, i, val)}
                          />
                          <IconButton
                            size="small"
                            color="error"
                            onClick={() => removeListItem(index, i)}
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Stack>
                      ))}
                      <Button onClick={() => addListItem(index)} size="small">
                        + Add Item
                      </Button>
                    </Stack>
                  </>
                ) : null}
              </Stack>
              <IconButton color="error" onClick={() => removeBlock(index)}>
                <DeleteIcon />
              </IconButton>
            </Stack>
          ))}
        </Stack>

        <Stack direction="row" spacing={2} justifyContent={'center'} alignItems={'center'}>
          <Tooltip title="Export as JSON">
            <IconButton 
              color="primary" 
              variant="outlined" 
              onClick={exportJSON}
              sx={{ border: '1px solid', borderRadius: '8px', padding: '8px' }}
            >
              <JSONIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Preview JSON">
            <IconButton 
              color="primary" 
              variant="outlined" 
              onClick={() => setJsonDialogOpen(true)}
              sx={{ border: '1px solid', borderRadius: '8px', padding: '8px' }}
            >
              <ContentCopyIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Preview">
            <IconButton 
              color="primary"
              variant="outlined" 
              onClick={handlePreview}
              sx={{ 
                bgcolor: 'primary.main', 
                color: '#fff',
                border: '1px solid', 
                borderRadius: '8px', 
                padding: '8px',
                '&:hover': {
                  bgcolor: 'primary.dark',
                }
              }}
            >
              <PreviewIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>
      <Dialog
        open={jsonDialogOpen}
        onClose={() => setJsonDialogOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          Preview JSON
          <IconButton
            sx={{ ml: 1 }}
            onClick={() => {
              navigator.clipboard.writeText(JSON.stringify(blog, null, 2));
              setSnackbarOpen(true);
            }}
          >
            <ContentCopyIcon fontSize="small" />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <TextField
            multiline
            fullWidth
            minRows={15}
            value={JSON.stringify(blog, null, 2)}
            variant="outlined"
            slotProps={{
              input: {
                readOnly: true,
                style: {
                  fontFamily: 'monospace',
                  whiteSpace: 'pre',
                },
              }
            }}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setJsonDialogOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled" onClose={() => setSnackbarOpen(false)}>
          JSON copied to clipboard!
        </Alert>
      </Snackbar>
    </Theme>
  );
}
