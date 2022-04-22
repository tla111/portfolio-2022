import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import './HeaderTwo.scss';

const HeaderTwo = () => {
    return (
        <div className="app__header">
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="header_box first_header_box"
            >
                <h1>Tim La, Front-End Web Developer</h1>
                <p>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam
                </p>
            </motion.div>
            <motion.div
                whileInView={{ x: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="header_box second_header_box"
            >
                <div className="header_boxTwo_image_container"></div>
            </motion.div>
        </div>
    )
}

export default AppWrap(HeaderTwo, "home");
