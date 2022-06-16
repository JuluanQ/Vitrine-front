import React from 'react';

//import stylesheet
import '../assets/css/components/ContactBody.css';

//Import packages
import { motion } from 'framer-motion';

const ContactBody = () => {
    return (
        <motion.div className='contactBodyContainer'
            initial={{ opacity: 0, x: "+50%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "+50%" }}
            transition={{ duration: 0.3 }}
        >
            <div className="mainCard">

            </div>
        </motion.div>
    );
};

export default ContactBody;