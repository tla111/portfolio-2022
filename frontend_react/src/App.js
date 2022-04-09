import React from 'react';

import { Header, About, Work, Skills, Testimonial, Footer } from './container';

const App = () => {
    return (
        <div className="app">
            <Header />
            <About />
            <Work />
            <Skills />
            <Testimonial />
            <Footer />
        </div>
    );
}

export default App;