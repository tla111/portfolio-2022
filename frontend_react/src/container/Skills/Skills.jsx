import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { images } from '../../constants';
import './Skills.scss';

const skillLogos = [
    { name: "React", image: images.react },
    { name: "Javascript", image: images.javascript },
    { name: "Redux", image: images.redux },
    { name: "Node JS", image: images.node },
    { name: "Python", image: images.python },
    { name: "Solidity", image: images.solidity },
    { name: "Sass", image: images.sass },
    { name: "Git", image: images.git }
]

const Skills = () => {
    const [experiences, setExperience] = useState([]);
    // const [skills, setSkills] = useState([]);

    useEffect(() => {
        const query = '*[_type == "experiences"]';
        // const skillsQuery = '*[_type == "skills"]';

        client.fetch(query).then((data) => {
            // console.log(data);
            setExperience(data);
        })
        // client.fetch(skillsQuery).then((data) => {
        //     console.log(data);

        //     setSkills(data);
        // })
    }, [])
    return (
        <>
            <h2 className="head-text">Skills & Experience</h2>

            <div className="app__skills-container">
                <motion.div className="app__skills-list">
                    {skillLogos?.map((skill) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            key={skill.name}
                        >
                            <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                                <img src={skill.image} alt={skill.name} />
                            </div>
                            <p className="p-text">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div className="app__skills-exp">
                    {/* {console.log("here", experience)} */}
                    {experiences?.map((experience) => (
                        <motion.div
                            className="app__skills-exp-item"
                            key={experience.year}
                        >
                            <div className="app__skills-exp-year">
                                <p className="bold-text">{experience.year}</p>
                            </div>
                            <motion.div className="app__skills-exp-works">
                                {experience.works.map((work) => (
                                    <>
                                        <motion.div
                                            whileInView={{ opacity: [0, 1] }}
                                            transition={{ duration: 0.5 }}
                                            className="app__skills-exp-work"
                                            data-tip
                                            data-for={work.name}
                                            key={work.name}
                                        >
                                            <h4 className="bold-text">{work.name}</h4>
                                            <p className="p-text">{work.company}</p>
                                        </motion.div>
                                        {/* <ReactTooltip
                                            id={work.name}
                                            effect="solid"
                                            arrowColor="#fff"
                                            className="skills-tooltip"
                                        >
                                            {work.desc}
                                        </ReactTooltip> */}
                                    </>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(Skills, "app__skills"),
    "experience",
    "app__whitebg"
);