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
            languages: { "Portuguese": "native", "English": "C1", "French": "B2" },
            description: "I am a teacher",
            certifications: ["Cambridge C1", "DELF B2", "DALF C1", "DELE C1"],
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
            languages: { "Portuguese": "native", "English": "C1", "Spanish": "A1" },
            description: "Language Entusiast",
            certifications: ["Cambridge C1", "DELF A1"],
            price: "17",
            rating: "4.4",
            reviews: "96",
            profileimg: "https://www.fairviewer.org/wp-content/uploads/2017/12/1Q01257.jpg"
        },
    ]
    const Emoji = ["📝","📌", "📚", "🔎", "📎","📊", "📜", "🪪"]

    const pickEmoji = () => {
        return Emoji[Math.floor(Math.random() * Emoji.length)]
    }

    return (
        <div>
            {TeachersList.map((teacher) => (
                <div className="card lg:card-side bg-base-100 rounded-100 shadow-xl">
                    <figure><img className="w-20" src={teacher.profileimg} alt="Album" /></figure>
                    <div className="card-body">
                        <div class="grid grid-cols-4 gap-4">
                            <div>
                                <h1 className="card-title">{teacher.name}</h1>
                                <p>Description:{teacher.description}</p>
                                <p>💰 Valor: {teacher.price}$</p>
                            </div>
                            <div>
                                {Object.keys(teacher.languages).map((lang) => (
                                    <p>{lang.padEnd(15, " ")} <progress class="items-end progress progress-info w-56" value={Math.random() * 100} max="100"></progress></p>
                                ))}
                            </div>
                            <div>
                                <h2 className="font-bold">Certifications</h2>
                                {teacher.certifications.map((cert) => (
                                    <p>{pickEmoji()} {cert}</p>
                                ))}
                            </div>
                            <div>
                                <p>⭐ Rating: {teacher.rating}</p>
                                <p>⭐ Reviews: {teacher.reviews}</p>

                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View Profile</button>
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