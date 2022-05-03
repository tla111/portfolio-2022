import React from 'react';

import { Header, HeaderTwo, About, Work, Skills, Testimonial, Footer } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <HeaderTwo />
            {/* <Header /> */}
            {/* <About /> */}
            <Skills />
            <Work />
            {/* <Testimonial /> */}
            <Footer />
        </div>
    );
}

export default App;