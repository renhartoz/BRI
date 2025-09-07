import React, {useState, useEffect} from "react";
import { Stack, Typography, TextField, Container, Divider, Chip, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import Button from "../components/Button";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../services/auth";

export default function CreateCourseDetail() {
    const { course_id, id } = useParams();
    const navigate = useNavigate();
    const [courseDetail, setCourseDetail] = useState("{\n \t \"name\": \"\", \n \t \"url\": \"\", \n \t \"unit\": \"\", \n \t \"subunit\": \"\", \n \t \"time\": \"0 min\", \n \t \"content\": [] \n}");
    const [deleteOpen, setDeleteOpen] = useState(false);

    function safeParse(jsonString) {
        try {
            return JSON.parse(jsonString);
        } catch (err) {
            return null;
        }
    }


    useEffect(() => {
        if (id) {
            api.get(`/course/${course_id}/details/${id}/`)
            .then(response => {
                setCourseDetail(JSON.stringify(response.data, {}, 4));
            })
            .catch(error => console.error('Error fetching course detail data:', error));
        }
    }, [course_id, id]);

    const handleDelete = () => {
        api.delete(`/course/${course_id}/details/${id}/`)
        .then(response => {
            alert('Course deleted successfully!');
            navigate(`/admin/course/${course_id}`);
        }).catch(error => {
            console.error('There was an error deleting the course!', error);
            alert('Failed to delete course. Please try again.');
        });
    }
    
    const handleSubmit = () => {
        const courseDetailObj = safeParse(courseDetail);
        const courseData = new FormData();
        courseData.append('course', course_id);
        courseData.append('name', courseDetailObj.name);
        courseData.append('url', courseDetailObj.url);
        courseData.append('unit', courseDetailObj.unit);
        courseData.append('subunit', courseDetailObj.subunit);
        courseData.append('time', courseDetailObj.time);
        courseData.append('content', JSON.stringify(courseDetailObj.content));
        if (id) {
            courseData.append('id', id);
            api.put(`/course/${course_id}/details/${id}/`, courseData)
            .then(response => {
                alert('Course updated successfully!');
            }).catch(error => {
                console.error('There was an error updating the course!', error);
                alert('Failed to update course. Please try again.');
            });
        } else {
            api.post(`/course/${course_id}/details/`, courseData)
            .then(response => {
                alert('Course created successfully!');
            }).catch(error => {
                console.error('There was an error creating the course!', error);
                alert('Failed to create course. Please try again.');
            });
        }
    }

    return (
        <Container sx={{ my: 4 }}>
            {id && <Chip label={`#${id}`} color="primary" sx={{ mb: 2, fontFamily:"Suisse" }}/>}
            <Stack justifyContent={"center"} alignItems="center" gap={2}>
                <Stack width={"100%"} direction={"column"} gap={2}>
                    <Stack direction={'row'} alignItems={'center'}  justifyContent={'space-between'} width={"100%"} flexWrap={'wrap'}>
                        <Typography variant="h4" color="primary" textAlign={'left'}>{id?"Edit":"Create"} Course Details</Typography>
                        <Button onClick={()=>navigate(`/admin/course/${course_id}`)}>Back to Course Details</Button>
                    </Stack>
                    <Divider sx={{ width: "100%", borderWidth:2}} />
                </Stack>
                <TextField
                    label="Course Detail"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={20}
                    value={courseDetail}
                    onChange={(e) => setCourseDetail(e.target.value)}
                    slotProps={{
                        input: {
                            style: {
                                fontFamily: 'monospace',
                                whiteSpace: 'pre',
                            },
                        }
                    }}
                />
                <Divider sx={{ width: "100%", my: 2, borderColor: "#555" }} />
                <Stack direction={'row'} gap={2}>
                    {id && <Button bgcolor={'tertiary'} onClick={()=>setDeleteOpen(true)}>Delete</Button>}
                    <Button onClick={()=>handleSubmit()}>Submit</Button>
                </Stack>
            </Stack>
            <Dialog open={deleteOpen} onClose={() => setDeleteOpen(false)} maxWidth="sm" fullWidth>
                <DialogTitle>Delete Course Details</DialogTitle>
                <DialogContent>
                    <Typography fontFamily={'Inter'}>Are you sure you want to delete course details with URL: <Typography fontSize={'inherit'} fontFamily={'Suisse'} component={'span'}>{safeParse(courseDetail)?.url||''}</Typography>?</Typography>
                    <Typography fontFamily={'Inter'} typography={'subtitle2'} color={'error'}>This action cannot be undone</Typography>
                </DialogContent>
                <DialogActions>
                    <Stack direction={"row"} gap={2} mb={2} mr={2}>
                        <Button onClick={() => setDeleteOpen(false)}>Cancel</Button>
                        <Button
                            bgcolor={'tertiary'}
                            onClick={() => handleDelete()}
                        >
                            Delete
                        </Button>
                    </Stack>
                </DialogActions>
            </Dialog>
        </Container>
    )
}