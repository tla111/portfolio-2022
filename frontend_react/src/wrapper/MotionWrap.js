import React from 'react';
import { motion } from 'framer-motion';

const MotionWrap = ({ Component, classNames }) => function HOC() {
    return (
        <motion.div></motion.div>
    )
}

export default MotionWrap