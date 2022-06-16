import React from 'react';

//import stylesheet
import '../assets/css/components/CurriculumBody.css';

//Import packages
import { motion } from 'framer-motion';

const CurriculumBody = () => {
    return (
        <motion.div className='curriculumBodyContainer'
            initial={{ opacity: 0, x: "-50%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-50%" }}
        >
            <h1>Curriculum</h1>
        </motion.div>
    );
};

export default CurriculumBody;