import React from "react";
import No_announce from "./No_announce";
import No_regist from "./Not_regist";
import No_disponibility from "./No_disponibility";
import { useUserStore } from "../../stores/useUserStore";
import { useDatabaseStore } from "../../stores/useDatabaseStore";
import TeacherCard from "../../components/TeacherCard";
import { useEffect } from "react";
import { useState } from "react";
import Warning from "../../components/Warning";


const TeacherMainPage = () => {

    const registed = useUserStore((state) => state.completed_registation);
    const announcements = useUserStore((state) => state.completed_announcement);
    const disponibility = useUserStore((state) => state.completed_disponibility);
    const email = useUserStore((state) => state.email);
    const phone = useUserStore((state) => state.phone);
    const TeachersList = useDatabaseStore((state) => state.Announcements);
    const Teacher = TeachersList.filter((teacher) => teacher.email === email);

    const [changed, setChanged] = React.useState(0);

    // const deletedAnnouncements = [];
    const [warning, setWarning] = useState({ on: 0, color: "alert-warning", message: "You need to have at least one language!" })
    const deleted = (announce) => {
        useDatabaseStore.getState().removeAnnouncement(announce);
        setChanged(changed + 1);
    }

    const showWarning = (props) => {
        setWarning({ on: 1, color: props.color, message: props.message })
        useUserStore.getState().add_disponibility();
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setWarning({ on: 0, color: "alert-error", message: "Select a day and hour!" })
        }, 7000);
        return () => clearTimeout(timer);
    }, [warning]);

    return (
        <div className="text-4xl flex flex-col items-center  min-h-[calc(100vh-65.5px)]">
            <div className="">
                <div className="text-base">
                    {warning.on == 1 && (<Warning color={"alert-success"} message={"Lets pretend your disponibility was selected"} />)}
                </div>
                <h1 className="text-center py-10">My Announcements</h1>
                <div>
                    {registed == false && <No_regist />}
                    {(announcements == false || Teacher == 0) && <No_announce />}
                    {disponibility == false && <No_disponibility onChangeVariable={showWarning} />}

                    <div className="object-contain text-base">
                        {TeachersList.map((teacher) =>
                            ((teacher.email === email && email != null) || (teacher.phone === phone && phone != null)) ? (
                                console.log(teacher),
                                <React.Fragment key={teacher.id}>
                                    <div className="flex flex-col"> {/* Parent container */}

                                        <TeacherCard key={teacher.id} teacher={teacher} />
                                        <div className="flex flex-row justify-center">
                                        <button onClick={() => deleted(teacher)} className="btn btn-primary mb-2">Delete Announcement</button>
                                        </div>
                                    </div>
                                </React.Fragment>

                            ) : null)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherMainPage;
