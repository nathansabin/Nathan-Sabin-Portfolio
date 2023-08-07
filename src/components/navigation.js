import React, { useState } from 'react';
import Project from './project';

export default function Navigation() {
  const [tab, setTab] = useState('home');

  // TODO come back to make this highlight the selected tab 
  // set style
  return (
    <div>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className='breadcrumb-item' onClick={()=> setTab('home')}>About me</li>
                <li className="breadcrumb-item" onClick={()=> setTab('portfolio')}>Portfolio</li>
                <li className="breadcrumb-item" onClick={()=> setTab('resume')}>Resume</li>
                <li className="breadcrumb-item" onClick={()=> setTab('contact')}>Contact</li>
            </ol>
        </nav>
        <Project renderTab={tab} />
    </div>
  )
}
