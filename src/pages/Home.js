import React from 'react';

//Import stylesheet
import '../assets/css/pages/Home.css';

const img = require('../assets/images/Photo_Profile.jpg');

const Home = () => {
    return (
        <>
            <div className="bannerContainer">
                <div className="banner">
                </div>
            </div>
            <div className="profileImageContainer">
                <img className="profileImage" src={img} alt="profile" />
            </div>
            <div className="homeMenus">
                {/* Home Menus */}
                <div className="homeMenu">
                    <h1>Home</h1>
                </div>
                <div className="aboutMenu">
                    <h1>About</h1>
                </div>
                <div className="contactMenu">
                    <h1>Contact</h1>
                </div>
            </div>
        </>
    );
};

export default Home;