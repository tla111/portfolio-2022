import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
    return (
        <>
            <h2 className="head-text">Take a coffee & chat with me</h2>

            <div className="app__footer-cards">
                <div className="app__footer-cards">
                    <img src={images.email} alt="email" />
                    <a href="mailto:hello@micael.com" className="p-text">hello@micael.com</a>
                </div>
                <div className="app__footer-cards">
                    <img src={images.mobile} alt="mobile" />
                    <a href="tel: +1 (123) 456-789" className="p-text">+1 (123) 456-789</a>
                </div>
            </div>

            <div className="app__footer-form app__flex">
                <div className="app__flex">
                    <input className="p-text" type="text" placeHolder="Your Name" name="name" value={name} onChange={handleChangeInput} />
                </div>
                <div className="app__flex">
                    <input className="p-text" type="email" placeHolder="Your Email" name="email" value={email} onChange={handleChangeInput} />
                </div>
                <div >
                    <textarea
                        className="p-text"
                        placeHolder="Your Message"
                        value={message}
                        name={message}
                        onChange={handleChangeInput}
                    />
                </div>
                <button type="button" className="p-text" onClick={handleSubmit}>Send Message</button>
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(Footer, "app__footer"),
    "contact",
    "app__whitebg"
)

