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
  IconButton,
  Collapse,
  Box
} from '@mui/material';

import SortableItem from './SortableItem';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable';

import WebIcon from '@mui/icons-material/Web';
import DownloadIcon from '@mui/icons-material/Download';
import UploadIcon from '@mui/icons-material/Upload';
import { useNavigate } from 'react-router-dom';
import CustomInput from '../form/CustomInput';
import CustomInputNumber from '../form/CustomInputNumber';
import SelectField from '../form/SelectField';
import DeleteIcon from '@mui/icons-material/Delete';
import { saveBlog, loadBlog, getBlockRef, getParentAndIndex } from '../Utility';

import TextFieldsIcon from '@mui/icons-material/TextFields';
import FunctionsIcon from '@mui/icons-material/Functions';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import TitleIcon from '@mui/icons-material/Title';
import CalculateIcon from '@mui/icons-material/Calculate';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import JSONIcon from '@mui/icons-material/DataObject';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import SettingsIcon from '@mui/icons-material/Settings';

function MenuButtons({ addBlock }) {
  return (
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
        
        <Tooltip title="Add Stack">
          <IconButton 
            color="primary" 
            onClick={() => addBlock('stack')}
            sx={{ border: '1px solid', borderRadius: '8px', padding: '8px' }}
          >
            <ViewComfyIcon />
          </IconButton>
        </Tooltip>
      </Stack>
  )
}

