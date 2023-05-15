import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import { useDatabaseStore } from "../../stores/useDatabaseStore";
import { useUserStore } from "../../stores/useUserStore";

const Announcement = () => {
    const [lang, setLang] = useState("");
    const [level, setLevel] = useState("");
    const [price, setPrice] = useState("");
    const [negotiable, setNegotiable] = useState(false);
    const [description, setDescription] = useState("");

    const id = useDatabaseStore((state) => state.Announcements).length + 1;
    const name = useUserStore((state) => state.first_name) + " " + useUserStore((state) => state.last_name);
    const profileimg = useUserStore((state) => state.image);
    const country = useUserStore((state) => state.nationality);
    const email = useUserStore((state) => state.email);
    const phone = useUserStore((state) => state.phone);
    const known_langs = useUserStore((state) => state.list_of_known_languages);
    const certifications = useUserStore((state) => state.list_of_certifications);
    
    const announcements = useDatabaseStore((state) => state.Announcements);

    const onChangeLang = (e) => {
        setLang(e.target.value);
    };

    const onChangeLevel = (e) => {
        setLevel(e.target.id);
    };

    const onChangePrice = (e) => {
        setPrice(e.target.value);
    };

    const onChangeNegotiable = (e) => {
        setNegotiable(e.target.value);
    };

    const onChangeDescription = (e) => {
        setDescription(e.target.value);
    };


    const submitAnnouncement = () => {
        console.log(announcements)
        console.log("id language = " + lang)
        console.log("id level = " + level)
        console.log("price = " + price)
        console.log("negotiable = " + negotiable)
        console.log("description = " + description)

        const data = {
            id: id,
            name: name,
            country: country,
            email: email,
            phone_number: phone,
            known_langs: known_langs,
            lecture_langs: lang,
            description: description,
            certifications: certifications,
            price: price,
            negotiable: negotiable,
            rating: 0,
            reviews: 0,
            profileimg: profileimg,
            want_to_teach:[level],
        }

        useDatabaseStore.getState().addAnnouncement(data)

        console.log(announcements)
    }

    return (
        <div>
            <h1 className="text-6xl mb-10">New Announcement</h1>

            <div className="form-control">
                <form>
                    <div className="mb-6">
                        <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Language</label>
                        <input type="floating_language" onChange={onChangeLang} id="language" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="English" required />
                    </div>
                    <div className="space-y-2 mb-6">
                        <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Want to Teach to</label>
                        <label className="inline-flex items-center">
                            <input type="radio" onChange={onChangeLevel} id="Basic Level" name="options" className="form-radio text-indigo-600" />
                            <span className="ml-2">Basic Level Students</span>
                        </label>
                        <br />
                        <label className="inline-flex items-center">
                            <input type="radio"  onChange={onChangeLevel} id="Intermediate Level" name="options" className="form-radio text-indigo-600" />
                            <span className="ml-2">Intermediate Level Students</span>
                        </label>
                        <br />
                        <label className="inline-flex items-center">
                            <input type="radio"  onChange={onChangeLevel} id="Advanced Level" name="options" className="form-radio text-indigo-600" />
                            <span className="ml-2">Advanced Level Students</span>
                        </label>
                        <br />
                        <label className="inline-flex items-center">
                            <input type="radio" onChange={onChangeLevel} id="Anyone" name="options" className="form-radio text-indigo-600" />
                            <span className="ml-2">Anyone</span>
                        </label>
                        <br />
                    </div>
                    <div className="mb-3">
                        <label for="text" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Price  </label>
                        <input type="price" id="price" onChange={onChangePrice} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="10" required />  $
                    </div>
                    <div className="flex items-start mb-6">
                        <label for="remember" className="text-sm font-medium text-gray-900 dark:text-gray-300 mr-2">Negotiable</label>
                        <div className="flex items-center h-5">
                            <input id="negotiable" type="checkbox" onChange={onChangeNegotiable} value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"/>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Short Description</label>
                        <textarea id="message" rows="4" onChange={onChangeDescription} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="What differentiate you from the competition"></textarea>
                    </div>  
                    <Link to="/">      
                        <button className="text-white bg-error hover:bg-red-500 hover:scale-105 transition-transform duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cancel</button>
                    </Link>
                </form>
                <button onClick={submitAnnouncement} className="text-white mr-2 bg-secondary hover:bg-primary hover:scale-105 transition-transform duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Publish</button>

            </div>
            
        </div>

    );
}

export default Announcement;