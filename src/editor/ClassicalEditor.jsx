import React, { useState, useEffect, useMemo } from 'react';
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
import api from '../services/auth';

import SortableItem from './SortableItem';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

import { useNavigate, useSearchParams } from 'react-router-dom';
import CustomInput from '../form/CustomInput';
import CustomInputNumber from '../form/CustomInputNumber';
import CustomCheck from '../form/CustomCheck';
import SelectField from '../form/SelectField';
import { saveBlog, loadBlog, getParentAndIndex } from '../Utility';

import TextFieldsIcon from '@mui/icons-material/TextFields';
import FunctionsIcon from '@mui/icons-material/Functions';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import TitleIcon from '@mui/icons-material/Title';
import CalculateIcon from '@mui/icons-material/Calculate';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import JSONIcon from '@mui/icons-material/DataObject';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import TaskIcon from '@mui/icons-material/Task';
import TableIcon from '@mui/icons-material/TableView';
import NumberLineIcon from '@mui/icons-material/Commit';
import GraphIcon from '@mui/icons-material/AutoGraph';

import CopyIcon from '@mui/icons-material/ContentCopy';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import WebIcon from '@mui/icons-material/Web';
import DownloadIcon from '@mui/icons-material/Download';
import UploadIcon from '@mui/icons-material/Upload';
import PublishIcon from '@mui/icons-material/Publish';

export function MenuButtons({ addBlock }) {
  return (
      <Stack direction="row" justifyContent={'center'} alignItems={'center'} flexWrap={'nowrap'} spacing={2} sx={{overflowX:'auto'}}>
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

        <Tooltip title="Add Example">
          <IconButton 
            color="primary" 
            onClick={() => addBlock('example')}
            sx={{ border: '1px solid', borderRadius: '8px', padding: '8px' }}
          >
            <TaskIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Add Table">
          <IconButton 
            color="primary" 
            onClick={() => addBlock('table')}
            sx={{ border: '1px solid', borderRadius: '8px', padding: '8px' }}
          >
            <TableIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Add Number Line">
          <IconButton 
            color="primary" 
            onClick={() => addBlock('number_line')}
            sx={{ border: '1px solid', borderRadius: '8px', padding: '8px' }}
          >
            <NumberLineIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Add Function Graph">
          <IconButton 
            color="primary" 
            onClick={() => addBlock('func_graph')}
            sx={{ border: '1px solid', borderRadius: '8px', padding: '8px' }}
          >
            <GraphIcon />
          </IconButton>
        </Tooltip>
      </Stack>
  )
}

