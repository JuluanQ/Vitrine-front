import React from 'react';

//Import stylesheet
import '../assets/css/pages/Home.css';

//Import components
import Header from '../components/Header';

const Home = () => {
    return (
        <>
            <Header />
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
                <div className="rightPane">

                </div>
            </div>
            <div className="Footer">

            </div>
        </>
    );
};

export default Home;