import React, { useState } from 'react';

import eCommerce from '../../assets/images/eCommerce.jpg';
import jate from '../../assets/images/Jate.jpg';
import pokedex from '../../assets/images/pokedex.png';
import readme from '../../assets/images/READMEGEN.png';
import social from '../../assets/images/social-media odm.jpg';
import svg from '../../assets/images/svg-gen.jpg';

export default function Portfolio() {
    return (
        <div className='img-con'>
            <div className='image'>
                <h3>eCommerce backend</h3>
                <a href='https://github.com/nathansabin/e-commerce'><img src={eCommerce} alt='eCommerce Image'></img></a>
            </div>
            <div className='image'>
                <h3>Jate PWA</h3>
                <a href='https://github.com/nathansabin/text-editor-PWA'><img src={jate} alt='jate Image'></img></a>
            </div>
            <div className='image'>
                <h3>Social Media backend</h3>
                <a href='https://github.com/nathansabin/social-network-ODM'><img src={social} alt='social-media Image'></img></a>
            </div>
            <div className='image'>
                <h3>README generator OOP</h3>
                <a href='https://github.com/nathansabin/README.md-generator'><img src={readme} alt='readme image'></img></a>
            </div>
            <div className='image bottom-page'>
                <h3>Pokedex fullstack</h3>
                <a href='https://github.com/allister-seras/MyPokedex'><img src={pokedex} alt='pokedex Image'></img></a>
            </div>
            <div className='image bottom-page'>
                <h3>SVG generator OOP</h3>
                <a href='https://github.com/nathansabin/svg-file-generator'><img src={svg} alt='svg-gen Image'></img></a>
            </div>
        </div>
    )
}
