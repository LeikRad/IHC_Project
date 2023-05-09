import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import WeekStudent from '../../static/images/week_student.png'


function LeftPanel() {
    return (
        <>
            <div className="left-panel">
                <div className="flex-1">
                    <img src={WeekStudent} width="45px" />
                </div>
            </div>
        </>
    );
}

export default LeftPanel;