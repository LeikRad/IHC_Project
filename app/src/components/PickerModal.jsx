import React, { useState } from "react";
import "@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css";
import { Calendar } from "@amir04lm26/react-modern-calendar-date-picker";
import "react-clock/dist/Clock.css";
import { useUserStore } from "../stores/useUserStore";
import { Link } from "react-router-dom";
import Warning from "./Warning";
import { useEffect } from "react";

const PickerModal = ({ onChangeVariable }) => {
    const [selectedDays, setSelectedDays] = useState(null);
    const [value, onChange] = useState("10:00");
    const [picker, SetPicker] = useState([]);
    const [time, setTimes] = useState("10:00");
    const fake_notifications = useUserStore((state) => state.false_notifications)

    const [warning, setWarning] = useState({ on: 0, color: "alert-warning", message: "You need to have at least one language!" })


    const changeTime = (e) => {
        setTimes(e.target.value);
    };

    const addPicker = () => {
        if (selectedDays === null || time === "") {
            // alert("Selecione um dia e uma hora");
            showWarning({ color: "alert-warning", message: "Select a day and hour!" })
            return;
        }
        selectedDays.time = time;
        console.log(selectedDays);
        SetPicker([...picker, selectedDays]);
        console.log(picker);
    };

    const showWarning = (props) => {
        setWarning({ on: 1, color: props.color, message: props.message })
    }

    const donebutton = () => {
        if (picker.length === 0) {
            showWarning({ color: "alert-warning", message: "Schedule something first." })
            // alert("Selecione um dia e uma hora");
            return;
        }
        console.log(fake_notifications)
        useUserStore.getState().add_notification();
        console.log(fake_notifications)
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setWarning({ on: 0, color: "alert-error", message: "Select a day and hour!" })
        }, 3000);
        return () => clearTimeout(timer);
    }, [warning]);


    const showWarningMainPage = () => {
        onChangeVariable({ color: "alert-warning", message: "Schedule something first." });
      };
    return (
        <>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                {warning.on == 1 && (<Warning color={warning.color} message={warning.message} />)}
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
                            Schedule
                        </button>
                        <div onClick={donebutton}>
                            {picker.length === 0 ? (
                                <label htmlFor="" className="btn">
                                    Done
                                </label>) :
                                <label htmlFor="my-modal" onClick={showWarningMainPage} className="btn">
                                    Done
                                </label>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PickerModal;
