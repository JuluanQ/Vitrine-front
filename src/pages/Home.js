import React from 'react';

//Import stylesheet
import '../assets/css/pages/Home.css';

//Import components
import Header from '../components/Header';
import HomeBody from '../components/HomeBody';
import Footer from '../components/Footer';

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