import React from "react";
// import { useDatabaseStore } from "../stores/useDatabaseStore";
import { Link } from "react-router-dom";

function TeacherCard(props) {
    const teacher = props.teacher;
    const Emoji = ["📝", "📌", "📚", "🔎", "📎", "📊", "📜", "🪪"];

    const pickEmoji = () => {
        return Emoji[Math.floor(Math.random() * Emoji.length)];
    };

    return (
        <div className="w-full">
            <div className="card lg:card-side rounded-100 shadow-xl m-10 hover:shadow-2xl" style={{ backgroundColor: "rgb(240, 240, 240)" }}>
                <figure>
                    <img
                        className="w-20"
                        src={teacher.profileimg}
                        alt="Album"
                    />
                </figure>
                <div className="card-body">
                    <div className="grid grid-cols-4 gap-4">
                        <div>
                            <div className="card-actions mb-5">
                                {/* <a>Lectures:</a> */}
                                {Object.keys(teacher.lecture_langs).map(
                                    (lang) => (
                                        <h1 className="text-4xl text-warning">
                                            {lang} Class
                                        </h1>
                                    )
                                )}
                            </div>
                            <h1 className="card-title">
                                {teacher.name}

                            </h1>
                            <div className="card-actions mb-5">
                                <div className="badge badge-outline text-green-600/100 bg-base-100 hover:text-green-700">
                                    <a>Country: {teacher.country}</a>
                                </div>
                            </div>
                            <p className="mb-2">
                                Description:{teacher.description}
                            </p>



                            <p>💰 Price: {teacher.price}$</p>
                        </div>

                        <div>
                            <h2 className="font-bold mb-2">Certifications</h2>
                            {teacher.certifications.map((cert) => (
                                <p>
                                    {pickEmoji()} {cert}
                                </p>
                            ))}
                        </div>
                        <div>
                            <h2 className="font-bold mb-2">
                                Stats and Contact
                            </h2>
                            <p>⭐ Rating: {teacher.rating}</p>
                            <p>⭐ Reviews: {teacher.reviews}</p>
                        </div>
                        <div>
                            <div className="card-actions flex justify-end">
                                <Link to={`/announcement/${teacher.id}`}>
                                    <button className="btn btn-primary hover:scale-105 transition-transform duration-300">
                                        Schedule Here
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeacherCard;
