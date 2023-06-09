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

    const id = '' + (useDatabaseStore((state) => state.Announcements).length + 1);
    const name =
        useUserStore((state) => state.first_name) +
        " " +
        useUserStore((state) => state.final_name);
    const profileimg = useUserStore((state) => state.image);
    const country = useUserStore((state) => state.nationality);
    const email = useUserStore((state) => state.email);
    const phone = useUserStore((state) => state.phone);
    const known_langs = useUserStore((state) => state.list_of_know_languages);
    const certifications = useUserStore(
        (state) => state.list_of_certifications
    );

    console.log("phone = " + phone);
    console.log(known_langs);
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
        console.log(announcements);
        console.log("name = " + name);
        console.log("id language = " + lang);
        console.log("id level = " + level);
        console.log("price = " + price);
        console.log("negotiable = " + negotiable);
        console.log("description = " + description);

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
            want_to_teach: [level],
            reviews2: [],
        };

        useDatabaseStore.getState().addAnnouncement(data);

        createAnnouncement();

        console.log(data);
        // redirect to teacher main page

        // window.location.href = "/homepage";
    };

    const createAnnouncement = () => {
        useUserStore.getState().add_announcement();
    }

    return (
        <div>
            <h1 className="text-6xl mb-10 px-20 py-10">New Announcement</h1>

            <div className="form-control flex px-20 min-h-[calc(100vh-65.5px)]">
                <form>
                    <div className="mb-6">
                        <label
                            for="text"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Language
                        </label>
                        <input
                            type="floating_language"
                            onChange={onChangeLang}
                            id="language"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="English"
                            required
                        />
                    </div>
                    <div className="space-y-2 mb-6">
                        <label
                            for="text"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Want to Teach to
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                onChange={onChangeLevel}
                                id="Basic Level"
                                name="options"
                                className="form-radio text-indigo-600"
                                required
                            />
                            <span className="ml-2">Basic Level Students</span>
                        </label>
                        <br />
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                onChange={onChangeLevel}
                                id="Intermediate Level"
                                name="options"
                                className="form-radio text-indigo-600"
                                required
                            />
                            <span className="ml-2">
                                Intermediate Level Students
                            </span>
                        </label>
                        <br />
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                onChange={onChangeLevel}
                                id="Advanced Level"
                                name="options"
                                className="form-radio text-indigo-600"
                                required
                            />
                            <span className="ml-2">
                                Advanced Level Students
                            </span>
                        </label>
                        <br />
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                onChange={onChangeLevel}
                                id="Anyone"
                                name="options"
                                className="form-radio text-indigo-600"
                                required
                            />
                            <span className="ml-2">Anyone</span>
                        </label>
                        <br />
                    </div>
                    <div className="mb-3">
                        <label
                            for="text"
                            className="mb-2 text-sm font-medium text-gray-900"
                        >
                            Price{" "}
                        </label>
                        <input
                            type="price"
                            id="price"
                            onChange={onChangePrice}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-10 p-2.5 "
                            placeholder="10"
                            required
                        />{" "}
                        $
                    </div>
                    <div className="flex items-start mb-6">
                        <label
                            for="remember"
                            className="text-sm font-medium text-gray-900"
                        >
                            Negotiable
                        </label>
                        <div className="flex items-center h-5">
                            <input
                                id="negotiable"
                                type="checkbox"
                                onChange={onChangeNegotiable}
                                value=""
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label
                            for="message"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Short Description
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            onChange={onChangeDescription}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="What differentiate you from the competition"
                        ></textarea>
                    </div>
                </form>
                <div className="flex">
                    <Link to="/homepage">
                        <button className="text-white bg-error hover:bg-red-500 hover:scale-105 transition-transform duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                            Cancel
                        </button>
                    </Link>

                    <div className="px-3">
                        <Link to="/homepage">
                            <button onClick={submitAnnouncement} className=" text-white bg-success hover:bg-primary hover:scale-105 transition-full  duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                                Publish
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Announcement;