function RenderBlock({ path = [], setContent, content }) {
  const [expandedBlocks, setExpandedBlocks] = useState({});
  const [propsDialogPath, setPropsDialogPath] = useState(null);
  const [tempProps, setTempProps] = useState({});

  const defaultBlock = (type) => {
    return {
      type,
      ...(type === 'image' || type === 'video'
      ? { src: '', alt: '' }
      : type === 'math'
      ? { text: '\\[ {} \\]', justify: 'center' }
      : type === 'list'
      ? { title: '', items: ['Item 1', 'Item 2'], bullet: '1' }
      : type === 'stack'
      ? { direction: 'column', gap: 2, children: [] }
      : type === 'paragraph'
      ? { text: '', children: [] }
      : type === 'formula'
      ? { gap: 1, children: [] }
      : type === 'example'
      ? { title: 'Contoh #', equation: '\\[ {} \\]', children: [] }
      : type === 'table'
      ? { data: [] }
      : { text: '' }),
    }
  };

  const updateBlock = (path, field, value) => {
    const updated = [...content];
    const [parent, index] = getParentAndIndex(updated, path);
    parent[index][field] = value;
    setContent(updated);
  };
  const removeBlock = (path) => {
    const updated = [...content];
    const [parent, index] = getParentAndIndex(updated, path);
    parent.splice(index, 1);
    setContent(updated);
  };
  const addBlock = (type) => {
    const newBlock = defaultBlock(type)
    const updated = [...content, newBlock];
    setContent(updated);
  };
  const addChild = (path, type) => {
    const updated = [...content];
    const [parent, index] = getParentAndIndex(updated, path);
    const block = parent[index];
    if (!block.children) block.children = [];

    const newBlock = defaultBlock(type)
    block.children.push(newBlock);
    setContent(updated);
  };

  const updateListItem = (path, itemIndex, value) => {
    const updated = [...content];
    const [parent, index] = getParentAndIndex(updated, path);
    parent[index].items[itemIndex] = value;
    setContent(updated);
  };
  const addListItem = (path) => {
    const updated = [...content];
    const [parent, index] = getParentAndIndex(updated, path);
    parent[index].items.push('New Item');
    setContent(updated);
  };  
  const removeListItem = (path, itemIndex) => {
    const updated = [...content];
    const [parent, index] = getParentAndIndex(updated, path);
    parent[index].items.splice(itemIndex, 1);
    setContent(updated);
  };

  const addTableRow = (path) => {
    const updated = [...content];
    const [parent, index] = getParentAndIndex(updated, path);
    const table = parent[index];
    
    // Initialize table data if it doesn't exist
    if (!table.data || !Array.isArray(table.data) || table.data.length === 0) {
      table.data = [];
    }
    
    // Create a new row with the same number of columns as existing rows or default to 2
    const numCols = table.data[0]?.length || 2;
    const newRow = Array(numCols).fill().map(() => ({
      type: 'paragraph',
      text: '',
    }));
    
    table.data.push(newRow);
    setContent(updated);
  };
  const addTableColumn = (path) => {
    const updated = [...content];
    const [parent, index] = getParentAndIndex(updated, path);
    const table = parent[index];
    
    // Initialize table data if it doesn't exist
    if (!table.data || !Array.isArray(table.data) || table.data.length === 0) {
      table.data = [[], []]; // Start with two empty rows
    }
    
    // Add a new cell to each row
    table.data.forEach(row => {
      row.push({
        type: 'paragraph',
        text: '',
      });
    });
    
    setContent(updated);
  };
  const removeTableRow = (path, rowIndex) => {
    const updated = [...content];
    const [parent, index] = getParentAndIndex(updated, path);
    const table = parent[index];
    
    // Check if there's data and at least one row
    if (table.data && Array.isArray(table.data) && table.data.length > 1) {
      // Remove the row at the specified index
      table.data.splice(rowIndex, 1);
      setContent(updated);
    } else {
      // Don't remove the last row
      alert("Cannot remove the last row");
    }
  };
  const removeTableColumn = (path, colIndex) => {
    const updated = [...content];
    const [parent, index] = getParentAndIndex(updated, path);
    const table = parent[index];
    
    // Check if there's data and at least one column
    if (table.data && Array.isArray(table.data) && 
        table.data[0] && table.data[0].length > 1) {
      // Remove the column at the specified index from each row
      table.data.forEach(row => {
        row.splice(colIndex, 1);
      });
      setContent(updated);
    } else {
      // Don't remove the last column
      alert("Cannot remove the last column");
    }
  };
  const handleCellTextChange = (path, rowIndex, colIndex, val) => {
    const updated = [...content];
    const [parent, index] = getParentAndIndex(updated, path);
    const cell = parent[index].data[rowIndex][colIndex];
    
    // Check if the text contains a backslash and should be converted to math
    if (val.includes('\\') && cell.type !== 'math') {
      // Convert the cell to math type
      parent[index].data[rowIndex][colIndex] = {
        type: 'math',
        text: val,
      };
    } else {
      // Just update the text
      cell.text = val;
    }
    
    setContent(updated);
  };
  const toggleCellType = (path, rowIndex, colIndex) => {
    const updated = [...content];
    const [parent, index] = getParentAndIndex(updated, path);
    const cell = parent[index].data[rowIndex][colIndex];
    
    if (cell.type === 'paragraph') {
      if (String(cell.text).startsWith('\\(') && String(cell.text).endsWith('\\)')) {
        parent[index].data[rowIndex][colIndex] = {
          type: 'math',
          text: cell.text || '\\( {} \\)',
          justify: 'center',
        };
      } else {
        parent[index].data[rowIndex][colIndex] = {
          type: 'math',
          text: `\\( ${cell.text} \\)` || '\\( {} \\)',
          justify: 'center',
        };
      }
    } else if (cell.type === 'math') {
      parent[index].data[rowIndex][colIndex] = {
        type: 'paragraph',
        text: cell.text || '',
      };
    }
    
    setContent(updated);
  };

  const getBlockId = (blockPath) => `block-${blockPath.join('-')}`;
  const parseBlockId = (id) => {
    return id.replace('block-', '').split('-').map(Number);
  };
  const getBlockAtPath = (content, path) => {
    let current = content;
    let parent = null;
    let index = null;
    
    for (let i = 0; i < path.length; i++) {
      const idx = path[i];
      if (i === path.length - 1) {
        parent = current;
        index = idx;
      } else {
        current = current[idx].children || [];
      }
    }
    
    return { parent, index };
  };
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    
    // Parse the IDs to get the paths
    const activePath = parseBlockId(active.id);
    const overPath = parseBlockId(over.id);
    
    // Create a deep copy of the content
    const updated = JSON.parse(JSON.stringify(content, null, 4));
    
    // Get parent and index for the active item
    const { parent: activeParent, index: activeIndex } = getBlockAtPath(updated, activePath);
    if (!activeParent) return;
    
    // Get parent and index for the over item
    const { parent: overParent, index: overIndex } = getBlockAtPath(updated, overPath);
    if (!overParent) return;
    
    // Check if we're moving within the same parent or between different parents
    const sameParent = activeParent === overParent;
    
    if (sameParent) {
      // Reorder within the same parent
      const [movedItem] = activeParent.splice(activeIndex, 1);
      activeParent.splice(overIndex, 0, movedItem);
    } else {
      // For this simplified version, we'll only allow dragging within the same parent level
      // You could implement cross-parent movement if needed
      console.warn("Cross-parent dragging is not supported in this implementation");
      return;
    }
    
    setContent(updated);
  };
  const renderChildrenDnd = (children, parentPath) => {
    if (!children || children.length === 0) return null;
    
    return (
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={children.map((_, childIndex) => 
            getBlockId([...parentPath, childIndex])
          )}
          strategy={verticalListSortingStrategy}
        >
          <Stack spacing={2}>
            {children.map((childBlock, childIndex) => (
              renderBlockUI(childBlock, childIndex, parentPath)
            ))}
          </Stack>
        </SortableContext>
      </DndContext>
    );
  };

  const renderBlockUI = (block, index, path) => {
    const fullPath = [...path, index];
    const pathKey = fullPath.join('.');
    const nestedBlocks = ['paragraph', 'stack', 'formula', 'example'];

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
            {nestedBlocks.includes(block.type) && (
              <IconButton size="small" onClick={() => setExpandedBlocks(prev => ({ ...prev, [pathKey]: !prev[pathKey] }))}>
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
                  decimal
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
                decimal
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
                decimal
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
                  <Stack flex={1}>
                    <CustomInput
                      value={itm}
                      setValue={(val) => updateListItem(fullPath, i, val)}
                      fullWidth
                    />
                  </Stack>
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
        ) : block.type === "example" ? (
          <Stack gap={3}>
            <Stack flex={1}>
              <CustomInput
                multiline
                placeholder="Title"
                value={block.title || ''}
                setValue={(val) => updateBlock(fullPath, 'title', val)}
              />
            </Stack>
            <Stack flex={1}>
              <CustomInput
                multiline
                placeholder="Equation"
                value={block.equation || ''}
                setValue={(val) => updateBlock(fullPath, 'equation', val)}
              />
            </Stack>
            <Stack flex={1}>
              <CustomInput
                multiline
                placeholder="Instruction"
                value={block.instruction || ''}
                setValue={(val) => updateBlock(fullPath, 'instruction', val)}
              />
            </Stack>
            <Stack flex={1}>
              <CustomInput
                multiline
                placeholder="Note"
                value={block.note || ''}
                setValue={(val) => updateBlock(fullPath, 'note', val)}
              />
            </Stack>
            <Stack flex={1}>
              <CustomInput
                multiline
                placeholder="Accordion Text"
                value={block.accordion_text || ''}
                setValue={(val) => updateBlock(fullPath, 'accordion_text', val)}
              />
            </Stack>
            <Collapse in={expandedBlocks[fullPath]}>
              <Stack spacing={2} sx={{ pl: 2, borderLeft: '2px solid #ccc', mt: 2 }}>
                <Typography variant="subtitle2">Options</Typography>
                <Stack gap={3}>
                  {(block.option?.items || []).map((item, idx) => (
                    <Stack key={idx} direction="row" spacing={1} alignItems="center">
                      <Stack flex={1}>
                        <CustomInput
                          fullWidth
                          placeholder={`Option ${idx + 1}`}
                          value={item}
                          setValue={(val) => {
                            const newOptions = [...(block.option?.items || [])];
                            newOptions[idx] = val;
                            updateBlock(fullPath, 'option', {
                              ...(block.option || { bullet: "1", items: [] }),
                              items: newOptions,
                            });
                          }}
                        />
                      </Stack>
                      <IconButton
                        size="small"
                        color="error"
                        onClick={() => {
                          const newOptions = [...(block.option?.items || [])];
                          newOptions.splice(idx, 1);
                          updateBlock(fullPath, 'option', {
                            ...(block.option || { bullet: "1", items: [] }),
                            items: newOptions,
                          });
                        }}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Stack>
                  ))}
                </Stack>

                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => {
                    const newOptions = [...(block.option?.items || [])];
                    newOptions.push("New Option");
                    updateBlock(fullPath, 'option', {
                      ...(block.option || { bullet: "1", items: [] }),
                      items: newOptions,
                    });
                  }}
                >
                  + Add Option
                </Button>

                <Stack flex={1} mt={2}>
                  <CustomInput
                    placeholder="Bullet Type (1, a, A, bullet, check)"
                    value={block.option?.bullet || ''}
                    setValue={(val) => {
                      updateBlock(fullPath, 'option', {
                        ...(block.option || { items: [] }),
                        bullet: val,
                      });
                    }}
                  />
                </Stack>

                <Stack flex={1} mt={2}>
                  <CustomInput
                    placeholder="Color"
                    value={block.option?.color || ''}
                    setValue={(val) => {
                      updateBlock(fullPath, 'option', {
                        ...(block.option || { items: [] }),
                        color: val,
                      });
                    }}
                  />
                </Stack>
              </Stack>
            </Collapse>
            <Stack direction="row" justifyContent="flex-end">
                <Button
                    size="small"
                    onClick={() => setExpandedBlocks(prev => ({ ...prev, [pathKey]: !prev[pathKey] }))}
                    startIcon={expandedBlocks[fullPath] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                >
                    {expandedBlocks[fullPath] ? "Hide Options" : "Show Options"}
                </Button>
            </Stack>
          </Stack>
        ) : block.type === "table" ? (
          <Stack spacing={2}>
            {/* Table header with column remove buttons */}
            {block.data && block.data[0] && (
              <Stack direction="row" spacing={1}>
                <Box width={24}></Box> {/* Space for row buttons */}
                {block.data[0].map((_, colIndex) => (
                  <Box key={colIndex} flex={1} textAlign="center">
                    <IconButton 
                      size="small" 
                      color="error" 
                      onClick={() => removeTableColumn(fullPath, colIndex)}
                      disabled={block.data[0].length <= 1}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Box>
                ))}
              </Stack>
            )}
            
            {/* Table rows */}
            {(block.data || []).map((row, rowIndex) => (
              <Stack key={rowIndex} direction="row" spacing={1} alignItems="center">
                {/* Row remove button */}
                <Box>
                  <IconButton 
                    size="small" 
                    color="error" 
                    onClick={() => removeTableRow(fullPath, rowIndex)}
                    disabled={block.data.length <= 1}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
                
                {/* Row cells */}
                {row.map((cell, colIndex) => (
                  <Box key={colIndex} border="1px solid #ccc" p={1} flex={1} minWidth={100}>
                    <Stack spacing={1}>
                      {/* Cell type indicator and toggle button */}
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography variant="caption" color="textSecondary">
                          {cell.type === 'math' ? 'Math' : 'Text'}
                        </Typography>
                        <IconButton 
                          size="small" 
                          onClick={() => toggleCellType(fullPath, rowIndex, colIndex)}
                        >
                          {cell.type === 'math' ? 
                            <FunctionsIcon fontSize="small" /> : 
                            <TextFieldsIcon fontSize="small" />
                          }
                        </IconButton>
                      </Stack>
                      
                      {/* Cell content input */}
                      <CustomInput
                        multiline
                        placeholder={cell.type === 'math' ? "Math expression" : "Cell text"}
                        value={cell.text || ''}
                        setValue={(val) => handleCellTextChange(fullPath, rowIndex, colIndex, val)}
                      />
                    </Stack>
                  </Box>
                ))}
              </Stack>
            ))}
            
            {/* Add row/column buttons */}
            <Stack direction="row" spacing={1}>
              <Button onClick={() => addTableRow(fullPath)}>+ Add Row</Button>
              <Button onClick={() => addTableColumn(fullPath)}>+ Add Column</Button>
            </Stack>
          </Stack>
        ) : block.type === 'number_line' ? (
          <>
            {/* Dots Editor */}
            <Stack gap={3}>
                {block.dots?.map((itm, i) => (
                    <Stack direction="row" spacing={1} key={i} alignItems="center">
                        <Stack flex={1}>
                            <CustomInput
                                placeholder="Position (x)"
                                value={itm[0]}
                                setValue={(val) => {
                                    const updatedDots = [...block.dots];
                                    updatedDots[i][0] = Number(val);
                                    updateBlock(fullPath, 'dots', updatedDots);
                                }}
                                fullWidth
                            />
                        </Stack>
                        <CustomCheck
                            label="Filled"
                            val={itm[1]}
                            setVal={(val) => {
                                const updatedDots = [...block.dots];
                                console.log(val);
                                updatedDots[i][1] = val;
                                updateBlock(fullPath, 'dots', updatedDots);
                            }}
                        />
                        <IconButton
                            size="small"
                            color="error"
                            onClick={() => {
                                const updatedDots = [...block.dots];
                                updatedDots.splice(i, 1);
                                updateBlock(fullPath, 'dots', updatedDots);
                            }}
                        >
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                    </Stack>
                ))}
                <Button
                    onClick={() => {
                        const updatedDots = [...(block.dots || [])];
                        updatedDots.push([0, true]); // default new dot
                        updateBlock(fullPath, 'dots', updatedDots);
                    }}
                    size="small"
                    variant="outlined"
                >
                    + Add Dot
                </Button>
            </Stack>

            {/* Signs Editor */}
            <CustomInput 
                placeholder="Signs"
                value={(block.signs || []).join(', ')}
                setValue={(val) => {
                    const signsArray = val.split(',').map(s => s.trim());
                    updateBlock(fullPath, 'signs', signsArray);
                }}
                fullWidth
                sx={{ mt: 2 }}
            />
          </>
        ) : block.type === 'func_graph' ? (
          <>
            <Stack gap={3}>
              <CustomInput 
                  placeholder="Domain"
                  value={(block.x || []).join(', ')}
                  setValue={(val) => {
                      const xArray = val.split(',').map(s => parseFloat(s.trim()));
                      updateBlock(fullPath, 'x', xArray);
                  }}
                  fullWidth
                  sx={{ mt: 2 }}
              />
              <CustomInput
                  multiline
                  placeholder="Function"
                  value={block.fn || ''}
                  setValue={(val) => updateBlock(fullPath, 'fn', val)}
              />
              <CustomInputNumber
                  placeholder="Height"
                  value={block.height || 0}
                  decimal
                  setValue={(val) => updateBlock(fullPath, 'height', parseFloat(val))}
                  fullWidth
              />
            </Stack>
          </>
        ) : null}

        {nestedBlocks.includes(block.type) && (
          <Collapse in={expandedBlocks[pathKey]}>
            <Stack spacing={2} sx={{ pl: 2, borderLeft: '2px solid #ccc', mt: 2 }}>
              <Typography variant="subtitle2">Children</Typography>
              {block.children && block.children.length > 0 && renderChildrenDnd(block.children, fullPath)}
              <MenuButtons addBlock={(type) => addChild(fullPath, type)} />
            </Stack>
          </Collapse>
        )}
      </Stack>
    );
  };

  return (
    <>
      <Stack position={'sticky'} top={0} py={3} zIndex={10} backgroundColor={"#fff"}>
        {path.length === 0 && <MenuButtons addBlock={addBlock} />}
      </Stack>
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={content.map((_, i) => getBlockId([...path, i]))}
          strategy={verticalListSortingStrategy}
        >
          <Stack spacing={2}>
            {content.map((block, index) => (
              renderBlockUI(block, index, path)
            ))}
          </Stack>
        </SortableContext>
      </DndContext>

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
                  <Stack direction={"row"} gap={2}>
                    <Stack width={"50%"}>
                      <CustomInputNumber
                          placeholder="Margin"
                          value={tempProps.margin || ''}
                          setValue={(val) => setTempProps({ ...tempProps, margin: val })}
                          fullWidth
                          decimal
                      />
                    </Stack>
                    <Stack width={"50%"}>
                      <CustomInputNumber
                          placeholder="Padding"
                          value={tempProps.padding || ''}
                          setValue={(val) => setTempProps({ ...tempProps, padding: val })}
                          fullWidth
                          decimal
                      />
                    </Stack>
                  </Stack>
                  <Stack direction={"row"} gap={2}>
                    <Stack width={"50%"}>
                      <CustomInput
                          placeholder="Width"
                          value={tempProps.width || ''}
                          setValue={(val) => setTempProps({ ...tempProps, width: val })}
                          fullWidth
                      />
                    </Stack>
                    <Stack width={"50%"}>
                      <CustomInput
                          placeholder="Height"
                          value={tempProps.height || ''}
                          setValue={(val) => setTempProps({ ...tempProps, height: val })}
                          fullWidth
                      />
                    </Stack>
                  </Stack>
                  <Stack direction={"row"} gap={2}>
                    <Stack width={"50%"}>
                      <CustomInput
                          placeholder="Font Color"
                          value={tempProps.color || ''}
                          setValue={(val) => setTempProps({ ...tempProps, color: val })}
                          fullWidth
                      />
                    </Stack>
                    <Stack width={"50%"}>
                      <CustomInput
                          placeholder="Background Color"
                          value={tempProps.backgroundColor || ''}
                          setValue={(val) => setTempProps({ ...tempProps, backgroundColor: val })}
                          fullWidth
                      />
                    </Stack>
                  </Stack>
                  <Stack direction={"row"} gap={2}>
                    <Stack direction={"row"} gap={2} width={"75%"}>
                      <Stack width={"50%"}>
                        <CustomInput
                            placeholder="Border Color"
                            value={tempProps.borderColor || ''}
                            setValue={(val) => setTempProps({ ...tempProps, borderColor: val })}
                            fullWidth
                        />
                      </Stack>
                      <Stack width={"50%"}>
                        <CustomInput
                            placeholder="Border Width"
                            value={tempProps.borderWidth || ''}
                            setValue={(val) => setTempProps({ ...tempProps, borderWidth: val })}
                            fullWidth
                        />
                      </Stack>
                    </Stack>
                      <Stack width={"25%"}>
                        <SelectField
                            label="Border Style"
                            value={tempProps.borderStyle || 'solid'}
                            setValue={(val) => setTempProps({ ...tempProps, borderStyle: val })}
                            choices={[
                                ['solid', 'Solid'],
                                ['dashed', 'Dashed'],
                                ['dotted', 'Dotted'],
                                ['double', 'Double'],
                                ['groove', 'Groove'],
                                ['ridge', 'Ridge'],
                                ['inset', 'Inset'],
                                ['outset', 'Outset']
                            ]}
                        />
                      </Stack>
                  </Stack>
                  <CustomInput
                      placeholder="Font Family"
                      value={tempProps.fontFamily || ''}
                      setValue={(val) => setTempProps({ ...tempProps, fontFamily: val })}
                      fullWidth
                  />
                  <CustomInput
                      placeholder="Text Decoration"
                      value={tempProps.textDecoration || ''}
                      setValue={(val) => setTempProps({ ...tempProps, textDecoration: val })}
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
                  <SelectField
                      label="Font Style"
                      value={tempProps.fontStyle || 'normal'}
                      setValue={(val) => setTempProps({ ...tempProps, fontStyle: val })}
                      choices={[
                          ['normal', 'Normal'],
                          ['italic', 'Italic'],
                          ['oblique', 'Oblique']
                      ]}
                      fullWidth
                  />
              </Stack>
          </DialogContent>
          <DialogActions>
              <Button onClick={() => setPropsDialogPath(null)}>Cancel</Button>
              <Button
                  onClick={() => {
                      const updated = [...content];
                      const [parent, index] = getParentAndIndex(updated, propsDialogPath);
                      parent[index].props = tempProps;
                      setContent(updated);
                      setPropsDialogPath(null);
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

export const MemoizedRenderBlock = React.memo(RenderBlock);

export default function ClassicEditor() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [uuid, setUuid] = useState('');
  const [course, setCourse] = useState(() => loadBlog('editor')?.course || {});

  const [time, setTime] = useState(()=>loadBlog('editor')?.time.split(' ')[0]||'');
  const [timeUnit, setTimeUnit] = useState(()=>loadBlog('editor')?.time.split(' ')[1]||'min');
  const [content, setContent] = useState(() => loadBlog('editor')?.content || []);
  const [meta, setMeta] = useState(() => {
    const loaded = loadBlog('editor') || {};
    return {
      name: loaded.name || '',
      url: loaded.url || '',
      unit: loaded.unit || '',
      subunit: loaded.subunit || '',
      time: loaded.time || '0 min'
    };
  });
  const [jsonDialogOpen, setJsonDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [importOpen, setImportOpen] = useState(false);
  const [importText, setImportText] = useState("");

  // 💾 Save to localStorage on change
  useEffect(() => {
    setMeta(prev => ({
      ...prev,
      time: `${time} ${timeUnit}`,
    }));
  }, [time, timeUnit]);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      saveBlog('editor', { ...meta, content, uuid, course });
    }, 500);
  
    return () => clearTimeout(handler);
  }, [content, meta]);

  // ⬇ Export to JSON
  const exportJSON = () => {
    const json = JSON.stringify({ ...meta, content }, null, 4);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${meta.title || 'untitled'}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handlePreview = () => {
    navigate('/preview');
  };

  useEffect(()=>{
    const url = searchParams.get('url') || '';
    setUuid('');
    setCourse('');
    if (url) {
      api.get(`/course/details/url/${url}`).then(res => {
        if (res.data) {
          setMeta({
            name: res.data.name,
            url: res.data.url,
            unit: res.data.unit,
            subunit: res.data.subunit,
            time: res.data.time || '0 min',
          });
          setContent(res.data.content || []);
          setUuid(res.data.id || '');
          setCourse(res.data.course || {});
        }
      }).catch(err => {
        console.error("Failed to load blog data:", err);
      });
    }
  }, []);

  function handleSubmit() {
    const formData = new FormData();
    formData.append('course', course);
    formData.append('name', meta.name);
    formData.append('url', meta.url);
    formData.append('unit', meta.unit);
    formData.append('subunit', meta.subunit);
    formData.append('time', meta.time);
    formData.append('content', JSON.stringify(content));

    if (uuid) {
      api.put(`/course/${course}/details/${uuid}/`, formData)
    } else {
      api.post(`/course/${course}/details/`, formData)
    }
  }

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
              <Typography>Course</Typography>
              <CustomInput
                  type='text'
                  palette='#abcdef'
                  required
                  name='course'
                  value={course}
                  setValue={(val) => setCourse(val)}
              />
          </Stack>
          <Stack width={'80%'}>
              <Typography>Blog Name</Typography>
              <CustomInput
                  type='text'
                  palette='primary'
                  useThemeColor={true}
                  required
                  name='blog_name'
                  value={meta.name}
                  setValue={(val) => setMeta({ ...meta, name: val })}
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
                  value={meta.url}
                  setValue={(val) => setMeta({ ...meta, url: val })}
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
                  value={meta.unit}
                  setValue={(val) => setMeta({ ...meta, unit: val })}
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
                  value={meta.subunit}
                  setValue={(val) => setMeta({ ...meta, subunit: val })}
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

        <MemoizedRenderBlock content={content} setContent={setContent} />

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
          <Tooltip title="Submit">
            <IconButton 
              color="primary" 
              variant="outlined" 
              onClick={() => handleSubmit()}
              sx={{ border: '1px solid', borderRadius: '8px', padding: '8px' }}
            >
              <PublishIcon />
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
              navigator.clipboard.writeText(JSON.stringify({...meta, content}, null, 4));
              setSnackbarOpen(true);
            }}
          >
            <CopyIcon fontSize="small" />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <TextField
            multiline
            fullWidth
            minRows={15}
            value={JSON.stringify({...meta, content}, null, 4)}
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
                            typeof parsed === "object" &&
                            parsed.name &&
                            parsed.content &&
                            Array.isArray(parsed.content)
                        ) {
                            const { name, url, unit, subunit, time, content } = parsed;

                            setMeta({ name, url, unit, subunit, time });
                            setContent(content);

                            localStorage.setItem('editor', JSON.stringify(parsed));
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