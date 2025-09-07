import React, {useEffect, useState} from "react";
import { Box, Container, Divider, Stack, Typography, Chip } from "@mui/material";
import Button from "../components/Button";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../services/auth";
import AddIcon from '@mui/icons-material/Add';

export default function CourseDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [course, setCourse] = useState(null);
    
    useEffect(() => {
        api.get(`/course/${id}`)
        .then(response => setCourse(response.data))
        .catch(error => console.error('Error fetching course data:', error));
        console.log(course)
    }, [id]);

    if (!course) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <>
            <Stack sx={{backgroundColor: `${course.color.light}`}}>
                <Stack
                    px={{ xs: 4, sm: 6, md: 8 }}
                    py={5}
                    direction={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexWrap={{ xs: "wrap", sm: "nowrap" }}
                >
                    <Stack
                        alignItems={"flex-start"}
                        gap={3}
                        px={4}
                        py={3}
                        sx={{
                            backgroundColor: "#f7f7ff",
                            borderRadius: "8px",
                        }}
                    >
                        <Stack
                            direction={"row"}
                            flexWrap={"wrap"}
                            alignItems={"flex-start"}
                            gap={3}
                        >
                            <Stack
                                direction={"column"}
                                gap={2}
                                flexGrow={1}
                                maxWidth={{ xs: "100%", md: "42vw" }}
                            >
                                <Stack direction={'row'} flexWrap={'wrap'} gap={4}>

                                    <Typography
                                        fontFamily={"monospace"}
                                        fontSize={{ xs: "1.2em", md: "1.5em" }}
                                    >
                                        Course
                                    </Typography>
                                    <Chip label={`#${id}`} color="primary" sx={{ mb: 2, fontFamily:"Suisse" }}/>
                                </Stack>
                                <Typography
                                    fontSize={{ xs: "2em", md: "2.4em" }}
                                    fontWeight={700}
                                >
                                    {course.title}
                                </Typography>
                                <Typography
                                    fontSize={{ xs: "1em", md: "1.2em" }}
                                >
                                    {course.desc}
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack>
                            <Link to={`/admin/course/edit/${id}`} style={{ textDecoration: 'none' }}>
                                <Button sx={{ width: "5em" }} bgcolor={course.color.main}>
                                    Edit
                                </Button>
                            </Link>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Container>
                <Stack my={4} gap={2}>
                    {course.details.length?course.details.map((detail, index) => (
                        <Box key={index} border={1} borderColor={"#000"} borderRadius={2} p={2}>
                            <Link to={`edit/${detail.id}`} style={{ textDecoration: 'none' }}>
                                <Typography variant="h5" fontWeight={600}>{detail.name} - {detail.url}</Typography>
                            </Link>
                        </Box>
                    )):(
                        <Stack my={2}>
                            <Typography color={course.color.main} textAlign={'center'} fontSize={50}>No details available.</Typography>
                        </Stack>
                    )}
                </Stack>
                <Stack justifyContent={"center"} alignItems="center">
                    <Link to={'edit'} style={{ textDecoration: 'none' }}>
                        <Button startIcon={<AddIcon/>}>Add Course Details</Button>
                    </Link>
                </Stack>
            </Container>
        </>
    )
}