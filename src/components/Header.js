import React from 'react';

//Import stylesheet
import '../assets/css/components/Header.css';

//Import packages
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    return (
        <div className='headerContainer'>
            <div className="bannerContainer">
                <div className="banner">
                    <img className="bannerImg" src={require('../assets/images/1920x200.png')} alt="" />
                </div>
            </div>

            <div className="homeMenus">
                {/* Home Menus */}
                <div className="homeMenu" onClick={() => navigate("/Home")}>
                    <h1>Home</h1>
                </div>
                <div className="curriculumMenu" onClick={() => navigate("/Curriculum")}>
                    <h1>Curriculum</h1>
                </div>
                <div className="contactMenu" onClick={() => navigate("/Contact")}>
                    <h1>Contact</h1>
                </div>
            </div>
            <div className="profileImageContainer">
                <img className="profileImage" src={require('../assets/images/Photo_Profile.jpg')} alt="profile" />
            </div>
        </div>
    );
};

export default Header;