import React from 'react';

import { AppWrap } from '../../wrapper';

import './HeaderTwo.scss';

const HeaderTwo = () => {
    return (
        <div className="app__header">
            <div className="header_box first_header_box">
                <h1>Welcome to My Website</h1>
                <h2>Welcome to My Website</h2>
                <h3>Welcome to My Website</h3>
            </div>
            <div className="header_box second_header_box">
                <div className="header_boxTwo_image_container"></div>
            </div>
        </div>
    )
}

// export default HeaderTwo
export default AppWrap(HeaderTwo, "home");
