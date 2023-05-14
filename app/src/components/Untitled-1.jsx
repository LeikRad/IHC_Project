import React from "react";
import { useDatabaseStore } from "../stores/useDatabaseStore";

//to select the teacher and exibit the details
/*interface Props { 
    onSelectProfessor: (index: number) => void;
}*/

function TeacherCard(/*{onSelectProfessor}:Props*/) {

    const TeachersList = useDatabaseStore((state) => state.Announcements);

    const Emoji = ["📝", "📌", "📚", "🔎", "📎", "📊", "📜", "🪪"]

    const pickEmoji = () => {
        return Emoji[Math.floor(Math.random() * Emoji.length)]
    }

    const proficiencybar = (teacher, lang) => {
        const profic = teacher.known_langs[lang]
        if (profic === "native") return [100, "items-end progress progress-info w-56"]
        if (profic === "C2") return [90, "items-end progress progress-success w-56"]
        if (profic === "C1") return [80, "items-end progress progress-success w-56"]
        if (profic === "B2") return [70, "items-end progress progress-accent w-56"]
        if (profic === "B1") return [50, "items-end progress progress-accent-600 w-56"]
        if (profic === "A2") return [30, "items-end progress progress-warning w-56"]
        if (profic === "A1") return [20, "items-end progress progress-warning w-56"]
    }

    return (
        <div>
            {TeachersList.map((teacher, index) => (
                <div className="card lg:card-side rounded-100 shadow-xl m-10"
                    style={{ backgroundColor: 'rgb(240, 240, 240)' }}
                    /*key={index}
                    onClick={() => { onSelectProfessor(index); }} */
                >
                    <figure><img className="w-20" src={teacher.profileimg} alt="Album" /></figure>
                    <div className="card-body">
                        <div className="grid grid-cols-4 gap-4">
                            <div>
                                <h1 className="card-title mb-5">{teacher.name}
                                    <div className="card-actions">
                                        <div className="badge badge-outline text-green-600/100 bg-base-100 hover:text-green-700">{teacher.country}</div>
                                    </div>
                                </h1>
                                <p className="mb-2">Description:{teacher.description}</p>

                                <div className="card-actions mb-2">
                                    <a>Lectures:</a>
                                    {Object.keys(teacher.lecture_langs).map((lang) => (
                                        <div className="badge badge-outline">{lang}</div>
                                    ))}
                                </div>
                                        
                                <p>💰 Price: {teacher.price}$</p>

                            </div>
                            
                            <div>
                                <h2 className="font-bold mb-2">Certifications</h2>
                                {teacher.certifications.map((cert) => (
                                    <p>{pickEmoji()} {cert}</p>
                                ))}
                            </div>
                            <div>
                                <h2 className="font-bold mb-2">Stats and Contact</h2>
                                <p>⭐ Rating: {teacher.rating}</p>
                                <p>⭐ Reviews: {teacher.reviews}</p>

                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary hover:scale-105 transition-transform duration-300">Schedule Here</button>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            ))}
        </div>
    );
}

export default TeacherCard;