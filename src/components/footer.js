import React, { useState } from 'react';
import github from "../assets/images/GitHub.png";
import linkedin from "../assets/images/linkedin.png";
//TODO style this page 

export default function Footer() {
    return (
        <footer className="text-center text-white footer" style={{ backgroundColor: '#f1f1f1' }}>
            <div className="container pt-4">
                <section className="mb-4">
                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://www.linkedin.com/in/nathan-sabin-492a1b277/" role="button" data-mdb-ripple-color="dark">
                      <img src={linkedin} style={{width: "30px", height: "auto"}} alt="linkedin" />
                    </a>
                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://github.com/nathansabin" role="button" data-mdb-ripple-color="dark">
                        <img src={github} style={{width: "55px", height: "auto"}} alt="github"/>
                    </a>
                </section>
            </div>
        </footer>
    )}
