import TeacherCard from "../../components/TeacherCard";
import CalendarPanel from "../../components/CalendarPanel";
import PickerModal from "../../components/PickerModal";
import React from "react";
import { useDatabaseStore } from "../../stores/useDatabaseStore";

const UserMainPage = () => {
    const TeachersList = useDatabaseStore((state) => state.Announcements);
    console.log(TeachersList);
    return (
        <>
            <div className="text-4xl flex items-center h-[calc(100vh-65.5px)]">
                {/*<h1 className="text-3xl font-bold text-center my-8">Teacher's Offers</h1> {/* Title */}
                <div className="flex-none w-[20%]">
                    <div className="">
                        <div className="">
                            <CalendarPanel />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row w-[80%]">
                    <div className="pt-4 ml-10 mb-10 tabs">
                        <a className="tab tab-lg tab-lifted tab-active">
                            <h1 className="font-bold text-center">
                                Search a new teacher
                            </h1>
                        </a>
                        <a className="tab tab-lg tab-lifted">
                            <h1 className="font-bold text-center">
                                My teachers
                            </h1>
                        </a>
                    </div>

                    <div className="object-contain">
                        {TeachersList.map((teacher) => (
                            <TeacherCard key={teacher.id} teacher={teacher} />
                        ))}
                    </div>
                    <div>
                        <PickerModal />
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserMainPage;
