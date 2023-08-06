import React, { useState } from 'react';
import About from './pages/about';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';

export default function Project(props) {
    const tab = props.tab;

    return(
        <div>
            {tab === 'home' && <About />}
            {tab === 'portfolio' && <Portfolio />}
            {tab === 'resume' && <Resume />}
            {tab === 'Contact' && <Contact />}
        </div>
    )
}

