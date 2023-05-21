import React from "react";
import { useState, useEffect } from "react";
import { useDatabaseStore } from "../../stores/useDatabaseStore";
import { useUserStore } from "../../stores/useUserStore";
import { Link } from "react-router-dom";


import AddLanguage from "../StudentSettings/AddLanguage";
import Warning from "../../components/Warning";


const TeacherSettings = () => {
    const [knownLang, setNumLang] = useState(1)
    const [warning, setWarning] = useState({ on: 0, color: "alert-warning", message: "You need to have at least one language!" })
    const [registed, setRegisted] = useState(useUserStore((state) => state.completed_registation));

    const[phone, setPhone] = useState("")

    const changePhone = (e) => {
        setPhone(e.target.value)
    }

    const [certifications, setCertifications] = useState([])

    const changeCertification = (certification) => {
        setCertifications([...certifications, "XPTO"])
    }

    const [description, setDescription] = useState("")
    const changeDescription = (e) => {
        setDescription(e.target.value)
    }

    const [profile_picture, setProfile_picture] = useState("")
    const changeImage = (e) => {
        setProfile_picture(e.target.value)
    }

    
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

    const CompleteRegistation = () => {
        submitProfile();
        useUserStore.getState().add_registation();
    }

    const submitProfile = () => {

        const data = {  
            phone: phone,
            certifications: certifications,
            description: description,
            profile_picture: profile_picture,
            list_of_know_languages: { "Example1": "native", "Example2": "C1", "Example3": "B2" },
        }
        console.log("profile submitted: ")
        console.log(data)

        useUserStore.getState().update_user(data)
        
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setRegisted({ on: 0, color: "alert-error", message: "You need to have at least one language!" })
        }, 7000);
        return () => clearTimeout(timer);
    }, []);
    

    return (
        <div className="mx-auto flex w-full max-w-[80rem] grow flex-col px-1 py-8 sm:px-5 md:py-16">
            <h1 className="text-4xl mt-10 mb-3 justify-start ">Personalize your teacher profile:</h1>
            {warning.on === 1 && (<Warning color={warning.color} message={warning.message} />)}

            {!registed && (<Warning color="alert-warning" message="You need to complete your registation before you can start teaching!" />)}

            <div className="grid grid-cols-[50%_50%] ">
                <div className="form-control mr-10">
                    <form>
                        <div className="mb-6">
                            <label for="text" className="block mb-2 text-sm font-medium label-text">Phone Number</label>
                            <input type="floating_language" onChange={changePhone} id="language" className="bg-neutral border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="937000999" required />
                        </div>

                        <div className="mb-6">
                            <label for="text" className="block mb-2 text-sm font-medium label-text">Certificates</label>

                            {Array.from(Array(certificates), (e, i) => {

                                return (
                                    <input type="floating_language" onChange={changeCertification} id={i} className="bg-neutral mb-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Certificate XY" required />

                                );
                            }
                            )}
                        </div>
                        <div className="flex justify-center">
                            <btn onClick={addCertificate} className="btn scale-75 btn-warning mb-5">Add another certificate</btn>
                            <btn onClick={removeCertificate} className="btn scale-75 btn-primary mb-5 ">Remove certificate</btn>
                        </div>

                        <div className="mb-6">
                            <label for="text" className="block mb-2 text-sm font-medium label-text">Description</label>
                            <textarea id="message" onChange={changeDescription} rows="4" className="bg-neutral border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Describe Yourself (your description will be displayed to future students)" required />
                        </div>
                        <div className="mb-6">
                            <label for="text" className="block mb-2 text-sm font-medium label-text">Profile Image</label>
                            <input type="" id="profileimg" onChange={changeImage} className="bg-neutral border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Only URLs" />
                        </div>


                    </form>

                    <div className="mt-10"/>
                    <Link to="/homepage">
                    <button  onClick={CompleteRegistation} className="text-white mr-3 bg-secondary hover:bg-primary hover:scale-105 transition-transform duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center ">Save edition</button>
                    
                    
                    {/* <Link to="/"> */}
                    <button className="text-white bg-error hover:bg-red-500 hover:scale-105 transition-transform duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center ">Discard Changes</button>
                    {/* </Link> */}
                    </Link>
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