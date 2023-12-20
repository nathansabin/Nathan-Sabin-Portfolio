import React, { useState } from 'react';
import nathan from '../../assets/images/portrait.png';
import "./about.css";

export default function About() {
    return (
        <div className="container about-image ">
            <div className="card mb-3 col-12 col-lg-8 mx-auto">
                <img src={nathan} class="card-img-top" alt="nathan" />
                <div class="card-body">
                    <h5 className="card-title">About me</h5>
                    <hr/>
                    <p className="card-text">Innovative full-stack web developer that has an emphasis on front-end with a successful track record in management and a certificate in full-stack web development from UC Berkeley.</p>
                </div>
            </div>
        </div>
    )
}
