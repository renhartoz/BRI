import Template from "./Template";
import blogData from "../data/blogs/limit.json";
import courseData from "../data/course.json";
import SyllabusTemplate from "./SyllabusTemplate";

export function LimitSyllabus() {
    const course = courseData.find(item=>item.id===1);
    return (
        <SyllabusTemplate {...course} />
    )
}

export function LimitIntro() {
    return (
        <Template blogData={blogData} url={"/course/limit/intro"} />
    );
}

export function LimitApproach() {
    return (
        <Template blogData={blogData} url={"/course/limit/approach"} />
    );
}

export function LimitProperty() {
    return (
        <Template blogData={blogData} url={"/course/limit/property"} />
    );
}

export function LimitEvaluation() {
    return (
        <Template blogData={blogData} url={"/course/limit/evaluation"} />
    );
}

export function LimitInf() {
    return (
        <Template blogData={blogData} url={"/course/limit/infinity"} />
    );
}

export function LimitAtInf() {
    return (
        <Template blogData={blogData} url={"/course/limit/atinfinity"} />
    );
}

export function LimitAtInf2() {
    return (
        <Template blogData={blogData} url={"/course/limit/atinfinity2"} />
    );
}
