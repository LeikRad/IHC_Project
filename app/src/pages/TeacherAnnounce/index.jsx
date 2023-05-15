import React from "react";

import TeacherCard from "../../components/TeacherCard";
import { useParams } from "react-router-dom";



import { useDatabaseStore } from "../../stores/useDatabaseStore";
import CalendarPanel from "../../components/CalendarPanel";
import PickerModal from "../../components/PickerModal";

const TeacherAnnounce = () => {
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    const reviews = ["The teacher I had was exceptional. Their teaching methods were engaging and effective, making the learning process enjoyable.",
        "I highly recommend this teacher. They had a thorough understanding of the subject and were able to explain concepts clearly.",
        "The teacher was patient and understanding. They created a supportive environment that encouraged active participation and learning.",
        "I was impressed with the teacher's knowledge and expertise. They were able to answer all my questions and provide insightful explanations.",
        , "The teacher's enthusiasm for teaching was evident in every class. Their passion for the subject motivated and inspired me to excel."]
    const fake_names = ["Sophie Williams (English)", "Juan Rodriguez (Spanish)", "Anna Petrova (Russian)", "Ahmed Hassan (Egyptian)", "Mei Chen (Chinese)"]

    var count = 0;

    const params = useParams().id;
    const TeachersList = useDatabaseStore((state) => state.Announcements);

    const Teacher = TeachersList.filter((teacher) => teacher.id === params)[0];

    console.log(params);
    return (
        <div className=" min-h-[calc(100vh-65.5px)]">

            <h1 className="text-3xl font-bold text-center my-8">Teacher Announcement</h1>
            <div className="text-4xl flex py-10 items-start ">

                <div className="flex-none px-10 w-[20%]">
                    <CalendarPanel />
                    

                </div>
                <div className="flex flex-col w-[60%] ml-10 text-base">
                    <img src={Teacher.profileimg} alt="Profile" className="w-60 mb-5 rounded-xl" />

                    <h1 className="text-5xl font-bold">{Teacher.name} </h1>
                    <div className=" badge badge-outline">
                        {Teacher.country}
                    </div>

                    <a className="text-2xl font-bold mt-5">Description:</a>
                    <p className="text-xl">{Teacher.description} {lorem}</p>

                    <a className="text-3xl text- font-bold mt-5">
                        <a>
                            {Object.keys(Teacher.lecture_langs).map((lang) => (
                                <a className="mr-2">
                                    {lang}
                                </a>
                            ))}
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

                    <div className="justify-center mt-5 flex flex-row">
                        <label htmlFor="my-modal" className="btn btn-primary border-green-500  scale-150">Schedule a Class</label>
                    </div>
                    
                    <div>
                        <PickerModal />
                    </div>
                </div>
                <div className="flex-none px-10 w-[20%]">
                    <a className="text-2xl font-bold mt-5">📝 Reviews:</a>
                    <div className="flex flex-col mt-2">
                        {reviews.map((review) => {
                            const randomRating = Math.floor(Math.random() * 100);
                            if (randomRating < 80) {

                                return null;
                            } else {
                                count = count + 1;
                            }
                            return (
                                <div className="text-sm">
                                    <div className="card bg-base-200 mb-2 text-primary-content">
                                        <div className="card-body">
                                            <h6 className="text-sm card-title">{fake_names[0]}</h6>
                                            {"⭐".repeat(Math.floor(Math.random() * 2 + 3))}
                                            <p>{review}</p>

                                        </div>
                                    </div>

                                </div>
                            )
                        })}
                        {count === 0 && <p className="text-xl font-bold mt-5">No reviews yet</p>}
                    </div>


                </div>


            </div>
        </div>
    );
}

export default TeacherAnnounce;