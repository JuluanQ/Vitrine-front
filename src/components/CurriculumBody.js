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
                    <h3> : <span></span></h3>
                </div>
            </div>
            <div className="mainCardCurriculum">

            </div>
            <div className="rightPanel">

            </div>
        </motion.div>
    );
};

export default CurriculumBody;