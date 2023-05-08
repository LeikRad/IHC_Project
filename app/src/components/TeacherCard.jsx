import React from "react";

function TeacherCard() {
    const TeachersList = [
        {
            id: "1",
            name: "Afonso Delgado",
            genre: "M",
            age: "25",
            country: "Portugal",
            phone_number: "912345678",
            email: "afonsod@gmail.com",
            known_langs: { "Portuguese": "native", "English": "C1", "French": "B2" },
            lecture_langs: { "Portuguese": "native", "French": "B2" },
            description: "I am a teacher",
            certifications: ["Cambridge C1", "DELF B2", "DALF C1"],
            price: "10",
            rating: "4.8",
            reviews: "425",
            profileimg: "http://www.utcswindon.co.uk/wp-content/uploads/2018/04/Ben.jpg"
        },
        {
            id: "2",
            name: "Maria Silva",
            genre: "F",
            age: "29",
            country: "Portugal",
            phone_number: "943452428",
            email: "mariasilva@gmail.com",
            known_langs: { "Portuguese": "native", "Spanish": "A1", "English": "C1" },
            lecture_langs: { "English": "C1" },
            description: "Language Entusiast",
            certifications: ["Cambridge C1", "DELF A1"],
            price: "17",
            rating: "4.4",
            reviews: "96",
            profileimg: "https://www.fairviewer.org/wp-content/uploads/2017/12/1Q01257.jpg"
        },
        {
            id: "3",
            name: "Maria Silva",
            genre: "F",
            age: "29",
            country: "Portugal",
            phone_number: "943452428",
            email: "mariasilva@gmail.com",
            known_langs: { "Portuguese": "native", "Spanish": "A1", "English": "C1" },
            lecture_langs: { "Spanish": "A1" },
            description: "Language Entusiast",
            certifications: ["Cambridge C1", "DELF A1"],
            price: "25",
            rating: "4.4",
            reviews: "96",
            profileimg: "https://www.fairviewer.org/wp-content/uploads/2017/12/1Q01257.jpg"
        },
    ]
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
            {TeachersList.map((teacher) => (
                <div className="card lg:card-side rounded-100 shadow-xl m-10" style={{ backgroundColor: 'rgb(240, 240, 240)' }}>
                    <figure><img className="w-20" src={teacher.profileimg} alt="Album" /></figure>
                    <div className="card-body">
                        <div class="grid grid-cols-4 gap-4">
                            <div>
                                <h1 className="card-title mb-5">{teacher.name}
                                    <div class="card-actions">
                                        <div class="badge badge-outline text-green-600/100 bg-base-100 hover:text-green-700">{teacher.country}</div>
                                    </div>
                                </h1>
                                <p className="mb-2">Description:{teacher.description}</p>

                                <div class="card-actions mb-2">
                                    <a>Lectures:</a>
                                    {Object.keys(teacher.lecture_langs).map((lang) => (
                                        <div class="badge badge-outline">{lang}</div>
                                    ))}
                                </div>

                                <p>💰 Price: {teacher.price}$</p>

                            </div>
                            <div>
                                <h2 className="font-bold">Known Languages</h2>
                                {Object.keys(teacher.known_langs).map((lang) => (
                                    <div>
                                        <span className="indent-4">{lang} [{teacher.known_langs[lang]}]</span><br/>
                                        <span><progress class={proficiencybar(teacher, lang)[1]} value={proficiencybar(teacher, lang)[0]} max="100"></progress></span>
                                    </div>
                                ))}
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