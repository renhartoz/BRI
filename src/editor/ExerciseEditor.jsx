import React, { useState, useEffect } from "react";
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
import { MathJaxContext } from "better-react-mathjax";
import Problem from "../maths/Problem";
import Theme from "../components/Theme";
import { saveBlog, loadBlog } from '../Utility';
import { useNavigate } from "react-router-dom";
import { MemoizedRenderBlock } from "./ClassicalEditor";

import JSONIcon from '@mui/icons-material/DataObject';
import CopyIcon from '@mui/icons-material/ContentCopy';
import WebIcon from '@mui/icons-material/Web';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ExerciseEditor() {
    const navigate = useNavigate();
    const [title, setTitle] = useState(() => loadBlog('exercise-editor')?.content[0].title || '');
    const [problem, setProblem] = useState(() => loadBlog('exercise-editor')?.content[0].equation || []);
    const [solution, setSolution] = useState(() => loadBlog('exercise-editor')?.content[0].children || []);
    const [options, setOptions] = useState(() => loadBlog('exercise-editor')?.content[0].option || {});
    const [accordionText, setAccordionText] = useState(() => loadBlog('exercise-editor')?.content[0].accordion_text || 'Pembahasan');
    const [meta, setMeta] = useState(() => {
        const loaded = loadBlog('exercise-editor') || {};
        return {
            id: loaded.id || '',
            unit: loaded.unit || '',
            subunit: loaded.subunit || '',
            time: loaded.time || '0 min'
        };
    });
    const [jsonDialogOpen, setJsonDialogOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const jsonData = { ...meta, "content":[{"type": "example", "accordion_text": accordionText, "title": title, "equation": problem, "children": solution, "option": options }] };

    useEffect(() => {
        const handler = setTimeout(() => {
            saveBlog('exercise-editor', jsonData);
        }, 500);
        return () => clearTimeout(handler);
    }, [meta, title, problem, solution, options, accordionText]);
    
    const exportJSON = () => {
        const json = JSON.stringify(jsonData, null, 4);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${`${meta.unit}_exercise` || 'untitled'}.json`;
        a.click();
        URL.revokeObjectURL(url);
    };
    
    const handlePreview = () => {
        navigate('/exercise-preview');
    };

    return (
        <Theme>
            <MathJaxContext>
                <Stack justifyContent={"center"} alignItems={"center"} p={2}>
                    <Typography component={"div"}>
                        Problem #
                        <TextField
                            placeholder="ID"
                            variant="outlined"
                            value={meta.id}
                            onChange={(e) => {
                                setMeta((prev) => ({
                                    ...prev,
                                    id: e.target.value,
                                }));
                            }}
                            sx={{
                                "& .MuiOutlinedInput-input":{
                                    padding: 0,
                                    width: 50,
                                    minWidth: 0,
                                    color: "#000",
                                    fontWeight: "normal",
                                    textAlign: "center",
                                },
                                "& .MuiOutlinedInput-root": {
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#000",
                                    },
                                    "&.Mui-focused": {
                                        "& .MuiOutlinedInput-notchedOutline":
                                            {
                                                borderColor: "primary.main",
                                                borderWidth: "3px",
                                            },
                                    },
                                    "&:hover:not(.Mui-focused)": {
                                        "& .MuiOutlinedInput-notchedOutline":
                                            {
                                                borderColor: "#000",
                                            },
                                    },
                                },
                                "& .MuiInputLabel-outlined": {
                                    color: "#555",
                                    fontWeight: "normal",
                                    "&.Mui-focused": {
                                        color: "primary.main",
                                        fontWeight: "normal",
                                    },
                                },
                                "& .MuiInputBase-input::placeholder": {
                                    opacity: 1,
                                },
                            }}
                        />
                    </Typography>
                </Stack>
                <Stack
                    px={{ xs: 5, sm: 8, md: 10 }}
                    py={4}
                    gap={3}
                    sx={{ backgroundColor: "#fff" }}
                >
                    <Stack gap={2} direction={"column"}>
                        <Stack gap={1}>
                            <TextField
                                placeholder="Unit"
                                variant="outlined"
                                value={meta.unit}
                                onChange={(e) => {
                                    setMeta((prev) => ({
                                        ...prev,
                                        unit: e.target.value,
                                    }));
                                }}
                                sx={{
                                    "& .MuiOutlinedInput-input":{
                                        padding: 0,
                                        textTransform: "uppercase",
                                        fontSize: "0.875rem",
                                        color: "#555",
                                        fontWeight: "normal",
                                    },
                                    "& .MuiOutlinedInput-root": {
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "transparent",
                                        },
                                        "&.Mui-focused": {
                                            "& .MuiOutlinedInput-notchedOutline":
                                                {
                                                    borderColor: "primary.main",
                                                    borderWidth: "3px",
                                                },
                                        },
                                        "&:hover:not(.Mui-focused)": {
                                            "& .MuiOutlinedInput-notchedOutline":
                                                {
                                                    borderColor: "#000",
                                                },
                                        },
                                    },
                                    "& .MuiInputLabel-outlined": {
                                        color: "#555",
                                        fontWeight: "normal",
                                        "&.Mui-focused": {
                                            color: "primary.main",
                                            fontWeight: "normal",
                                        },
                                    },
                                    "& .MuiInputBase-input::placeholder": {
                                        opacity: 1,
                                    },
                                }}
                            />
                            <TextField
                                placeholder="Subunit"
                                variant="outlined"
                                value={meta.subunit}
                                onChange={(e) => {
                                    setMeta((prev) => ({
                                        ...prev,
                                        subunit: e.target.value,
                                    }));
                                }}
                                sx={{
                                    "& .MuiOutlinedInput-input":{
                                        padding: 0,
                                    },
                                    "& .MuiOutlinedInput-root": {
                                        color: "#000",
                                        fontWeight: "700",
                                        fontSize: "1.5rem",
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "transparent",
                                        },
                                        "&.Mui-focused": {
                                            "& .MuiOutlinedInput-notchedOutline":
                                                {
                                                    borderColor: "primary.main",
                                                    borderWidth: "3px",
                                                },
                                        },
                                        "&:hover:not(.Mui-focused)": {
                                            "& .MuiOutlinedInput-notchedOutline":
                                                {
                                                    borderColor: "#000",
                                                },
                                        },
                                    },
                                    "& .MuiInputLabel-outlined": {
                                        color: "#000",
                                        fontWeight: "700",
                                        "&.Mui-focused": {
                                            color: "primary.main",
                                            fontWeight: "700",
                                        },
                                    },
                                    "& .MuiInputBase-input::placeholder": {
                                        opacity: 1,
                                    },
                                }}
                            />
                        </Stack>
                        <TextField
                            placeholder="X min"
                            variant="outlined"
                            value={meta.time}
                            onChange={(e) => {
                                setMeta((prev) => ({
                                    ...prev,
                                    time: e.target.value,
                                }));
                            }}
                            sx={{
                                width: "150px",
                                "& .MuiOutlinedInput-input":{
                                    padding: 0,
                                },
                                "& .MuiOutlinedInput-root": {
                                    color: "#555",
                                    fontWeight: "normal",
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "transparent",
                                    },
                                    "&.Mui-focused": {
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "primary.main",
                                            borderWidth: "3px",
                                        },
                                    },
                                    "&:hover:not(.Mui-focused)": {
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "#000",
                                        },
                                    },
                                },
                                "& .MuiInputLabel-outlined": {
                                    color: "#555",
                                    fontWeight: "normal",
                                    "&.Mui-focused": {
                                        color: "primary.main",
                                        fontWeight: "normal",
                                    },
                                },
                                "& .MuiInputBase-input::placeholder": {
                                    color:"#555",
                                    opacity: 1,
                                },
                            }}
                        />
                    </Stack>
                    <hr />  
                    <Problem
                        title={
                            <TextField
                                placeholder="Problem Title"
                                variant="outlined"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                sx={{
                                    width: "100%",
                                    "& .MuiOutlinedInput-input":{
                                        padding: 0,
                                        fontSize: "1.2rem",
                                        color: "#000",
                                    },
                                    "& .MuiOutlinedInput-root": {
                                        fontWeight: "600",
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "transparent",
                                        },
                                        "&.Mui-focused": {
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "primary.main",
                                                borderWidth: "3px",
                                            },
                                        },
                                        "&:hover:not(.Mui-focused)": {
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "#000",
                                            },
                                        },
                                    },
                                    "& .MuiInputBase-input::placeholder": {
                                        opacity: 1,
                                    },
                                }}
                            />
                        }
                        equation={
                            <MemoizedRenderBlock content={problem} setContent={setProblem} />
                        }
                        note={
                            <Stack gap={2}>
                                <Typography variant="subtitle2">Options</Typography>
                                <Stack gap={3}>
                                    {(options?.items || []).map((item, idx) => (
                                        <Stack key={idx} direction="row" spacing={1} alignItems="center">
                                            <Stack flex={1}>
                                                <TextField
                                                    variant="outlined"
                                                    fullWidth
                                                    placeholder={`Option ${idx + 1}`}
                                                    value={item}
                                                    onChange={(val) => {
                                                        // update option
                                                        const newOptions = [...(options?.items || [])];
                                                        newOptions[idx] = val.target.value;
                                                        setOptions({
                                                            ...options,
                                                            items: newOptions,
                                                        });
                                                    }}
                                                />
                                            </Stack>
                                            <IconButton
                                                size="small"
                                                color="error"
                                                onClick={() => {
                                                    // delete option
                                                    const newOptions = [...(options?.items || [])];
                                                    newOptions.splice(idx, 1);
                                                    setOptions({
                                                        ...options,
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
                                        // add option
                                        const newOptions = [...(options?.items || [])];
                                        newOptions.push('');
                                        setOptions({
                                            ...options,
                                            items: newOptions,
                                        });
                                    }}
                                >
                                    + Add Option
                                </Button>
                
                                <Stack flex={1} mt={2}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        placeholder="Bullet Type (1, a, A, bullet, check)"
                                        value={options?.bullet || ''}
                                        onChange={(val) => {
                                            // bullet type
                                            setOptions({
                                                ...options,
                                                bullet: val.target.value,
                                            });
                                        }}
                                    />
                                </Stack>
                
                                <Stack flex={1} mt={2}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        placeholder="Color"
                                        value={options?.color || ''}
                                        onChange={(val) => {
                                            // color
                                            setOptions({
                                                ...options,
                                                color: val.target.value,
                                            });
                                        }}
                                    />
                                </Stack>
                            </Stack>
                        }
                        accordion_text={
                            <TextField
                                value={accordionText}
                                onChange={(e) => setAccordionText(e.target.value)}
                                placeholder="Accordion Text"
                                sx={{
                                    width: "100%",
                                    "& .MuiOutlinedInput-input":{
                                        padding: 0,
                                        color: "kurai_ao.main",
                                    },
                                    "& .MuiOutlinedInput-root": {
                                        fontWeight: "600",
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "transparent",
                                        },
                                        "&.Mui-focused": {
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "primary.main",
                                                borderWidth: "3px",
                                            },
                                        },
                                        "&:hover:not(.Mui-focused)": {
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "#000",
                                            },
                                        },
                                    },
                                    "& .MuiInputBase-input::placeholder": {
                                        opacity: 1,
                                    },
                                }}
                            />
                        }
                    >
                        <Stack gap={2}>
                            <MemoizedRenderBlock content={solution} setContent={setSolution} />
                        </Stack>
                    </Problem>
                    <Stack direction="row" spacing={2} justifyContent={'center'} alignItems={'center'}>
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
                            navigator.clipboard.writeText(JSON.stringify(jsonData, null, 4));
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
                            value={JSON.stringify(jsonData, null, 4)}
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
            </MathJaxContext>
        </Theme>
    );
}
