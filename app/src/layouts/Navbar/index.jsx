import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import OurLogo from '../../static/images/logo.png'
import User from '../../static/images/user.svg'
import HomeButton from '../../static/images/home.svg'

import { useUserStore } from '../../stores/useUserStore';
import { useDatabaseStore } from '../../stores/useDatabaseStore';

function Navbar() {

    const loggedIn = useUserStore((state) => state.logged_in);

    const  LanguagesAvailable = useDatabaseStore((state) => state.LanguagesAvailable);

    const imgToFlag = (img) => {
        return (
            <img className="rounded" src={img} width="40px" />
        );
    }

    const [langFlag, setLangFlag] = useState(imgToFlag(LanguagesAvailable[1].flagimg))

    const [langName, setLangName] = useState('') // search bar

    const [foundLang, setFoundLang] = useState(LanguagesAvailable) // search results

    const switchLang = (lang) => {
        if (lang === "en") {
            setLangFlag(imgToFlag(LanguagesAvailable[0].flagimg))
        } else if (lang === "pt") {
            setLangFlag(imgToFlag(LanguagesAvailable[1].flagimg))
        } else if (lang === "fr") {
            setLangFlag(imgToFlag(LanguagesAvailable[2].flagimg))
        }
    }

    const filter = (e) => {
        const keyword = e.target.value;
        if (keyword !== "") {
            const results = LanguagesAvailable.filter((lang) => {
                return lang.fullname.toLowerCase().startsWith(keyword.toLowerCase());
            });
            setFoundLang(results);
        } else {
            setFoundLang(LanguagesAvailable);
        }
        setLangName(keyword);
    }

    function logout() {
        useUserStore.getState().logout()
    }

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to={"/"} className="btn btn-ghost normal-case text-xl gap-4"><img src={OurLogo} width="45px" />SpeakEz</Link>
                </div>
                {loggedIn ? (
                    <>
                        <div className="flex-none">
                            <Link to={"/homepage"} className="dropdown dropdown-end">
                                <span className="btn btn-ghost normal-case text-xl"><img src={HomeButton} width="40px" /></span>
                            </Link>

                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost">
                                    <div className="indicator">
                                        {langFlag}
                                        {/* <span className="badge badge-sm indicator-item">3</span> */}
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <input
                                            type="search"
                                            value={langName}
                                            onChange={filter}
                                            placeholder="Search language"
                                            className="input input-bordered w-full"
                                        />
                                    </li>
                                    {foundLang && foundLang.length > 0 ? (
                                        foundLang.map((lang) => (
                                            <li key={lang.id}>
                                                <span onClick={() => switchLang(lang.id)} className="btn btn-ghost normal-case text-xl">{lang.name}<img className="rounded" src={lang.flagimg} width="40px" /></span>
                                            </li>
                                            // {LanguagesAvailable.map((lang) => (
                                            //     <li key={lang.id}>
                                            //         <span onClick={() => switchLang(lang.id)} className="btn btn-ghost normal-case text-xl">{lang.name}<img className="rounded" src={lang.flagimg} width="40px" /></span>
                                            //     </li>
                                        ))) : (
                                        <li>
                                            <span className="btn btn-ghost normal-case text-xl">No results found</span>
                                        </li>
                                    )}
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
                    </>
                ) : (
                    <>
                        <div className="flex-none">
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost">
                                    <div className="indicator">
                                        {langFlag}
                                        {/* <span className="badge badge-sm indicator-item">3</span> */}
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <input
                                            type="search"
                                            value={langName}
                                            onChange={filter}
                                            placeholder="Search language"
                                            className="input input-bordered w-full"
                                        />
                                    </li>
                                    <div className='overflow-y-auto max-h-60 ' style={{
                                        marginTop: '10px', textAlign: 'center'
                                    }}>
                                        {foundLang && foundLang.length > 0 ? (
                                            foundLang.map((lang) => (
                                                <li key={lang.id}>
                                                    <span onClick={() => switchLang(lang.id)} className="btn btn-ghost normal-case text-xl">{lang.name}<img className="rounded" src={lang.flagimg} width="40px" /></span>
                                                </li>
                                                // {LanguagesAvailable.map((lang) => (
                                                //     <li key={lang.id}>
                                                //         <span onClick={() => switchLang(lang.id)} className="btn btn-ghost normal-case text-xl">{lang.name}<img className="rounded" src={lang.flagimg} width="40px" /></span>
                                                //     </li>
                                            ))) : (
                                            <div>No results found</div>
                                        )}
                                    </div>
                                </ul>
                            </div>
                            <div>
                                <Link to="/login">
                                    <button className="btn btn-ghost normal-case text-xl gap-4">
                                        Login / Register 
                                    <div className="w-10 rounded-full">
                                        <img src={User} />
                                    </div>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default Navbar;