import React, { useState } from 'react';
import './portfolio.css';

import eCommerce from '../../assets/images/eCommerce.jpg';
import jate from '../../assets/images/Jate.jpg';
import pokedex from '../../assets/images/Pokedex.png';
import social from '../../assets/images/social-media odm.jpg';
import astrolog from '../../assets/images/astrolog.png';
import Work from '../../components/work';
import bookSearch from '../../assets/images/booksearch.png'

export default function Portfolio() {
    return (
        <div className='page-layout'>
        <div className='img-con'>
            <Work 
            title="AstroLog"
            details="text"
            image={astrolog}
            github='https://github.com/allister-seras/AstroLog'
            />
            <Work 
            title="Book Search"
            details='text'
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
            details="A PWA text editor that you can install"
            image={jate}
            deployed='https://github.com/nathansabin/text-editor-PWA'
            github='https://jate-webapp-9936c0da971a.herokuapp.com'
            />
        </div>
        <div className='img-con'>
            <Work 
            title="Social media back-end"
            details="text"
            image={social}
            github='https://github.com/nathansabin/social-network-ODM'
            />
            <Work 
            title="myPokedex"
            details="text"
            image={pokedex}
            deployed='https://dashboard.heroku.com/apps/my-pokedex'
            github='https://github.com/nathansabin/MyPokedex'
            />
        </div>
        </div>
    )
}
