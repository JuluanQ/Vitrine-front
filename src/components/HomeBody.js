import React from 'react';

//Import stylesheet
import '../assets/css/components/HomeBody.css';

const HomeBody = () => {
    return (
        <div className='homeBodyContainer'>
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
        </div>
    );
};

export default HomeBody;