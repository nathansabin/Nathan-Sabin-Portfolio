import React, { useState } from 'react';
//TODO style this page 

export default function Footer() {
    return (
        <footer className="text-center text-white" style={{ backgroundColor: '#f1f1f1' }}>
            <div className="container pt-4">
                <section class="mb-4">
                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
                        <i className="fab fa-github"></i>
                    </a>
                </section>
            </div>
        </footer>
    )}
