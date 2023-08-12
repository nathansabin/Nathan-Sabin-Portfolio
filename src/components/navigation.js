import React, { useState } from 'react';
import Project from './project';
import Header from "./header";

export default function Navigation() {
  const [tab, setTab] = useState('home');

  return (
    <>
      <div className="header">
        <div className="header-content">
          <Header />
          <ol className="navbar">
            <li onClick={() => setTab('home')}
              style={{ color: tab === 'home' ? '#F1BF98' : 'white' }}>
                About
            </li>
            <li onClick={() => setTab('portfolio')}
            style={{ color: tab === 'portfolio' ? '#F1BF98' : 'white' }}>
              Portfolio
            </li>
            <li onClick={() => setTab('resume')}
            style={{ color: tab === 'resume' ? '#F1BF98' : 'white' }}>
              Resume
            </li>
            <li onClick={() => setTab('contact')}
            style={{ color: tab === 'contact' ? '#F1BF98' : 'white' }}>
              Contact
            </li>
          </ol>   
        </div>
      </div>
      <Project renderTab={tab}/> 
    </>
  )
}
