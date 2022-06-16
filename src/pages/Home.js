import React from 'react';

//Import stylesheet
import '../assets/css/pages/Home.css';
import Footer from '../components/Footer';

//Import components
import Header from '../components/Header';
import HomeBody from '../components/HomeBody';

const Home = () => {
    return (
        <>
            <Header />
            <HomeBody />
            <Footer />
        </>
    );
};

export default Home;