function RenderBlock({ blocks, path = [], setBlog, blog }) {
  const [expandedBlocks, setExpandedBlocks] = useState({});
  const [propsDialogPath, setPropsDialogPath] = useState(null);
  const [tempProps, setTempProps] = useState({});

  const updateBlock = (path, field, value) => {
    const updated = [...blog.content];
    const [parent, index] = getParentAndIndex(updated, path);
    parent[index][field] = value;
    setBlog({ ...blog, content: updated });
  };

  const removeBlock = (path) => {
    const updated = [...blog.content];
    const [parent, index] = getParentAndIndex(updated, path);
    parent.splice(index, 1);
    setBlog({ ...blog, content: updated });
  };

  const addBlock = (type) => {
    const newBlock = {
      type,
      ...(type === 'image' || type === 'video'
        ? { src: '', alt: '' }
        : type === 'math'
        ? { text: '\\( x + y = z \\)' }
        : type === 'list'
        ? { title: 'List Title', items: ['Item 1', 'Item 2'], bullet: '1' }
        : type === 'stack'
        ? { direction: 'column', gap: 2, children: [] }
        : type === 'paragraph'
        ? { text: '', children: [] }
        : { text: '' }),
    };
    const updated = [...blog.content, newBlock];
    setBlog({ ...blog, content: updated });
  };

  const addChild = (path, type) => {
    const updated = [...blog.content];
    const [parent, index] = getParentAndIndex(updated, path);
    const block = parent[index];
    if (!block.children) block.children = [];

    const newBlock = {
      type,
      ...(type === 'image' || type === 'video'
        ? { src: '', alt: '' }
        : type === 'math'
        ? { text: '\\( x + y = z \\)' }
        : type === 'list'
        ? { title: 'List Title', items: ['Item 1', 'Item 2'], bullet: '1' }
        : type === 'stack'
        ? { direction: 'column', gap: 2, children: [] }
        : type === 'paragraph'
        ? { text: '', children: [] }
        : { text: '' }),
    };

    block.children.push(newBlock);
    setBlog({ ...blog, content: updated });
  };

  const updateListItem = (path, itemIndex, value) => {
    const updated = [...blog.content];
    const [parent, index] = getParentAndIndex(updated, path);
    parent[index].items[itemIndex] = value;
    setBlog({ ...blog, content: updated });
  };
  
  const addListItem = (path) => {
    const updated = [...blog.content];
    const [parent, index] = getParentAndIndex(updated, path);
    parent[index].items.push('New Item');
    setBlog({ ...blog, content: updated });
  };
  
  const removeListItem = (path, itemIndex) => {
    const updated = [...blog.content];
    const [parent, index] = getParentAndIndex(updated, path);
    parent[index].items.splice(itemIndex, 1);
    setBlog({ ...blog, content: updated });
  };

  const getBlockId = (blockPath) => blockPath.join('-');
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    
    // Parse the IDs to get the paths
    const activePath = active.id.split('-').map(Number);
    const overPath = over.id.split('-').map(Number);
    
    // Check if we're moving within the same parent or between different parents
    const activeParentPath = activePath.slice(0, -1);
    const overParentPath = overPath.slice(0, -1);
    const sameParent = JSON.stringify(activeParentPath) === JSON.stringify(overParentPath);
    
    const updated = [...blog.content];
    
    if (sameParent) {
      // Moving within the same parent container
      const [parent, _] = getParentAndIndex(updated, activeParentPath);
      const activeIndex = activePath[activePath.length - 1];
      const overIndex = overPath[overPath.length - 1];
      
      // Reorder the array
      const [movedItem] = parent.splice(activeIndex, 1);
      parent.splice(overIndex, 0, movedItem);
    } else {
      // Moving between different parents
      const [activeParent, activeIndex] = getParentAndIndex(updated, activePath);
      const [overParent, overIndex] = getParentAndIndex(updated, overPath);
      
      // Extract the moved item
      const [movedItem] = activeParent.splice(activeIndex, 1);
      
      // Insert into the new parent
      overParent.splice(overIndex, 0, movedItem);
    }
    
    setBlog({ ...blog, content: updated });
  };

  const renderBlockUI = (block, index, path) => {
    const fullPath = [...path, index];
    const pathKey = fullPath.join('.');

    return (
      <Stack
        key={index}
        direction="column"
        spacing={2}
        alignItems="stretch"
        border="1px solid #ccc"
        p={2}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <SortableItem id={getBlockId(fullPath)}>
            <Typography fontWeight={600}>{block.type.toUpperCase()}</Typography>
          </SortableItem>
          <Stack direction="row" spacing={1}>
            {['paragraph', 'stack', 'formula'].includes(block.type) && (
              <IconButton size="small" onClick={(e) => {
                e.stopPropagation();
                setExpandedBlocks(prev => ({ ...prev, [pathKey]: !prev[pathKey] }))
              }}>
                {expandedBlocks[pathKey] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            )}
            <IconButton color="error" onClick={() => removeBlock(fullPath)}>
              <DeleteIcon />
            </IconButton>
            <IconButton
              size="small"
              onClick={() => {
                setTempProps(block.props || {});
                setPropsDialogPath(fullPath);
              }}
            >
              <SettingsIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>

        {/* RENDER BASED ON TYPE */}
        {block.type === 'paragraph' || block.type === 'heading' ? (
          <CustomInput
            multiline
            placeholder="Text"
            value={block.text || ''}
            setValue={(val) => updateBlock(fullPath, 'text', val)}
          />
        ) : block.type === 'math' ? (
          <Stack gap={3}>
            <Stack flex={1}>
              <CustomInput
                multiline
                placeholder="Text"
                value={block.text || ''}
                setValue={(val) => updateBlock(fullPath, 'text', val)}
              />
            </Stack>
            <Stack direction="row" spacing={2}>
              <Stack flex={1}>
                <Typography variant="caption">Direction</Typography>
                <SelectField
                  value={block.direction || 'column'}
                  setValue={(val) => updateBlock(fullPath, 'direction', val)}
                  choices={[
                    ["row", "Row (Horizontal)"],
                    ["column", "Column (Vertical)"]
                  ]}
                  fullWidth
                />
              </Stack>
              <Stack flex={1}>
                <Typography variant="caption">Gap</Typography>
                <CustomInputNumber
                  value={block.gap || 0}
                  setValue={(val) => updateBlock(fullPath, 'gap', val)}
                  fullWidth
                />
              </Stack>
              <Stack flex={1}>
                <Typography variant="caption">Justify</Typography>
                <SelectField
                  value={block.justify || 'normal'}
                  setValue={(val) => updateBlock(fullPath, 'justify', val)}
                  choices={[
                    ["normal", "Normal"],
                    ["center", "Center"],
                    ["flex-start", "Start"],
                    ["flex-end", "End"],
                    ["space-between", "Space Between"]
                  ]}
                  fullWidth
                />
              </Stack>
              <Stack flex={1}>
                <Typography variant="caption">Align</Typography>
                <SelectField
                  value={block.align || 'normal'}
                  setValue={(val) => updateBlock(fullPath, 'align', val)}
                  choices={[
                    ["normal", "Normal"],
                    ["center", "Center"],
                    ["flex-start", "Start"],
                    ["flex-end", "End"],
                    ["stretch", "Stretch"]
                  ]}
                  fullWidth
                />
              </Stack>
            </Stack>
          </Stack>
        ) : block.type === 'stack' ? (
          <Stack direction="row" spacing={2}>
            <Stack flex={1}>
              <Typography variant="caption">Direction</Typography>
              <SelectField
                value={block.direction || 'column'}
                setValue={(val) => updateBlock(fullPath, 'direction', val)}
                choices={[
                  ["row", "Row (Horizontal)"],
                  ["column", "Column (Vertical)"]
                ]}
                fullWidth
              />
            </Stack>
            <Stack flex={1}>
              <Typography variant="caption">Gap</Typography>
              <CustomInputNumber
                value={block.gap || 0}
                setValue={(val) => updateBlock(fullPath, 'gap', val)}
                fullWidth
              />
            </Stack>
            <Stack flex={1}>
              <Typography variant="caption">Justify</Typography>
              <SelectField
                value={block.justify || 'normal'}
                setValue={(val) => updateBlock(fullPath, 'justify', val)}
                choices={[
                  ["normal", "Normal"],
                  ["center", "Center"],
                  ["flex-start", "Start"],
                  ["flex-end", "End"],
                  ["space-between", "Space Between"]
                ]}
                fullWidth
              />
            </Stack>
            <Stack flex={1}>
              <Typography variant="caption">Align</Typography>
              <SelectField
                value={block.align || 'normal'}
                setValue={(val) => updateBlock(fullPath, 'align', val)}
                choices={[
                  ["normal", "Normal"],
                  ["center", "Center"],
                  ["flex-start", "Start"],
                  ["flex-end", "End"],
                  ["stretch", "Stretch"]
                ]}
                fullWidth
              />
            </Stack>
          </Stack>
        ) : block.type === 'formula' ? (
          <Stack direction="row" spacing={2}>
            <Stack flex={1}>
              <Typography variant="caption">Gap</Typography>
              <CustomInputNumber
                value={block.gap || 0}
                setValue={(val) => updateBlock(fullPath, 'gap', val)}
                fullWidth
              />
            </Stack>
          </Stack>
        ) : block.type === 'image' || block.type === 'video' ? (
          <>
            <CustomInput
              placeholder="Source URL"
              value={block.src || ''}
              setValue={(val) => updateBlock(fullPath, 'src', val)}
            />
            <CustomInput
              placeholder="Alt / Caption"
              value={block.alt || ''}
              setValue={(val) => updateBlock(fullPath, 'alt', val)}
            />
          </>
        ) : block.type === 'list' ? (
          <>
            <CustomInput
              placeholder="List Title"
              value={block.title || ''}
              setValue={(val) => updateBlock(fullPath, 'title', val)}
            />
            <CustomInput
              placeholder="Bullet (1, a, A, bullet, check)"
              value={block.bullet || ''}
              setValue={(val) => updateBlock(fullPath, 'bullet', val)}
            />
            <Stack spacing={1}>
              {block.items?.map((itm, i) => (
                <Stack direction="row" spacing={1} key={i}>
                  <CustomInput
                    value={itm}
                    setValue={(val) => updateListItem(fullPath, i, val)}
                  />
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => removeListItem(fullPath, i)}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Stack>
              ))}
              <Button onClick={() => addListItem(fullPath)} size="small">
                + Add Item
              </Button>
            </Stack>
          </>
        ) : null}

        {['paragraph', 'stack', 'formula'].includes(block.type) && (
          <Collapse in={expandedBlocks[pathKey]}>
            <Stack spacing={2} sx={{ pl: 2, borderLeft: '2px solid #ccc', mt: 2 }}>
              <Typography variant="subtitle2">Children</Typography>
              {block.children && block.children.length > 0 && (
                <DndContext
                  collisionDetection={closestCenter}
                  onDragEnd={handleDragEnd}
                >
                  <SortableContext
                    items={(block.children || []).map((_, childIndex) => 
                      getBlockId([...fullPath, childIndex])
                    )}
                    strategy={verticalListSortingStrategy}
                  >
                    <Stack spacing={2}>
                      {(block.children || []).map((childBlock, childIndex) => (
                        renderBlockUI(childBlock, childIndex, fullPath)
                      ))}
                    </Stack>
                  </SortableContext>
                </DndContext>
              )}
              <MenuButtons addBlock={(type) => addChild(fullPath, type)} />
            </Stack>
          </Collapse>
        )}
      </Stack>
    );
  };

  return (
    <>
      {path.length === 0 && <MenuButtons addBlock={addBlock} />}
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={blocks.map((_, i) => getBlockId([...path, i]))}
          strategy={verticalListSortingStrategy}
        >
          <Stack spacing={2}>
            {blocks.map((block, index) => (
              renderBlockUI(block, index, path)
            ))}
          </Stack>
        </SortableContext>
      </DndContext>
      {/* <Stack spacing={2}>
        {blocks.map((block, index) => renderBlockUI(block, index, path))}
      </Stack> */}

      <Dialog
          open={propsDialogPath !== null}
          onClose={() => setPropsDialogPath(null)}
          maxWidth="sm"
          fullWidth
      >
          <DialogTitle>Edit Block Props</DialogTitle>
          <DialogContent>
              <Stack gap={3} mt={1}>
                  <CustomInput
                      placeholder="CSS Class"
                      value={tempProps.className || ''}
                      setValue={(val) => setTempProps({ ...tempProps, className: val })}
                      fullWidth
                  />
                  <CustomInput
                      placeholder="Font Color"
                      value={tempProps.color || ''}
                      setValue={(val) => setTempProps({ ...tempProps, color: val })}
                      fullWidth
                  />
                  <CustomInput
                      placeholder="Background Color"
                      value={tempProps.backgroundColor || ''}
                      setValue={(val) => setTempProps({ ...tempProps, backgroundColor: val })}
                      fullWidth
                  />
                  <CustomInput
                      placeholder="Font Family"
                      value={tempProps.fontFamily || ''}
                      setValue={(val) => setTempProps({ ...tempProps, fontFamily: val })}
                      fullWidth
                  />
                  <SelectField
                      label="Font Weight"
                      value={tempProps.fontWeight || 400}
                      setValue={(val) => setTempProps({ ...tempProps, fontWeight: val })}
                      choices={[
                          [400, "Normal"],
                          [600, "Bold"],
                          [700, "Extra Bold"]
                      ]}
                      fullWidth
                  />
                  <SelectField
                      label="Text Align"
                      value={tempProps.textAlign || 'left'}
                      setValue={(val) => setTempProps({ ...tempProps, textAlign: val })}
                      choices={[
                          ['left', 'Left'],
                          ['center', 'Center'],
                          ['right', 'Right'],
                          ['justify', 'Justify']
                      ]}
                      fullWidth
                  />
              </Stack>
          </DialogContent>
          <DialogActions>
              <Button onClick={() => setPropsDialogPath(null)}>Cancel</Button>
              <Button
                  onClick={() => {
                      const updated = [...blog.content];
                      const [parent, index] = getParentAndIndex(updated, propsDialogPath);
                      parent[index].props = tempProps;
                      setBlog({ ...blog, content: updated });
                  }}
                  variant="contained"
              >
                  Save
              </Button>
          </DialogActions>
      </Dialog>
    </>
  );
}

