import React, { useState } from 'react';
import nathan from '../../assets/images/portrait.png';
import "./about.css";

export default function About() {
    return (
        <>
            <div className='box-set'>
                <div className='image portrait'>
                        <img src={nathan} alt='nathan'></img>
                </div>
            </div>
            <div className='box-set'>
                <div className='box-about'>
                    <p className='about'>
                    Welcome to my portfolio! I have been learning computer science and coding for over a year, this skill has become a great obsession for me. 
                    I went through a 24-week full stack coding bootcamp, and before that, I spent time learning the basics of Python, C, and JS.
                    My greatest interest is in back-end web development, but I have practiced front-end as well.
                    </p>
                </div>
            </div>
        </>
    )
}
