import React from 'react';

//Import stylesheet
import '../assets/css/pages/Home.css';

//Import components
import Header from '../components/Header';
import HomeBody from '../components/HomeBody';
import CurriculumBody from '../components/CurriculumBody';
import ContactBody from '../components/ContactBody';
import Footer from '../components/Footer';

//Import packages
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const Home = () => {

    const location = useLocation();

    return (
        <>
            <Header />
            <AnimatePresence exitBeforeEnter={true}>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<HomeBody />} />
                    <Route path='/Home' element={<HomeBody />} />
                    <Route path='/Curriculum' element={<CurriculumBody />} />
                    <Route path='/Contact' element={<ContactBody />} />
                </Routes>
            </AnimatePresence>

            <Footer />
        </>
    );
};

export default Home;