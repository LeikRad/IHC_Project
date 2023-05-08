import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import OurLogo from '../static/images/logo.png'
import User from '../static/images/user.svg'
import HomeButton from '../static/images/home.svg'


function Navbar() {
    const LanguagesAvailable = [
        {
            id: "en",
            name: "EN",
            flagimg: "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg",
        },
        {
            id: "pt",
            name: "PT",
            flagimg: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1280px-Flag_of_Portugal.svg.png",
        },
        {
            id: "fr",
            name: "FR",
            flagimg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Flag_of_France_%28lighter_variant%29.svg/1280px-Flag_of_France_%28lighter_variant%29.svg.png",
        },

    ]
    const imgToFlag = (img) => {
        return (
            <img className="rounded" src={img} width="40px" />
        );
    }

 
    const [langFlag, setLangFlag] = useState(imgToFlag(LanguagesAvailable[1].flagimg))
    const switchLang = (lang) => {
        if (lang === "en") {
            setLangFlag(imgToFlag(LanguagesAvailable[0].flagimg))
        } else  if (lang === "pt"){
            setLangFlag(imgToFlag(LanguagesAvailable[1].flagimg))
        }else if (lang === "fr"){
            setLangFlag(imgToFlag(LanguagesAvailable[2].flagimg))
        }
    }

    return (
        <div className="navbar bg-primary">
            <div className="flex-1">
                <Link to={"/"} className="btn btn-ghost normal-case text-xl"><img src={OurLogo} width="45px" />SpeakEz</Link>
            </div>
            <div className="flex-none">
                {/* <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span className="badge badge-sm indicator-item">8</span>
                </div>
                </label>
                <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                    <button className="btn btn-primary btn-block">View cart</button>
                </div>
                </div>
                </div>
                </div> */}
                <Link to={"/"} className="dropdown dropdown-end">
                    <span className="btn btn-ghost normal-case text-xl"><img src={HomeButton} width="40px" /></span>
                </Link>

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost">
                        <div className="indicator">
                            {langFlag}
                            <span className="badge badge-sm indicator-item">3</span>
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {LanguagesAvailable.map((lang) => (
                            <li>
                                <span onClick={() => switchLang(lang.id)} className="btn btn-ghost normal-case text-xl">{lang.name}<img className="rounded" src={lang.flagimg} width="40px" /></span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={User} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link to={"/profile"} className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;