import React from 'react';

//Import packages
import { motion } from 'framer-motion';

const ContactBody = () => {
    return (
        <motion.div className='contactBodyContainer'
            initial={{ opacity: 0, x: "-50%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-50%" }}
        >
            <h1>Contact</h1>
        </motion.div>
    );
};

export default ContactBody;