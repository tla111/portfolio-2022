import React from 'react';

import { AppWrap } from '../../wrapper';

import './HeaderTwo.scss';

const HeaderTwo = () => {
    return (
        <div className="app__header">
            <div className="header_box first_header_box">
                <h1>Tim La, Front-End Web Developer</h1>
                <p>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam
                </p>
            </div>
            <div className="header_box second_header_box">
                <div className="header_boxTwo_image_container"></div>
            </div>
        </div>
    )
}

// export default HeaderTwo
export default AppWrap(HeaderTwo, "home");
