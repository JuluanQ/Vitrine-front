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
            <div className="mainCardCurriculum">

            </div>
        </motion.div>
    );
};

export default CurriculumBody;