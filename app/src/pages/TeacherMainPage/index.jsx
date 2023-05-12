import React from "react";
import No_announce from "./No_announce";
import No_regist from "./Not_regist";
import No_disponibility from "./No_disponibility";

const TeacherMainPage = () => {
    return (
        <div>
            <h1 className="text-4xl mb-10 flex justify-center">My Announcements</h1>
            <No_regist />
            <No_announce />
            <No_disponibility />
        </div>
    );
};

export default TeacherMainPage;