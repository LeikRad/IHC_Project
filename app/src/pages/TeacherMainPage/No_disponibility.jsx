import React from "react";

const No_disponibility = ({onChangeVariable}) => {
    const showWarningMainPage = () => {
        onChangeVariable({ color: "alert-warning", message: "Schedule something first." });
      };
    return (
        <div>
            <div className="card mb-6 bg-warning/50 text-primary-content">
                <div className="card-body">
                    <p>Need to add your disponibility, it is usefull to let students know when you are free.</p>
                    <div className="card-actions justify-start">
                        <button onClick={showWarningMainPage} className="btn">Add disponibility</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default No_disponibility;