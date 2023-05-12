import React, { useEffect } from "react";

import { useStudentStore } from '../../stores/useStudentStore';
import { useDatabaseStore } from '../../stores/useDatabaseStore';
import AddLanguage from "./AddLanguage";
import { useState } from "react";
import Warning from "../../components/Warning";

const StudentSettings = () => {
    const [knownLang, setNumLang] = useState(1)
    const [warning, setWarning] = useState({ on: 0, color: "alert-warning", message: "You need to have at least one language!" })
    const addLang = () => {
        setNumLang(knownLang + 1)
    }

    const [learnLang, setNumLearnLang] = useState(1)

    const addLearnLang = () => {
        setNumLearnLang(learnLang + 1)
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



    const removeLearnLang = () => {
        if (learnLang > 1) {
            setNumLearnLang(learnLang - 1)
        }else{
            showWarning({ color: "alert-error", message: "You need to have at least one language!" })
        }
    }

    const showWarning = (props) => {
        setWarning({ on: 1, color: props.color, message: props.message })


    }

    return (
        <div className="mx-auto flex w-full max-w-[80rem] grow flex-col px-1 py-8 sm:px-5 md:py-16">
            <h1 className="text-4xl mt-10 mb-3 justify-start ">Personalize your student profile:</h1>
             {warning.on == 1 && (<Warning color={warning.color} message={warning.message} />
            )}<div className="grid grid-cols-[50%_50%] ">
                <div style={{ alignItems: 'center' }}>
                    <h1 className="text-2xl mt-10 mb-3">List the languages you want to learn:</h1>
                    {Array.from(Array(learnLang), (e, i) => {

                        return (
                            <AddLanguage cards={i} />

                        );
                    }
                    )}
                    <btn onClick={addLearnLang} className="btn btn-warning mt-10 mb-3 mr-2">Add another language</btn>
                    <btn onClick={removeLearnLang} className="btn btn-primary mt-10 mb-3 ">Remove a language</btn>
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
};

export default StudentSettings;