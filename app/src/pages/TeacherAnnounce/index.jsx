import React from "react";

import TeacherCard from "../../components/TeacherCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


import { useDatabaseStore } from "../../stores/useDatabaseStore";
import CalendarPanel from "../../components/CalendarPanel";
import PickerModal from "../../components/PickerModal";
import Warning from "../../components/Warning";
import { useUserStore } from "../../stores/useUserStore";

const TeacherAnnounce = () => {
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    var count = 0;

    const params = useParams().id;
    const TeachersList = useDatabaseStore((state) => state.Announcements);
    const is_student = useUserStore((state) => state.is_student);

    const Teacher = TeachersList.filter((teacher) => teacher.id === params)[0];

    const [warning, setWarning] = useState({ on: 0, color: "alert-warning", message: "You need to have at least one language!" })

    const showWarning = (props) => {
        setWarning({ on: 1, color: props.color, message: props.message })
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setWarning({ on: 0, color: "alert-error", message: "Select a day and hour!" })
        }, 7000);
        return () => clearTimeout(timer);
    }, [warning]);


    const proficiencybar = (teacher, lang) => {
        const profic = teacher.known_langs[lang];
        if (profic === "native")
            return [100, "items-end progress progress-info w-56"];
        if (profic === "C2")
            return [90, "items-end progress progress-success w-56"];
        if (profic === "C1")
            return [80, "items-end progress progress-success w-56"];
        if (profic === "B2")
            return [70, "items-end progress progress-accent w-56"];
        if (profic === "B1")
            return [50, "items-end progress progress-accent-600 w-56"];
        if (profic === "A2")
            return [30, "items-end progress progress-warning w-56"];
        if (profic === "A1")
            return [20, "items-end progress progress-warning w-56"];
    };

    return (
        <div className=" min-h-[calc(100vh-65.5px)] ">
            {warning.on == 1 && (<Warning color={"alert-success"} message={"Appointment Scheduled successfuly. Check your inbox messages to check for updates."} />)}


            <h1 className="text-3xl font-bold text-center my-8">Teacher Announcement</h1>
            <div className="text-4xl flex py-10 items-start ">
                <div className="flex-none px-10 w-[20%]">
                    <CalendarPanel />
                </div>
                <div className="flex flex-col w-[60%] ml-10 text-base">
                    <div className="flex flex-row">
                        <div className="flex flex-col">
                            <figure>
                                {!Teacher.profileimg ?
                                (
                                    <img className="w-40" src="https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg" alt="Album" />
                                ) : (
                                    <img
                                        className="w-40"
                                        src={Teacher.profileimg}
                                        alt="Album"
                                    />
                                )}

                            </figure>
                        </div>
                        <div className="flex flex-col mt-5 ml-10">
                            <h2 className="font-bold">Known Languages</h2>
                            {Object.keys(Teacher.known_langs).map((lang) => (
                                <div>
                                    <span className="indent-4">
                                        {lang} [{Teacher.known_langs[lang]}]
                                    </span>
                                    <br />
                                    <p>
                                        <progress
                                            className={
                                                proficiencybar(Teacher, lang)[1]
                                            }
                                            value={
                                                proficiencybar(Teacher, lang)[0]
                                            }
                                            max="100"
                                        ></progress>
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>

                    <h1 className="text-5xl font-bold">{Teacher.name} </h1>
                    <div className=" badge badge-outline">
                        {Teacher.country}
                    </div>
                    <a className="text-2xl font-bold mt-5">Description:</a>
                    <p className="text-xl">{Teacher.description} {lorem}</p>

                    <a className="text-3xl text- font-bold mt-5">
                        <a>
                            {/* {Object.keys(Teacher.lecture_langs).map((lang) => ( */}
                            <a className="mr-2">
                                {Teacher.lecture_langs}
                            </a>
                            {/* ))} */}
                        </a>
                        Lecture:
                        <a className="btn btn-primary w-[15%] ml-4 text-2xl">Price: {Teacher.price}$</a>
                    </a>

                    <a className="text-2xl font-bold mt-5">Certificates:</a>
                    <div className="flex flex-row flex-wrap mt-2">
                        {Teacher.certifications.map((certificate) => (
                            <div className="badge badge-outline scale-[120%] ml-3 mr-4 mb-2">
                                {certificate}
                            </div>
                        ))}
                    </div>

                    <p className="text-2xl font-bold mt-5">Overall Rating: {Teacher.rating} ⭐</p>

                    {is_student && (
                    <div className="justify-center mt-5 flex flex-row">
                        <label htmlFor="my-modal" className="btn btn-primary border-green-500  scale-150">Schedule a Class</label>
                    </div>
                    )}
                    

                    <div>
                        <PickerModal onChangeVariable={showWarning} />
                    </div>
                </div>
                <div className="flex-none px-10 w-[20%]">
                    <a className="text-2xl font-bold mt-5">📝 Reviews:</a>
                    <div className="flex flex-col mt-2">
                        {
                            (Teacher.reviews2.length === 0) ? (
                                <p className="text-xl font-bold mt-5">No reviews yet</p>
                            ) : (
                                Teacher.reviews2.map((reviewX) => {
                                    return (
                                        <div className="text-sm">
                                            <div className="card bg-base-200 mb-2 text-primary-content">
                                                <div className="card-body">
                                                    <h6 className="text-sm card-title">{reviewX.nome}</h6>
                                                    {"⭐".repeat(reviewX.score)}
                                                    <p>{reviewX.review_}</p>

                                                </div>
                                            </div>

                                        </div>
                                    )

                                })

                            )
                        }

                    </div>

                </div>


            </div>
        </div>
    );
}

export default TeacherAnnounce;