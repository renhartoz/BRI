import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from 'react-router-dom';
import api from "../services/auth";
import Theme from "../components/Theme";

import { Stack, Typography, TextField, Container, Divider, InputAdornment, Button, IconButton, Grid2, Chip, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import CourseCard from "../components/Card";
import SyllabusTemplate from "./SyllabusTemplate";
import ImageUpload from "../components/ImageUpload";
import CustomCheck from "../form/CustomCheck";
import Dropdown from "../form/Dropdown";

const CreateCourse = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    async function urlToFile(url, filename, mimeType) {
        const res = await fetch(url);
        const blob = await res.blob();
        return new File([blob], filename, { type: mimeType });
    }

    function addList(setValue) {
        setValue((prev) => {
            const updated = [...prev];
            updated.push("");
            return updated;
        })
    }

    function removeList(setValue, id) {
        setValue((prev) => {
            const newList = [...prev];
            newList.splice(id, 1);
            return newList;
        });
    }

    function addSyllabus(setValue) {
        setValue((prev) => {
            const updated = [...prev];
            updated.push({point: "", desc: ""});
            return updated;
        })
    }

    const SUBJECT = [
        {label: "Matematika", value: "MTK"},
        {label: "Fisika", value: "FIS"},
        {label: "Kimia", value: "KIM"},
        {label: "Informatika", value: "TIK"},
        {label: "Ekonomi", value: "EKO"},
        {label: "Akuntansi", value: "AKUN"},
    ]

    const LEVEL = [
        {label: "Beginner", value: "Beginner"},
        {label: "Intermediate", value: "Intermediate"},
        {label: "Advanced", value: "Advanced"},
    ]

    const COLOR = [
        {label: "Blue", value: {light: "#119fe683", main: "#1976d2", dark: "#151855"}},
        {label: "Green", value: {light: "#33aba0", main: "#009688", dark: "#00786d"}},
        {label: "Red", value: {light: "#ea615d", main: "#e53935", dark: "#b72e2a"}},
        {label: "Orange", value: {light: "#ffb333", main: "#ffa000", dark: "#cc8000"}},
        {label: "Purple", value: {light: "#a77bca", main: "#9c27b0", dark: "#7b1fa2"}},
    ];

    useEffect(() => {
        if (searchParams.get("href")) {
            api.get(`/course/href/?href=${searchParams.get("href")}`)
            .then(response => {
                const course = response.data;
                setId(course.id);
                setTitle(course.title);
                setDesc(course.desc);
                setSubject(course.subject);
                setFree(course.free);
                setHref(course.href);
                setColor(course.color);
                setFirstUrl(course.first_url);
                setTime(course.time);
                setUnit(course.unit);
                setSubunit(course.subunit);
                setImportantUnits(JSON.parse(course.important_unit));
                setPrerequisite(course.prereq);
                setQuiz(course.quiz);
                setProlog(course.prolog);
                setSkills(JSON.parse(course.skills));
                setSyllabus((course.syllabus));
                setLevel(course.level);
                
                async function fetchImage() {
                    const file = await urlToFile(
                        `https://res.cloudinary.com/do5ni0oje/${course.image}`,
                        "course_image.jpg",
                        "image/jpeg"
                    );
                    setImage(file);
                }
                fetchImage();
            }).catch(error => {
                console.error('There was an error fetching the course data!', error);
                alert('Failed to fetch course data. Please try again.');
                navigate('/admin/course');
            });
        }
    }, [searchParams]);

    const [id, setId] = useState("");
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin placerat elementum.");
    const [subject, setSubject] = useState("");
    const [free, setFree] = useState(false);
    const [href, setHref] = useState("");
    const [level, setLevel] = useState("");

    const [color, setColor] = useState({light:"#aaa", main:'#555', dark:'#000'});
    const [firstUrl, setFirstUrl] = useState("");
    const [time, setTime] = useState("");
    const [unit, setUnit] = useState("");
    const [subunit, setSubunit] = useState("");

    const [importantUnits, setImportantUnits] = useState(['a', 'b', 'c']);
    const [prerequisite, setPrerequisite] = useState("");
    const [quiz, setQuiz] = useState("");

    const [prolog, setProlog] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin placerat elementum. Morbi finibus semper orci, id scelerisque ligula sagittis at. Aenean pellentesque porta felis sit amet dapibus. Donec purus sem, malesuada in ultrices eu, tincidunt non quam. Nam blandit dolor sapien, at ullamcorper sem ullamcorper nec. Nunc interdum dolor mi, sed interdum lacus iaculis vitae. Aenean porta dignissim lacinia.");
    const [skills, setSkills] = useState([
        "Konsep Fundamental {materi}",
        "Penerapan {materi}",
        "Persiapan untuk konsep {next_materi}"
    ]);
    const [syllabus, setSyllabus] = useState([{point:"A", desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}, {point:"B", desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}]);

    const [deleteOpen, setDeleteOpen] = useState(false);

    const handleSubmit = () => {
        const courseData = new FormData();
        console.log(image);
        courseData.append('image', image);
        courseData.append('title', title);
        courseData.append('desc', desc);
        courseData.append('subject', subject);
        courseData.append('level', level);
        courseData.append('free', free);
        courseData.append('href', href);

        courseData.append('color', JSON.stringify(color));
        courseData.append('first_url', firstUrl);
        courseData.append('time', time);
        courseData.append('unit', unit);
        courseData.append('subunit', subunit);

        courseData.append('important_unit', JSON.stringify(importantUnits));
        courseData.append('prereq', prerequisite);
        courseData.append('quiz', quiz);

        courseData.append('skills', JSON.stringify(skills));
        courseData.append('prolog', prolog);
        courseData.append('syllabus', JSON.stringify(syllabus));

        if (searchParams.get("href")) {
            courseData.append('id', id);
            api.put(`/course/${id}/`, courseData)
            .then(response => {
                alert('Course updated successfully!');
            }).catch(error => {
                console.error('There was an error updating the course!', error);
                alert('Failed to update course. Please try again.');
            });
        } else {
            api.post('/course/', courseData)
            .then(response => {
                alert('Course created successfully!');
            }).catch(error => {
                console.error('There was an error creating the course!', error);
                alert('Failed to create course. Please try again.');
            });
        }
    }

    const handleDelete = () => {
        api.delete(`/course/${id}/`)
        .then(response => {
            alert('Course deleted successfully!');
            navigate('/admin/course');
        }).catch(error => {
            console.error('There was an error deleting the course!', error);
            alert('Failed to delete course. Please try again.');
        });
    }

    return (
        <Theme>
            <Container sx={{ my: 4 }}>
                {searchParams.get("href") && <Chip label={`#${id}`} color="primary" sx={{ mb: 2, fontFamily:"Suisse" }}/>}
                <Stack justifyContent={"center"} alignItems="center" gap={2}>
                    <Stack width={"100%"}>
                        <Typography variant="h4" color="primary" textAlign={'left'} width={"100%"}>Create Course</Typography>
                        <Divider sx={{ width: "100%", borderWidth:2}} />
                    </Stack>
                    <TextField
                        label="Course Title"
                        variant="outlined"
                        fullWidth
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField
                        label="Course Description"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={3}
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                    <TextField
                        label="Course Link"
                        variant="outlined"
                        fullWidth
                        value={href}
                        onChange={(e) => setHref(e.target.value)}
                        required
                    />
                    <Stack direction={"row"} gap={5} flexWrap={"wrap"} alignItems={"center"} width={"100%"}>
                        <Stack flexGrow={1} direction={"row"} alignItems={"center"}>
                            <Dropdown label={"Subject"} value={subject} setValue={setSubject} choices={SUBJECT} null_label="Select Subject" />
                        </Stack>
                        <Stack direction={"row"} alignItems={"center"}>
                            <ImageUpload
                                val={image}
                                setVal={setImage}
                                required={true}
                            />
                        </Stack>
                        <Stack direction={"row"} spacing={.2} alignItems={"center"}>
                            <Typography variant="h5">Free:</Typography>
                            <CustomCheck val={free} setVal={setFree}/>
                        </Stack>
                    </Stack>

                    <Divider sx={{ width: "100%", my: 2, borderColor: "#555" }} />
                    <Stack width={300}>
                        <CourseCard
                            image={image ? URL.createObjectURL(image) : "/no_image.jpg"}
                            title={title || "Course Title"}
                            desc={desc || "Course Description"}
                            subject={subject || "Subject"}
                            Free={free}
                            href={href}
                        />
                    </Stack>

                    <Stack width={"100%"}>
                        <Divider sx={{ width: "100%", mt: 2, mb:.5, borderColor: "#555" }} />
                        <Divider sx={{ width: "100%", mt:.5, mb: 2, borderColor: "#555" }} />
                    </Stack>

                    <TextField
                        label="Course Prolog"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={3}
                        value={prolog}
                        onChange={(e) => setProlog(e.target.value)}
                    />

                    <Stack direction={'row'} flexWrap={'wrap'} gap={2} alignItems={'center'} width={"100%"}>
                        <Stack flexGrow={1}>
                            <Dropdown label={"Level"} value={level} setValue={setLevel} choices={LEVEL} null_label="Select Level" />
                        </Stack>
                        <Stack flexGrow={1}>
                            <Dropdown label={"Color"} value={color} setValue={setColor} choices={COLOR} null_label="Select Color" />
                        </Stack>
                    </Stack>

                    <TextField
                        label="First URL"
                        variant="outlined"
                        fullWidth
                        value={firstUrl}
                        onChange={(e) => setFirstUrl(e.target.value)}
                    />

                    <Grid2 container columns={{xs:1, sm:2, md:2, lg:4}} spacing={2} width={"100%"}>
                        <Grid2 size={1}>
                            <TextField
                                type="number"
                                label="Time"
                                variant="outlined"
                                fullWidth
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                slotProps={{
                                    input: {
                                        endAdornment: (
                                            <InputAdornment position="end">hour</InputAdornment>
                                        ),
                                    }
                                }}
                            />
                        </Grid2>
                        <Grid2 size={1}>
                            <TextField
                                type="number"
                                label="Quiz"
                                variant="outlined"
                                fullWidth
                                value={quiz}
                                onChange={(e) => setQuiz(e.target.value)}
                                slotProps={{
                                    input: {
                                        endAdornment: (
                                            <InputAdornment position="end">quiz</InputAdornment>
                                        ),
                                    }
                                }}
                            />
                        </Grid2>
                        <Grid2 size={1}>
                            <TextField
                                type="text"
                                label="Units"
                                variant="outlined"
                                fullWidth
                                value={unit}
                                onChange={(e) => setUnit(e.target.value)}
                                slotProps={{
                                    input: {
                                        endAdornment: (
                                            <InputAdornment position="end">unit</InputAdornment>
                                        ),
                                    }
                                }}
                            />
                        </Grid2>
                        <Grid2 size={1}>
                            <TextField
                                type="text"
                                label="Subunits"
                                variant="outlined"
                                fullWidth
                                value={subunit}
                                onChange={(e) => setSubunit(e.target.value)}
                                slotProps={{
                                    input: {
                                        endAdornment: (
                                            <InputAdornment position="end">subunit</InputAdornment>
                                        ),
                                    }
                                }}
                            />
                        </Grid2>
                    </Grid2>
                    <Stack direction={'column'} alignItems={'flex-start'} width={"100%"}>
                        <Stack width={"100%"}>
                            <TextField
                                label="Important Unit"
                                variant="outlined"
                                fullWidth
                                value={importantUnits}
                                onChange={(e) => setImportantUnits(e.target.value.split(",").map(item => item.trim()))}
                            />
                        </Stack>
                        <Stack>
                            <Typography color="text.secondary">Seperate each unit with coma (,)</Typography>
                        </Stack>
                    </Stack>

                    <Stack direction={'column'} alignItems={'flex-start'} width={"100%"}>
                        <Stack width={`100%`}>
                            <TextField
                                label="Prerequisite"
                                variant="outlined"
                                fullWidth
                                value={prerequisite}
                                onChange={(e) => setPrerequisite(e.target.value)}
                            />
                        </Stack>
                    </Stack>

                    <Stack width={"100%"} direction={"column"} alignItems={"flex-start"} gap={2} border={1} borderColor={"#ccc"} p={2}>
                        <Typography variant="h6">Skills</Typography>
                        {skills.map((skill, index) => (
                            <Stack key={index} direction="row" alignItems="center" gap={2} width="100%">
                                <Stack flexGrow={1}>
                                    <TextField
                                        label={`Skill ${index + 1}`}
                                        variant="outlined"
                                        value={skill}
                                        onChange={(e) => {
                                            const newSkills = [...skills];
                                            newSkills[index] = e.target.value;
                                            setSkills(newSkills);
                                        }}
                                        fullWidth
                                    />
                                </Stack>
                                <IconButton color="error" onClick={() => removeList(setSkills, index)}>
                                    <DeleteIcon />
                                </IconButton>
                            </Stack>
                        ))}
                        <Button onClick={()=>addList(setSkills)}>Add Skill</Button>
                    </Stack>

                    <Stack width={"100%"} direction={"column"} alignItems={"flex-start"} gap={2} border={1} borderColor={"#ccc"} p={2}>
                        <Typography variant="h6">Syllabus</Typography>
                        {syllabus.map((item, index) => (
                            <Stack key={index} direction="row" alignItems="center" gap={2} width="100%">
                                <Stack flexGrow={1} direction="row" alignItems="center" gap={2} flexWrap={"wrap"}>
                                    <Stack flexGrow={1}>
                                        <TextField
                                            label={`Syllabus Point ${index + 1}`}
                                            variant="outlined"
                                            value={item.point}
                                            onChange={(e) => {
                                                const newSyllabus = [...syllabus];
                                                newSyllabus[index] = { ...newSyllabus[index], point: e.target.value };
                                                setSyllabus(newSyllabus);
                                            }}
                                            fullWidth
                                        />
                                    </Stack>
                                    <Stack flexGrow={1}>
                                        <TextField
                                            label={`Syllabus Description ${index + 1}`}
                                            variant="outlined"
                                            value={item.desc}
                                            onChange={(e) => {
                                                const newSyllabus = [...syllabus];
                                                newSyllabus[index] = { ...newSyllabus[index], desc: e.target.value };
                                                setSyllabus(newSyllabus);
                                            }}
                                            fullWidth
                                        />
                                    </Stack>
                                </Stack>
                                <IconButton color="error" onClick={() => removeList(setSyllabus, index)}>
                                    <DeleteIcon />
                                </IconButton>
                            </Stack>
                        ))}
                        <Button onClick={() => addSyllabus(setSyllabus)}>Add Syllabus</Button>
                    </Stack>
                    <Divider sx={{ width: "100%", my: 2, borderColor: "#555" }} />
                </Stack>
            </Container>
            <SyllabusTemplate
                color={color}
                title={title || "Course Title"}
                desc={desc || "Course Description"}
                unit={unit || "0"}
                subunit={subunit || "0"}
                important_unit={importantUnits || ["Important Unit"]}
                quiz={quiz || "0"}
                first_url={firstUrl || "/comingsoon"}
                level={level || "Level"}
                time={time || "0"}
                prereq={prerequisite || ["Prerequisite"]}
                prolog={prolog || "Course Prolog"}
                skills={skills}
                syllabus={syllabus}
            />
            <Container>
                <Stack mb={4} direction={"row"} justifyContent={"center"} alignItems={"center"}>
                    {searchParams.get("href") && <Button variant="contained" color="error" sx={{ mr:2 }} onClick={()=>setDeleteOpen(true)}>Delete</Button>}
                    <Button variant="contained" onClick={()=>handleSubmit()}>Submit</Button>
                </Stack>
            </Container>
            <Dialog open={deleteOpen} onClose={() => setDeleteOpen(false)} maxWidth="sm" fullWidth>
                <DialogTitle>Delete Course Details</DialogTitle>
                <DialogContent>
                    <Typography fontFamily={'Inter'}>Are you sure you want to delete course with URL: <Typography fontSize={'inherit'} fontFamily={'Suisse'} component={'span'}>{href}</Typography>?</Typography>
                    <Typography fontFamily={'Inter'} typography={'subtitle2'} color={'error'}>This action cannot be undone</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDeleteOpen(false)}>Cancel</Button>
                    <Button
                        onClick={() => handleDelete()}
                        variant="contained"
                        color='error'
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Theme>
    );
}

export default CreateCourse;