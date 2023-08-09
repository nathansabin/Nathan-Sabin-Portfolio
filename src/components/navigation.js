import React, { useState } from 'react';
import Project from './project';

export default function Navigation() {
  const [tab, setTab] = useState('home');

  // TODO come back to make this highlight the selected tab 
  // set style
  return (
    <div>
        <ol className="navbar">
            <li onClick={()=> setTab('home')}>About</li>
            <li onClick={()=> setTab('portfolio')}>Portfolio</li>
            <li onClick={()=> setTab('resume')}>Resume</li>
            <li onClick={()=> setTab('contact')}>Contact</li>
        </ol>
        <Project renderTab={tab} />
    </div>
  )
}
