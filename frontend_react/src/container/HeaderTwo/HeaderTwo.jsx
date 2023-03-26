import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import ComputersCanvas from './Computer';
import './HeaderTwo.scss';

const HeaderTwo = () => {
    return (
        <div className="app__header">
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.75 }}
                className="header_box first_header_box"
            >
                <h1><span style={{ color: "#0033FF" }}>Tim La</span></h1>
                <h2>Full Stack Web Developer</h2>
                <h2>
                    Seeking to invigorate my curiosity & advance my proficiency in <span style={{ color: "#0033FF" }}>React, JavaScript, Sanity, Node, & Solidity</span>
                </h2>
                <p>*Interact with the computer by clicking & moving it</p>

            </motion.div>

            <ComputersCanvas />
            {/* <motion.div
                whileInView={{ x: [100, 0], opacity: [0, 1] }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.75 }}
                className="header_box second_header_box"
            >
                <img src={images.about01} alt="header-img" />
            </motion.div> */}
        </div>
    )
}

export default AppWrap(HeaderTwo, "home");
