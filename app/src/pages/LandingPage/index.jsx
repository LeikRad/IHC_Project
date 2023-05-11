import React from "react";
import Footer from "../../components/Footer";

const LandingPage = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(https://wallpaperaccess.com/full/1155165.png)` }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">SpeakEz</h1>
                        <p className="mb-5">Discover the joy of learning languages together at SpeakEz - the platform that connects passionate teachers with eager students for a truly immersive language journey.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LandingPage;