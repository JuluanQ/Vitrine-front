import React from 'react';

//Import stylesheet
import '../assets/css/components/HomeBody.css';

//Import packages
import { motion } from 'framer-motion';

const HomeBody = () => {
    return (
        <motion.div className='homeBodyContainer'
            initial={{ opacity: 0, x: "-50%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-50%" }}
            transition={{ duration: 0.3 }}
        >
            <div className="cardsContainer">
                <div className="leftPane">

                </div>
                {/* Cards */}
                <div className="card">
                    <img className="cardImage" src={require('../assets/images/285x175.png')} />
                    <div className="cardText">
                        <h1>Card 1</h1>
                    </div>
                </div>
                <div className="card">
                    <img className="cardImage" src={require('../assets/images/285x175.png')} />
                    <div className="cardText">
                        <h1>Card 2</h1>
                    </div>
                </div>
                <div className="card">
                    <img className="cardImage" src={require('../assets/images/285x175.png')} />
                    <div className="cardText">
                        <h1>Card 3</h1>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default HomeBody;