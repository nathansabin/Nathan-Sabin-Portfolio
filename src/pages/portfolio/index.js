import React, { useState } from 'react';
import './portfolio.css';

import eCommerce from '../../assets/images/eCommerce.jpg';
import jate from '../../assets/images/Jate.jpg';
import artist from '../../assets/images/Artist-portfolio.png';
import social from '../../assets/images/social-media odm.jpg';
import astrolog from '../../assets/images/astrolog.png';
import Work from '../../components/work';
import bookSearch from '../../assets/images/booksearch.png'

export default function Portfolio() {
    return (
        <div className='page-layout'>
        <div className='img-con'>
            <Work 
            title="Anapatsu Portfolio"
            details="React website was made as a freelance project for an artist. It displays several different art styles and some animations; it also includes contact methods, social media, and an about me."
            image={artist}
            deployed='https://nathansabin.github.io/Anapatsuu-portfolio/'
            github='https://github.com/nathansabin/Anapatsuu-portfolio'
            />
            <Work 
            title="Book Search"
            details='The book search web app is a full-stack project that allows users to make a profile, login, logout, and save their favorite books.'
            image={bookSearch}
            deployed='https://book-searchql-19ac338b1f59.herokuapp.com'
            github='https://github.com/nathansabin/book-search'
            />
        </div>
        <div className='img-con'>
            <Work 
            title="eCommerce back-end" 
            details="A full functional API using a database similar to most e-com applications." 
            github="https://github.com/nathansabin/e-commerce"
            image={eCommerce}
            />
            <Work 
            title="Jate PWA"
            details="This PWA web app allows you to write code while automatically saving progress. On top of being installable, this project works offline."
            image={jate}
            deployed='https://jate-webapp-9936c0da971a.herokuapp.com'
            github=' https://github.com/nathansabin/text-editor-PWA'
            />
        </div>
        <div className='img-con'>
            <Work 
            title="Social media back-end"
            details="This social media backend is a mockup of Twitter (X). You can create, read, and update 'thoughts'."
            image={social}
            github='https://github.com/nathansabin/social-network-ODM'
            />
             <Work 
            title="AstroLog"
            details="This website allows users to create an account, generate horoscopes and tarot readings, and save them. You can then create journal entries where you can attach saved data. Finally, you can view all your entries."
            image={astrolog}
            github='https://github.com/allister-seras/AstroLog'
            />
        </div>
        </div>
    )
}
