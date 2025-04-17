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
import EditorApp from "./editor/Lexical/App.jsx";

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
import * as TRI from "./exercise/Trigonometri.jsx";
import * as LIM from "./exercise/Limit.jsx";
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
            { path: "course/limit", element: <LimitSyllabus /> },
        ],
    },
    {
        path: "/editor",
        element: <EditorApp />,
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
        path: "/exercise/trigonometri",
        element: <ExerciseLayout />,
        children: [
            { path: "1", element: <TRI.Trigonometri1 /> },
            { path: "2", element: <TRI.Trigonometri2 /> },
            { path: "3", element: <TRI.Trigonometri3 /> },
            { path: "4", element: <TRI.Trigonometri4 /> },
            { path: "5", element: <TRI.Trigonometri5 /> },
            { path: "6", element: <TRI.Trigonometri6 /> },
            { path: "7", element: <TRI.Trigonometri7 /> },
            { path: "8", element: <TRI.Trigonometri8 /> },
            { path: "9", element: <TRI.Trigonometri9 /> },
            { path: "10", element: <TRI.Trigonometri10 /> },
        ],
    },
    {
        path: "/exercise/limit",
        element: <ExerciseLayout />,
        children: [
            { path: "1", element: <LIM.Limit1 /> },
            { path: "2", element: <LIM.Limit2 /> },
            { path: "3", element: <LIM.Limit3 /> },
            { path: "4", element: <LIM.Limit4 /> },
            { path: "5", element: <LIM.Limit5 /> },
            { path: "6", element: <LIM.Limit6 /> },
            { path: "7", element: <LIM.Limit7 /> },
            { path: "8", element: <LIM.Limit8 /> },
            { path: "9", element: <LIM.Limit9 /> },
            { path: "10", element: <LIM.Limit10 /> },
            { path: "11", element: <LIM.Limit11 /> },
            { path: "12", element: <LIM.Limit12 /> },
            { path: "13", element: <LIM.Limit13 /> },
            { path: "14", element: <LIM.Limit14 /> },
            { path: "15", element: <LIM.Limit15 /> },
            { path: "16", element: <LIM.Limit16/> },
            { path: "17", element: <LIM.Limit17 /> },
            { path: "18", element: <LIM.Limit18 /> },
            { path: "19", element: <LIM.Limit19 /> },
            { path: "20", element: <LIM.Limit20 /> },
            { path: "21", element: <LIM.Limit21 /> },
            { path: "22", element: <LIM.Limit22 /> },
            { path: "23", element: <LIM.Limit23 /> },
            { path: "24", element: <LIM.Limit24 /> },
            { path: "25", element: <LIM.Limit25 /> },
            { path: "26", element: <LIM.Limit26 /> },
            { path: "27", element: <LIM.Limit27 /> },
            { path: "28", element: <LIM.Limit28 /> },
            { path: "29", element: <LIM.Limit29 /> },
            { path: "30", element: <LIM.Limit30 /> },
            { path: "31", element: <LIM.Limit31 /> },
            { path: "32", element: <LIM.Limit32 /> },
            { path: "33", element: <LIM.Limit33 /> },
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
