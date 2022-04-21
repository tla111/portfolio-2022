import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
// import { urlFor, client } from '../../client';
import { images } from '../../constants';

const About = () => {
    // const [abouts, setAbouts] = useState([]);

    // useEffect(() => {
    //     const query = "*[_type == 'abouts']";

    //     client.fetch(query).then((data) => { setAbouts(data) });
    // }, []);
    const projectOne = { title: "Solidity Developer", description: "I am growing my experience in solidity, blockchain, and Web 3.0", imgUrl: images.about01, id: "01" }

    return (
        <>
            <h2 className="head-text">Project 1 - <span>Web 3.0 </span>
            </h2>

            <div className="app__profiles">
                <div className="app__profile-project">

                </div>

                <motion.div
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, type: "tween" }}
                    className="app__profile-item"
                    key={projectOne.id}
                >
                    <img src={projectOne.imgUrl} alt={projectOne.title} />
                    <h2 className="bold-text" style={{ marginTop: 20 }}>{projectOne.title}</h2>
                    <p className="p-text" style={{ marginTop: 10 }}>{projectOne.description}</p>
                </motion.div>

            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__whitebg',
);