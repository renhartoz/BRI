import SyllabusTemplate from "./SyllabusTemplate";
// import course from "../data/course.json";

export default function TrigonometriSyllabus() {
    // const course = course.find((c) => c.id === 3);
    return (
        <SyllabusTemplate
            color="red"
            title="Trigonometri"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            subUnits={["Lorem", "Ipsum", "Dolor"]}
            firstPageURL="/course/trigonometri"
            level="Intermediate"
            time="15"
            subUnit="20"
            preReq="Pythagorean Theorem"
            descSyllabus="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            skills={["Teorama Limit", "Limit tertentu", "Limit tak hingga"]}
            syllabusData={{
                title: "Silabus: Limit Fungsi",
                unit: 6,
                subunit: 15,
                quiz: 8,
                content: [
                    {
                        point: "Konsep Dasar Limit",
                        desc: "Memahami pengertian limit fungsi dan bagaimana konsep ini digunakan dalam kalkulus.",
                    },
                    {
                        point: "Teknik Evaluasi Limit",
                        desc: "Menggunakan metode matematis untuk mencari nilai limit suatu fungsi.",
                    },
                    {
                        point: "Limit Tak Hingga",
                        desc: "Menghitung limit fungsi ketika x mendekati nilai tak hingga.",
                    },
                    {
                        point: "Limit Logaritma dan Eksponensial",
                        desc: "Memahami bagaimana cara menyelesaikan limit fungsi yang mengandung logaritma dan eksponensial.",
                    },
                    {
                        point: "Limit Fungsi Trigonometri",
                        desc: "Menghitung limit fungsi trigonometri dengan berbagai teknik.",
                    },
                    {
                        point: "Limit Menggunakan Kaidah L'Hôpital",
                        desc: "Mengenal dan menggunakan aturan L'Hôpital untuk menyelesaikan limit dengan bentuk tak tentu.",
                    },
                ],
            }}
        />
    );
}
