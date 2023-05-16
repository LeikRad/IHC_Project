import React from "react";
import { Link } from "react-router-dom";
const No_announce = () => {
    return (
        <div>
            <div className="card mb-6 bg-warning/50 text-primary-content">
                <div className="card-body">
                    <p>No announce yet published, please make one.</p>
                    <div className="card-actions justify-start" >
                        <Link to="/announce">
                        <button className="btn" >Create Announcement</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default No_announce;