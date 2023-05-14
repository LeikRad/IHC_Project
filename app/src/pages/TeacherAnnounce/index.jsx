import React from "react";

import TeacherCard from "../../components/TeacherCard";
import { useParams } from "react-router-dom";

import { useDatabaseStore } from "../../stores/useDatabaseStore";


const TeacherAnnounce = () => {
    const params = useParams().id;
    const TeachersList = useDatabaseStore((state) => state.Announcements);

    const Teacher = TeachersList.filter((teacher) => teacher.id === params)[0];

    console.log(params);
    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-8">Teacher Announcement</h1> {/* Title */}
            <TeacherCard teacher={Teacher} />

        </div>
    );
}

export default TeacherAnnounce;