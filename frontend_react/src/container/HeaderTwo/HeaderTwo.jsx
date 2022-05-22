import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './HeaderTwo.scss';

const HeaderTwo = () => {
    return (
        <div className="app__header">
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.75 }}
                className="header_box first_header_box"
            >
                <h1>Tim La| Full Stack Web Developer 2022</h1>
                <h3>
                    SEEKING to invigorate my curiosity & escalate my expertise in <br /><span style={{ color: "#00FFFF" }}>React, JavaScript, Sanity, Node, & Solidity!!!</span>
                </h3>
            </motion.div>
            <motion.div
                whileInView={{ x: [100, 0], opacity: [0, 1] }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.75 }}
                className="header_box second_header_box"
            >
                <img src={images.about01} alt="header-img" />
            </motion.div>
        </div>
    )
}

export default AppWrap(HeaderTwo, "home");
