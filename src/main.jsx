import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import CourseLayout from "./CourseLayout.jsx";
import ExerciseLayout from "./ExerciseLayout.jsx";
import "./index.css";

import {
    RouterProvider,
    createBrowserRouter,
    Navigate,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Testing from "./pages/BoilerPlate.jsx";
import CourseList from "./pages/CourseList.jsx";
import ExerciseList from "./pages/ExerciseList.jsx";
import BlogEditor from "./pages/BlogEditor.jsx";
import BlogEditorForm from "./pages/BlogEditorForm.jsx";
import {
    LimitSyllabus,
    LimitIntro,
    LimitApproach,
    LimitProperty,
    LimitEvaluation,
    LimitInf,
    LimitAtInf,
    LimitAtInf2,
} from "./course/Limit.jsx";
import * as GK from "./exercise/GasKinetics.jsx";
import PageNotFound from "./pages/404.jsx";
import ComingSoon from "./pages/ComingSoon.jsx";

export const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <Home /> },
            { path: "test", element: <Testing /> },
            { path: "course", element: <CourseList /> },
            { path: "exercise", element: <ExerciseList /> },
            { path: "editor-form", element: <BlogEditorForm /> },
            { path: "editor", element: <BlogEditor /> },
            { path: "course/limit", element: <LimitSyllabus /> },
        ],
    },
    {
        path: "/comingsoon",
        element: <ComingSoon />,
    },
    {
        path: "/course/limit",
        element: <CourseLayout />,
        children: [
            // { path: "", element: <Navigate to={getInitialRoute("limit")} replace /> },
            { path: "intro", element: <LimitIntro /> },
            { path: "approach", element: <LimitApproach /> },
            { path: "property", element: <LimitProperty /> },
            { path: "evaluation", element: <LimitEvaluation /> },
            { path: "infinity", element: <LimitInf /> },
            { path: "atinfinity", element: <LimitAtInf /> },
            { path: "atinfinity2", element: <LimitAtInf2 /> },
        ],
    },
    {
        path: "/exercise/gas-kinetics",
        element: <ExerciseLayout />,
        children: [
            { path: "1", element: <GK.GasKinetics1 /> },
            { path: "2", element: <GK.GasKinetics2 /> },
            { path: "3", element: <GK.GasKinetics3 /> },
            { path: "4", element: <GK.GasKinetics4 /> },
            { path: "5", element: <GK.GasKinetics5 /> },
            { path: "6", element: <GK.GasKinetics6 /> },
            { path: "7", element: <GK.GasKinetics7 /> },
            { path: "8", element: <GK.GasKinetics8 /> },
            { path: "9", element: <GK.GasKinetics9 /> },
            { path: "10", element: <GK.GasKinetics10 /> },
            { path: "11", element: <GK.GasKinetics11 /> },
            { path: "12", element: <GK.GasKinetics12 /> },
            { path: "13", element: <GK.GasKinetics13 /> },
            { path: "14", element: <GK.GasKinetics14 /> },
            { path: "15", element: <GK.GasKinetics15 /> },
            { path: "16", element: <GK.GasKinetics16 /> },
            { path: "17", element: <GK.GasKinetics17 /> },
            { path: "18", element: <GK.GasKinetics18 /> },
            { path: "19", element: <GK.GasKinetics19 /> },
            { path: "20", element: <GK.GasKinetics20 /> },
        ],
    },
    {
        path: "/exercise/trigonometry",
        element: <ExerciseLayout />,
        children: [
            { path: "1", element: <GK.GasKinetics1 /> },
            { path: "2", element: <GK.GasKinetics2 /> },
            { path: "3", element: <GK.GasKinetics3 /> },
            { path: "4", element: <GK.GasKinetics4 /> },
            { path: "5", element: <GK.GasKinetics5 /> },
            { path: "6", element: <GK.GasKinetics6 /> },
        ],
    },
    {
        path: "*",
        element: <PageNotFound />,
    },
];

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
