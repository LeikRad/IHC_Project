import React, { useState } from "react";
import TimePicker from 'react-time-picker'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from "react-modern-calendar-datepicker";
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

import { Link } from "react-router-dom";

const PickerModal = () => {
  const [selectedDays, setSelectedDays] = useState(null);
  const [picker, SetPicker] = useState(false);
  const [value, onChange] = useState('10:00');

  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <button className="btn btn-sm btn-circle absolute left-2 top-2">«</button>
          <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

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
              <h3 className="font-bold text-lg">escolha a hora</h3>
              <TimePicker onChange={onChange} value={value} />
            </div>

          </div>

          <div className="modal-action">
            <button className="btn" onClick={() => SetPicker(!picker)}>+</button>
            <Link to="/homepage">
              <label htmlFor="my-modal" className="btn">Done</label>
            </Link>
          </div>

        </div>
      </div>

    </>
  );
};

export default PickerModal;