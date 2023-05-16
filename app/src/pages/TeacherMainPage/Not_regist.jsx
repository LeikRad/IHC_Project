import React from "react";
import { Link } from "react-router-dom";

const No_regist = () => {
    return (
        <div>
            <div className="card mb-6 bg-warning/50 text-primary-content">
                <div className="card-body">
                    <p>You need to complete your registation to be able to unlock teacher perks!</p>
                    <div className="card-actions justify-start">
                        <Link to="/settings">
                        <button className="btn">Complete Registation</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default No_regist;