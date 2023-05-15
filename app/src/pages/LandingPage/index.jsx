import React from "react";

const LandingPage = () => {
    return (
        <div>
            <svg
                    viewBox="0 0 100 100"
                    className="absolute inset-0 h-[calc(100vh-65.5px)] w-screen -z-10"
                >
                    <defs>
                        <radialGradient
                            id="gradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                        >
                            <stop stopColor="#df4b57" offset="0%" />
                            <stop stopColor="#ffcc6c" offset="49%" />
                            <stop stopColor="#c2e074" offset="100%" />
                        </radialGradient>
                    </defs>
                    <path
                        filter="url(#sg-blur-2)"
                        fill="url(#gradient)"
                        d="M49.2,-11.6C54.4,0,42.8,21.4,23.9,35.8C5,50.2,-21.1,57.6,-35.6,47.4C-50,37.3,-52.8,9.6,-45,-5.7C-37.1,-21,-18.6,-23.8,1.7,-24.4C22,-25,44,-23.2,49.2,-11.6Z"
                        transform="translate(50 50)"
                    />
                </svg>
            <div className="flex flex-col justify-center text-center items-center h-[calc(100vh-65.5px)] backdrop-blur-[100px]">
                <div className="max-w-md ">
                    <h1 className="mb-5 text-5xl font-bold">SpeakEz</h1>
                    <p className="mb-5">
                        Discover the joy of learning languages together at
                        SpeakEz - the platform that connects passionate teachers
                        with eager students for a truly immersive language
                        journey.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
