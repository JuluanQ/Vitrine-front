import React from 'react';

//import stylesheet
import '../assets/css/components/CurriculumBody.css';

//Import packages
import { motion } from 'framer-motion';

const CurriculumBody = () => {
    return (
        <motion.div className='curriculumBodyContainer'
            initial={{ opacity: 0, y: "+50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "+50%" }}
            transition={{ duration: 0.3 }}
        >
            <div className="aboutMeCard">
                <div className="aboutMeCardHeader">
                    <h1>About Me</h1>
                </div>
                <div className="aboutMeCardBody">
                    <h3>Age : <span>23</span></h3>
                    <h3>Gender : <span>Male</span></h3>
                    <h3>Location : <span>Quimper, Finistère, Bretagne, France</span></h3>
                    <h3>Hobbies : <span>Video games, Japanese culture, Coding</span></h3>
                    <h3>Music styles : <span>Metal, Rock, EDM</span></h3>
                </div>
            </div>
            <div className="mainCardCurriculum">
                <div className="a item RightItem">
                    <h3 className='aaa'>2018</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='lane laneA'></div>
                <div className="b item LeftItem">
                    <h3 className='bbb'>2019</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='lane laneB'></div>
                <div className="c item RightItem">
                    <h3 className='ccc'>2020</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='lane laneC'></div>
                <div className="d item LeftItem">
                    <h3 className='ddd'>2021</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='lane laneD'></div>
                <div className="e item RightItem">
                    <h3 className='eee'>2022</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='lane laneE'></div>
            </div>
            <div className="rightPanel">

            </div>
        </motion.div >
    );
};

export default CurriculumBody;