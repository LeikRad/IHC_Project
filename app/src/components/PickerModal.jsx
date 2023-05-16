import React, { useState } from "react";
import "@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css";
import { Calendar } from "@amir04lm26/react-modern-calendar-date-picker";
import "react-clock/dist/Clock.css";
import { useUserStore } from "../stores/useUserStore";
import { Link } from "react-router-dom";

const PickerModal = () => {
    const [selectedDays, setSelectedDays] = useState(null);
    const [value, onChange] = useState("10:00");
    const [picker, SetPicker] = useState([]);
    const [time, setTimes] = useState("10:00");
    const fake_notifications = useUserStore((state) => state.false_notifications)
    const changeTime = (e) => {
        setTimes(e.target.value);
    };

    const addPicker = () => {
        if (selectedDays === null || time === "") {
            alert("Selecione um dia e uma hora");
            return;
        }
        selectedDays.time = time;
        console.log(selectedDays);
        SetPicker([...picker, selectedDays]);
        console.log(picker);
    };

    const donebutton = () => {
        if (picker.length === 0) {
            alert("Selecione um dia e uma hora");
            return;
        }
        console.log(fake_notifications)
        useUserStore.getState().add_notification();
        console.log(fake_notifications)
    };

    return (
        <>  
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <button className="btn btn-sm btn-circle absolute left-2 top-2">
                        «
                    </button>
                    <label
                        htmlFor="my-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>

                    <div className="flex flex-row gap-4 pt-10">
                        <div className="basis-[50%]">
                            <h3 className="font-bold text-lg">escolha o dia</h3>
                            <Calendar
                                value={selectedDays}
                                onChange={setSelectedDays}
                                shouldHighlightWeekends
                            />
                        </div>

                        <div className="basis-[30%]">
                            <div className="flex flex-col gap-4">
                                <h2>Escolha hora</h2>
                                <input
                                    type="time"
                                    onChange={changeTime}
                                    value={time}
                                    className="font-bold text-lg"
                                />
                                {picker.map((item) => (
                                    <div>
                                        <h2>Class scheduled for: {item.day}/{item.month}/{item.year} at {item.time}</h2>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="modal-action">
                        <button className="btn" onClick={addPicker}>
                            +
                        </button>
                        <Link to="/homepage" onClick={donebutton}>
                            <label htmlFor="my-modal" className="btn">
                                Done
                            </label>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PickerModal;
