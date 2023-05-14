import React from "react";

import { useUserStore } from '../../stores/useUserStore';
import { useDatabaseStore } from '../../stores/useDatabaseStore';

const AddLanguage = (props) => {
    
    const  LanguagesAvailable = useDatabaseStore((state) => state.LanguagesAvailable);

    const proficiency = ["Native", "Fluent", "Advanced", "Intermediate", "Beginner"]
    return (
        <div>
            <div className="card flex-shrink-0 w-full max-w-[80%] shadow-2xl bg-accent/30 shadow-xl mb-6">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label"> 
                            <span className="label-text">Language</span>
                        </label>
                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled="disabled" selected="selected">Choose a language</option>
                            {LanguagesAvailable.map((lang) => {
                                const compound = lang.name + props.cards
                                return (
                                    <option id={compound} value={lang.name} >{lang.fullname}</option>
                                );
                            })}


                        </select>

                        <label className="label"> 
                            <span className="label-text">Proficiency</span>
                        </label>
                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled="disabled" selected="selected">Choose a language</option>
                            
                            {proficiency.map((prof) => {
                                const compound = prof + props.cards
                                return (
                                    <option id={compound} value={prof}>{prof}</option>
                                );
                            })}


                        </select>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddLanguage;