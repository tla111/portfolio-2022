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
                transition={{ duration: 0.5 }}
                className="header_box first_header_box"
            >
                <h1>Tim La | Front-End Web Developer</h1>
                <h3>
                    Seeking to build my curiosity and expertise in <br /><span style={{ color: "#00FFFF" }}>React, JavaScript, & Solidity, & Blah Blah</span>
                </h3>
                <p>Lorem</p>
                <small style={{ color: "red" }}>Hi</small>
                <small style={{ color: "dodgerblue" }}>Hey</small>
            </motion.div>
            <motion.div
                whileInView={{ x: [100, 0], opacity: [0, 1] }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="header_box second_header_box"
            >
                <img src={images.about01} alt="header-img" />
            </motion.div>
        </div>
    )
}

export default AppWrap(HeaderTwo, "home");
