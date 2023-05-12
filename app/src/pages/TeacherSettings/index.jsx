import React from "react";
import { useState, useEffect } from "react";
import { useDatabaseStore } from "../../stores/useDatabaseStore";
import { useStudentStore } from "../../stores/useStudentStore";
import { Link } from "react-router-dom";


import AddLanguage from "../StudentSettings/AddLanguage";
import Warning from "../../components/Warning";


const TeacherSettings = () => {
    const [knownLang, setNumLang] = useState(1)
    const [warning, setWarning] = useState({ on: 0, color: "alert-warning", message: "You need to have at least one language!" })
    const addLang = () => {
        setNumLang(knownLang + 1)
    }


    const removeLang = () => {
        if (knownLang > 1) {
            setNumLang(knownLang - 1)
        } else {
            showWarning({ color: "alert-error", message: "You need to have at least one language!" })

        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setWarning({ on: 0, color: "alert-error", message: "You need to have at least one language!" })
        }, 3000);
        return () => clearTimeout(timer);
    }, [warning]);

    const [certificates, setNumCertificates] = useState(1)

    const addCertificate = () => {
        setNumCertificates(certificates + 1)
    }

    const removeCertificate = () => {
        if (certificates > 1) {
            setNumCertificates(certificates - 1)
        } else {
            showWarning({ color: "alert-error", message: "If you don't have any certifications leave this space blank!" })
        }
    }



    const showWarning = (props) => {
        setWarning({ on: 1, color: props.color, message: props.message })


    }

    return (
        <div className="mx-auto flex w-full max-w-[80rem] grow flex-col px-1 py-8 sm:px-5 md:py-16">
            <h1 className="text-4xl mt-10 mb-3 justify-start ">Personalize your teacher profile:</h1>
            {warning.on == 1 && (<Warning color={warning.color} message={warning.message} />
            )}
            <div className="grid grid-cols-[50%_50%] ">
                <div className="form-control mr-10">
                    <form>
                        <div class="mb-6">
                            <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                            <input type="floating_language" id="language" class="bg-neutral border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="999999999" required />
                        </div>

                        <div class="mb-6">
                            <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Certificates</label>

                            {Array.from(Array(certificates), (e, i) => {

                                return (
                                    <input type="floating_language" id={i} class="bg-neutral mb-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Certificate XY" required />

                                );
                            }
                            )}
                        </div>
                        <div className="flex justify-center">
                            <btn onClick={addCertificate} className="btn scale-75 btn-warning mb-5">Add another certificate</btn>
                            <btn onClick={removeCertificate} className="btn scale-75 btn-primary mb-5 ">Remove certificate</btn>
                        </div>

                        <div class="mb-6">
                            <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                            <textarea id="message" rows="4" class="bg-neutral border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Describe Yourself (your description will be displayed to future students)" required />
                        </div>
                        <div class="mb-6">
                            <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile Image</label>
                            <input type="" id="language" class="bg-neutral border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Only URLs" />
                        </div>


                    </form>
                    
                    <div className="mt-10"/>
                    <button class="text-white mr-2 bg-secondary hover:bg-primary hover:scale-105 transition-transform duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save edition</button>
                    {/* <Link to="/"> */}
                    <button class="text-white bg-error hover:bg-red-500 hover:scale-105 transition-transform duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Discard Changes</button>
                    {/* </Link> */}
                </div>
                <div>
                    <h1 className="text-2xl mt-10 mb-3 justify-start ">List the languages you know:</h1>
                    {Array.from(Array(knownLang), (e, i) => {

                        return (
                            <AddLanguage cards={i} />
                        );
                    }
                    )}
                    <btn onClick={addLang} className="btn btn-warning mt-10 mb-3 mr-2">Add another language</btn>
                    <btn onClick={removeLang} className="btn btn-primary mt-10 mb-3">Remove a language</btn>

                </div>
            </div>


        </div>
    );
}

export default TeacherSettings;