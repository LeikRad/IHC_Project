import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import OurLogo from "../../static/images/logo.png";
import User from "../../static/images/user.svg";
import Login from "../../static/images/Login.png";
import HomeButton from "../../static/images/home.svg";
import { HiUser, HiChat } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { useUserStore } from "../../stores/useUserStore";
import { useDatabaseStore } from "../../stores/useDatabaseStore";
import { default as Chat } from "../../components/Chat";
import { MdAddBox } from "react-icons/md";

function Navbar() {
    const loggedIn = useUserStore((state) => state.logged_in);
    const false_notifications = useUserStore(
        (state) => state.false_notifications
    );

    const is_student = useUserStore((state) => state.is_student);
    const registed = useUserStore((state) => state.completed_registation);

    console.log(false_notifications);
    const LanguagesAvailable = useDatabaseStore(
        (state) => state.LanguagesAvailable
    );

    const imgToFlag = (img) => {
        return <img className="rounded" src={img} width="40px" />;
    };

    const [langFlag, setLangFlag] = useState(
        imgToFlag(LanguagesAvailable[0].flagimg)
    );

    const [langName, setLangName] = useState(""); // search bar

    const [foundLang, setFoundLang] = useState(LanguagesAvailable); // search results

    const switchLang = (lang) => {
        if (lang === "en") {
            setLangFlag(imgToFlag(LanguagesAvailable[0].flagimg));
        } else if (lang === "pt") {
            setLangFlag(imgToFlag(LanguagesAvailable[1].flagimg));
        } else if (lang === "fr") {
            setLangFlag(imgToFlag(LanguagesAvailable[2].flagimg));
        }
    };

    const filter = (e) => {
        const keyword = e.target.value;
        if (keyword !== "") {
            const results = LanguagesAvailable.filter((lang) => {
                return lang.fullname
                    .toLowerCase()
                    .startsWith(keyword.toLowerCase());
            });
            setFoundLang(results);
        } else {
            setFoundLang(LanguagesAvailable);
        }
        setLangName(keyword);
    };

    function logout() {
        useUserStore.getState().logout();
    }

    return (
        <>
            <div className="navbar bg-base-200 z-10">
                <div className="flex-1">
                    <Link
                        to={"/"}
                        className="btn btn-ghost normal-case text-xl gap-4"
                    >
                        <img src={OurLogo} width="45px" />
                        SpeakEz
                    </Link>
                </div>
                {loggedIn ? (
                    <>
                        {!is_student ? (
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="">
                                    <div className="indicator btn btn-ghost">
                                        {registed ? (<Link to={"/announce"}>
                                            <MdAddBox className="w-10 h-10" />
                                        </Link>) : (
                                            <Link to={"/settings"}>
                                                <MdAddBox className="w-10 h-10" />
                                            </Link>
                                        )}

                                    </div>
                                </label>
                            </div>
                        ) : (
                            null)}
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost">
                                <div className="indicator">
                                    {langFlag}
                                    {/* <span className="badge badge-sm indicator-item">3</span> */}
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                            >
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
                                            <span
                                                onClick={() =>
                                                    switchLang(lang.id)
                                                }
                                                className="btn btn-ghost normal-case text-xl"
                                            >
                                                {lang.name}
                                                <img
                                                    className="rounded"
                                                    src={lang.flagimg}
                                                    width="40px"
                                                />
                                            </span>
                                        </li>
                                        // {LanguagesAvailable.map((lang) => (
                                        //     <li key={lang.id}>
                                        //         <span onClick={() => switchLang(lang.id)} className="btn btn-ghost normal-case text-xl">{lang.name}<img className="rounded" src={lang.flagimg} width="40px" /></span>
                                        //     </li>
                                    ))
                                ) : (
                                    <li>
                                        <span className="btn btn-ghost normal-case text-xl">
                                            No results found
                                        </span>
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div className="flex-none gap-2 px-3">
                            <Link to={"/homepage"}>
                                <span className="btn btn-ghost normal-case text-xl">
                                    <AiFillHome className="w-10 h-10" />
                                </span>
                            </Link>

                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="">
                                    <div className="indicator btn btn-ghost">
                                        <span className={`badge badge-sm indicator-item bg-accent w-5 h-5 -translate-x-2 translate-y-[0.25rem] ${false_notifications == 0 ? "hidden" : "block"}`}>
                                            {false_notifications}
                                        </span>
                                        <HiChat className="w-10 h-10" />
                                    </div>
                                    <div className="menu dropdown-content bg-base-100 rounded-box w-52">
                                        <Chat />
                                    </div>
                                </label>
                            </div>
                            <div className="dropdown dropdown-end">
                                <label
                                    tabIndex={0}
                                    className="btn btn-ghost avatar"
                                >
                                    <HiUser className="w-10 h-10" />
                                </label>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 border bg-neutral"
                                >
                                    <li>
                                        <Link
                                            to={"/profile"}
                                            className="justify-between"
                                        >
                                            Profile
                                            <span className="badge">New</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={"/settings"}
                                            className="justify-between"
                                        >
                                            <a>Personalize</a>
                                        </Link>
                                    </li>
                                    <li
                                        className="rounded-box overflow-hidden hover:bg-error transition-colors ease-in"
                                        onClick={logout}
                                    >
                                        <a>Logout</a>
                                    </li>
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
                                <ul
                                    tabIndex={0}
                                    className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                                >
                                    <li>
                                        <input
                                            type="search"
                                            value={langName}
                                            onChange={filter}
                                            placeholder="Search language"
                                            className="input input-bordered w-full"
                                        />
                                    </li>
                                    <div
                                        className="overflow-y-auto max-h-60 "
                                        style={{
                                            marginTop: "10px",
                                            textAlign: "center",
                                        }}
                                    >
                                        {foundLang && foundLang.length > 0 ? (
                                            foundLang.map((lang) => (
                                                <li key={lang.id}>
                                                    <span
                                                        onClick={() =>
                                                            switchLang(lang.id)
                                                        }
                                                        className="btn btn-ghost normal-case text-xl"
                                                    >
                                                        {lang.name}
                                                        <img
                                                            className="rounded"
                                                            src={lang.flagimg}
                                                            width="40px"
                                                        />
                                                    </span>
                                                </li>
                                                // {LanguagesAvailable.map((lang) => (
                                                //     <li key={lang.id}>
                                                //         <span onClick={() => switchLang(lang.id)} className="btn btn-ghost normal-case text-xl">{lang.name}<img className="rounded" src={lang.flagimg} width="40px" /></span>
                                                //     </li>
                                            ))
                                        ) : (
                                            <div>No results found</div>
                                        )}
                                    </div>
                                </ul>
                            </div>
                            <div>
                                <Link to="/login">
                                    <button className="btn btn-ghost normal-case text-xl gap-4">
                                        Login / Register
                                        <div className="w-8 rounded-full">
                                            <img src={Login} />
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
