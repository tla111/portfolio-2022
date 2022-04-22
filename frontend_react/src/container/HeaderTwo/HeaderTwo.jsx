import React from 'react';

import { AppWrap } from '../../wrapper';

import './HeaderTwo.scss';

const HeaderTwo = () => {
    return (
        <div className="app__header">
            <div className="header_box"></div>
            <div className="header_box"></div>
        </div>
    )
}

// export default HeaderTwo
export default AppWrap(HeaderTwo, "home");
