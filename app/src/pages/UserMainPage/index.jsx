import TeacherCard from "../../components/TeacherCard";
import CalendarPanel from "../../components/CalendarPanel";
import PickerModal from "../../components/PickerModal";
import React from "react";

const UserMainPage = () => {

    return (
        <>
            <div>
                {/*<h1 className="text-3xl font-bold text-center my-8">Teacher's Offers</h1> {/* Title */}
                <div className="">
                    <div className="flex flex-row">
                    <div className="basis-[20%] mt-5"><CalendarPanel /></div>

                    <div className="basis-[80%]">
                        <div className="pt-4 ml-10 mb-10 tabs">
                            <a className="tab tab-lg tab-lifted tab-active">
                                <h1 className="text-3xl font-bold text-center">Search a new teacher</h1>
                            </a>
                            <a className="tab tab-lg tab-lifted">
                                <h1 className="text-3xl font-bold text-center">My teachers</h1>
                            </a>
                        </div>
                            
                        <div className=""><TeacherCard /></div>
                            <div><PickerModal /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserMainPage;