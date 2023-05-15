import React from "react";
import No_announce from "./No_announce";
import No_regist from "./Not_regist";
import No_disponibility from "./No_disponibility";

const TeacherMainPage = () => {
    return (
        <div className="text-4xl flex flex-col items-center  min-h-[calc(100vh-65.5px)]">
            <div className="">
                <h1 className="text-center py-10">My Announcements</h1>
                <div>
                    <No_regist />
                    <No_announce />
                    <No_disponibility />
                </div>
            </div>
        </div>
    );
};

export default TeacherMainPage;