export default function ClassicEditor() {
  const navigate = useNavigate();
  const [time, setTime] = useState(()=>loadBlog('editor')?.time.split(' ')[0]||'');
  const [timeUnit, setTimeUnit] = useState(()=>loadBlog('editor')?.time.split(' ')[1]||'min');
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
  const [importOpen, setImportOpen] = useState(false);
  const [importText, setImportText] = useState(JSON.stringify(blog, "", 4));


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

        <RenderBlock blog={blog} setBlog={setBlog} blocks={blog.content} />

        <Stack direction="row" spacing={2} justifyContent={'center'} alignItems={'center'}>
          <Tooltip title="Import JSON">
            <IconButton onClick={() => setImportOpen(true)} sx={{ border: '1px solid', borderRadius: '8px', padding: '8px' }} variant="outlined" component="span" color="secondary">
              <UploadIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Export as JSON">
            <IconButton 
              color="primary" 
              variant="outlined" 
              onClick={exportJSON}
              sx={{ border: '1px solid', borderRadius: '8px', padding: '8px' }}
            >
              <DownloadIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Preview JSON">
            <IconButton 
              color="primary" 
              variant="outlined" 
              onClick={() => setJsonDialogOpen(true)}
              sx={{ border: '1px solid', borderRadius: '8px', padding: '8px' }}
            >
              <JSONIcon />
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
              <WebIcon />
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
            <DownloadIcon fontSize="small" />
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
      <Dialog open={importOpen} onClose={() => setImportOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Paste JSON to Import</DialogTitle>
        <DialogContent>
          <TextField
            label="JSON Content"
            multiline
            minRows={8}
            fullWidth
            value={importText}
            onChange={(e) => setImportText(e.target.value)}
            placeholder='Paste your JSON here...'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setImportOpen(false)}>Cancel</Button>
          <Button
            onClick={() => {
              try {
                const parsed = JSON.parse(importText);
                if (
                  parsed &&
                  parsed.name &&
                  parsed.content &&
                  Array.isArray(parsed.content)
                ) {
                  setBlog(parsed);
                  localStorage.setItem('classic-editor-blog', JSON.stringify(parsed));
                  setImportOpen(false);
                  setImportText('');
                } else {
                  alert("Invalid JSON structure.");
                }
              } catch (err) {
                alert("Invalid JSON format.");
              }
            }}
            variant="contained"
          >
            Import
          </Button>
        </DialogActions>
      </Dialog>
    </Theme>
  );
}